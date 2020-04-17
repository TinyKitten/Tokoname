import React, { useMemo, ChangeEvent } from "react";
import { Message } from "../models/Message";

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  messages: Message[];
  onTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
  textValue: string;
};

const styles: { [key: string]: React.CSSProperties } = {
  rootStyle: {
    width: "100%",
  },
  messageListStyle: {
    appearance: "none",
    borderRadius: "4px",
    background: "hsla(0,0%,100%,.25)",
    backdropFilter: "blur(4px)",
    border: "1px solid #fff",
    textDecoration: "none",
    color: "#fff",
    fontSize: "1rem",
    maxWidth: "380px",
    width: "75%",
    margin: "24px auto",
    padding: 0,
  },
  messageListCellStyle: {
    padding: "12px 24px",
    margin: 0,
    listStyleType: "none",
  },
  messagePostedAt: {
    margin: 0,
    padding: 0,
    marginBottom: "4px",
    fontSize: "0.75rem",
    lineHeight: "0.75rem",
  },
  messageText: {
    margin: 0,
    padding: 0,
    lineHeight: 1.5,
  },
  form: {
    margin: "0 auto",
    maxWidth: "380px",
    width: "75%",
    display: "flex",
    justifyContent: "space-between",
  },
  inputText: {
    background: "hsla(0,0%,100%,.25)",
    backdropFilter: "blur(4px)",
    border: "1px solid #fff",
    borderRadius: "4px",
    fontSize: "1rem",
    color: "#fff",
    padding: "4px 8px",
    width: "80%",
  },
  submitStyle: {
    appearance: "none",
    padding: "4px 8px",
    borderRadius: "4px",
    background: "hsla(0,0%,100%,.25)",
    backdropFilter: "blur(4px)",
    border: "1px solid #fff",
    textDecoration: "none",
    color: "#fff",
    cursor: "pointer",
    fontSize: "1rem",
    MozAppearance: "none",
    WebkitAppearance: "none",
    outline: "none",
    userSelect: "none",
  },
  noMessage: {
    color: "#fff",
    fontWeight: "normal",
    textAlign: "center",
  },
  disclaimer: {
    color: "#fff",
    margin: "0 auto",
    maxWidth: "380px",
    width: "75%",
    fontSize: "0.75rem",
    marginTop: "8px",
    fontWeight: "bold",
  },
};

const Form: React.FC<Props> = ({
  messages,
  onSubmit,
  onTextChange,
  textValue,
}) => {
  const renderMessages = useMemo(() => {
    if (!messages.length) {
      return <h3 style={styles.noMessage}>まだお気持ち表明がありません</h3>;
    }
    return messages.map((msg, i) => (
      <li
        style={{
          ...styles.messageListCellStyle,
          borderBottom: i && i !== messages.length - 1 ? "1px solid hsla(0,0%,100%,.5)" : undefined,
        }}
        key={msg.postedAt}
      >
        <time style={styles.messagePostedAt}>
          {msg.postedMoment.format("YYYY/MM/DD hh:mm")}
        </time>
        <p style={styles.messageText}>{msg.text}</p>
      </li>
    ));
  }, [messages]);

  return (
    <section style={styles.rootStyle}>
      <ul style={styles.messageListStyle}>{renderMessages}</ul>
      <form style={styles.form} onSubmit={onSubmit}>
        <input
          onChange={onTextChange}
          value={textValue}
          style={styles.inputText}
          type="text"
          maxLength={140}
        />
        <input style={styles.submitStyle} type="submit" value="表明" />
      </form>
      <p style={styles.disclaimer}>
        投稿は削除できません。
        <br />
        誹謗中傷はおやめください。
      </p>
    </section>
  );
};

export default Form;
