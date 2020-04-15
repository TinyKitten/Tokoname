import React from "react";
import "./App.css";
import tkLogo from "./assets/tinykitten.svg";

function App() {
  return (
    <div className="root">
      <div className="container">
        <a
          className="mainButton"
          href="https://twitter.com/intent/tweet?text=%23ナメはりますなぁ&url=https%3A%2F%2Fname.tinykitten.me%2F&source=webclient"
          target="_blank"
          rel="noopener noreferrer"
        >
          ナメはりますなぁ
        </a>
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
}

export default App;
