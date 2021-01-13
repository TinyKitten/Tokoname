import React, { useEffect, useCallback, useState, ChangeEvent } from "react";
import firebase from "firebase/app";
import moment from "moment";
import "./App.css";
import tkLogo from "./assets/tinykitten.svg";
import Button from "./components/Button";
import Form from "./components/Form";
import { Message, MessageBase } from "./models/Message";

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");

  const handlePostTwitter = () => {
    const url =
      "https://twitter.com/intent/tweet?text=%23ナメはりますなぁ&url=https%3A%2F%2Fname.tinykitten.me%2F&source=webclient";
    window.open(url, "_blank");
  };

  useEffect(() => {
    const f = async () => {
      await firebase.auth().signInAnonymously();
      firebase
        .firestore()
        .collection("messages")
        .orderBy("postedAt", "desc")
        .limit(5)
        .onSnapshot((snapshot) => {
          setMessages(
            snapshot.docs.map((m) => ({
              ...(m.data() as Message),
              id: m.id,
            }))
          );
        });
    };
    f();
  }, []);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!text || !text.match(/\S/g)) {
        return alert("メッセージを入力してください。");
      }
      if (text.length > 140) {
        return alert("140文字以内で入力してください");
      }
      const urlPattern = new RegExp(
        "((https?|ftp)(://[-_.!~*'()a-zA-Z0-9;/?:@&=+$,%#]+))"
      );
      if (urlPattern.test(text)) {
        return alert("URLを含むテキストは投稿できません");
      }
      const payload: MessageBase = {
        text,
        postedAt: moment().unix(),
      };
      setText("");
      firebase.firestore().collection("messages").add(payload);
    },
    [text]
  );

  const handleTextChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      setText(event.currentTarget.value),
    []
  );

  return (
    <div className="root">
      <div className="container">
        <h2 className="heading">お気持ち表明しよう </h2>
        <Form
          onTextChange={handleTextChange}
          messages={messages}
          onSubmit={handleSubmit}
          textValue={text}
        />
        <Button onClick={handlePostTwitter}>シェアする</Button>
        <footer className="footer">
          <a
            href="https://github.com/TinyKitten/Tokoname"
            rel="noopener noreferrer"
            target="_blank"
            className="link"
          >
            ロゴ募集中
          </a>
          <a
            href="https://tinykitten.me"
            rel="noopener noreferrer"
            target="_blank"
            className="link productof"
          >
            A product of&nbsp;
            <img src={tkLogo} alt="TinyKitten" />
          </a>
          <p className="link copyright">
            Copyright &copy; 2020&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tinykitten.me"
            >
              TinyKitten
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
