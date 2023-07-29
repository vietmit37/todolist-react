import { Button, Input } from "antd";
import React, { useState } from "react";
import {useToDoContext} from "../contexts/TodoContext.jsx";

const ToDoForm = () => {
  const [value, setValue] = useState("");
  const {handleAddToDo}= useToDoContext()
  const onSubmit = (e) => {
    e.preventDefault();
    handleAddToDo(value);
    setValue("");
  };
  return (
    <form
      style={{
        display: "flex",
      }}
      onSubmit={onSubmit}
    >
      <Input
        style={{
          marginRight: "10px",
        }}
        type="text"
        placeholder="Task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="primary" htmlType="submit">
        Add Task
      </Button>
    </form>
  );
};

export default ToDoForm;
