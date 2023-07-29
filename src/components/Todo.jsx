import { Checkbox, Input } from "antd";
import React, { useState } from "react";

const Todo = ({
  nameTask,
  completed,
  handleDeleteToDo,
  onRenameTask,
  handleToggleCheck,
  id,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };
  return (
    <div className="todo-name" key={id}>
      <div className="todo__name--checkbox">
        <Checkbox onChange={handleToggleCheck} checked={completed} />
        {!isEdit && (
          <div
            className={`task-name ${completed ? "done" : "not-done"}`}
            onClick={() => setIsEdit((prev) => !prev)}
          >
            <span> {nameTask}</span>
          </div>
        )}
        {isEdit && (
          <form onSubmit={onSubmit}>
            <Input
              value={nameTask}
              type="text"
              onChange={(e) => onRenameTask(e.target.value)}
            />
          </form>
        )}
      </div>
      <button onClick={handleDeleteToDo}>Delete</button>
    </div>
  );
};

export default Todo;
