import React, { useEffect } from "react";

const Alert = ({ type, message, onHidden, todos }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      onHidden();
    }, 1500);
    () => clearTimeout(timeOut);
  }, [todos]);
  return <p className={`alert alert-${type}`}>{message}</p>;
};

export default Alert;
