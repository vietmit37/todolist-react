import React, { Fragment } from 'react'
import Todo from './Todo';
import {useToDoContext} from "../contexts/TodoContext.jsx";

const DoneTasksTab = () => {
  const {todos} = useToDoContext()
  const doneTasks = todos.filter((todo) => todo.completed);
  const { handleDeleteToDo, handleRenameTask, handleToggleCheck }= useToDoContext()
  return (
      <>
        {doneTasks.map((todo) => (
            <Fragment key={todo.id}>
              <Todo
                  onRenameTask={(newName) => handleRenameTask(newName, todo.id)}
                  {...todo}
                  handleDeleteToDo={() => handleDeleteToDo(todo)}
                  handleToggleCheck={() => handleToggleCheck(todo)}
              />
            </Fragment>
        ))}</>
  )
}

export default DoneTasksTab
