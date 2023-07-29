import React, { Fragment } from "react";
import Todo from "./Todo";
import {useToDoContext} from "../contexts/TodoContext.jsx";

const NotDoneTasksTab = () => {
  const {todos} = useToDoContext()
  const notDoneTasks = todos.filter((todo) => !todo.completed);
  const { handleDeleteToDo, handleRenameTask, handleToggleCheck }= useToDoContext()
  return (
    <>
      {notDoneTasks.map((todo) => (
          <Fragment key={todo.id}>
            <Todo
                onRenameTask={(newName) => handleRenameTask(newName, todo.id)}
                {...todo}
                handleDeleteToDo={() => handleDeleteToDo(todo)}
                handleToggleCheck={() => handleToggleCheck(todo)}
            />
          </Fragment>
      ))}
    </>
  );
};

export default NotDoneTasksTab;
