import React from "react";

type Props = {
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const buttonStyle: React.CSSProperties = {
  appearance: "none",
  padding: "12px 24px",
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
};

const Button: React.FC<Props> = ({ children, onClick, type }) => {
  return (
    <button type={type} style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
