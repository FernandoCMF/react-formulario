// Agora vejo sentido em usar styled-component
import React from "react";
import "./ContentLayout.css";

const STYLES = ["content__left", "content__rigth"];

export const ContentContainer = ({ children }) => {
  return <div className='content__container'>{children}</div>;
};

export const ContentHalf = ({ children }) => {
  return <div className='content__half'>{children}</div>;
};

export const ContentLocation = ({ children, content_location }) => {
  const checkLocation = STYLES.includes(content_location)
    ? content_location
    : STYLES[0];
  return <div className={`$content ${checkLocation}`}>{children}</div>;
};
