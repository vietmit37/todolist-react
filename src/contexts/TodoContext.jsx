import {createContext, useContext, useEffect, useReducer, useState} from "react";
import {v4 as uuidv4} from "uuid";
// reducer
import {
    addTodo, deleteAllTodo,
    deleteTodo,
    initialState,
    reducer, toggleCheckTodo,
    updateNameTodo
} from "../reducers/todo.reducer";

export const TodoContext = createContext();
export const ToDoProvider= ({children}) => {
    const [{todos}, dispatch] = useReducer(reducer, initialState);
    const [alert, setAlert] = useState({ message: "", type: "", isShow: false });
    const handleShowAllert = (message = "", type = "", isShow = false) => {
      setAlert({ message, type, isShow });
    };
    const handleAddToDo = (todo) => {
        if (todo.trim() !== "" && !todos.some((item) => item.nameTask === todo)) {
            const item =  {
                id: uuidv4(),
                nameTask: todo,
                completed: false,
            }
            dispatch(addTodo(item))
            handleShowAllert("Thêm thành công", "success", true);
        }
        else if (!todo) {
            handleShowAllert("Vui lòng nhập task", "danger", true);
        } else {
            handleShowAllert(
                "Task đã tồn tại! Vui lòng nhập task khác",
                "danger",
                true
            );
        }
    };
    const handleDeleteToDo = (todo) => {
      dispatch(deleteTodo(todos.filter((item) => item.id !== todo.id)));
    };

    const handleDeleteAllToDo = () => {
        dispatch(deleteAllTodo([]));
    };

    // Update
    const handleRenameTask = (newName, id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, nameTask: newName } : todo
        );
        dispatch(updateNameTodo(updatedTodos))
    };

    const handleToggleCheck = (todo) => {
      const updatedTodos = todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      );
      dispatch(toggleCheckTodo(updatedTodos));
    };

    useEffect(() => {
      localStorage.setItem("taskList", JSON.stringify(todos));
    }, [todos]);
    return (
        <TodoContext.Provider
          value={{
            // states
              todos,
            // actions
              handleAddToDo,
              handleDeleteToDo,
              handleRenameTask,
              handleToggleCheck,
              handleDeleteAllToDo,
            // alert
              alert,
              handleShowAllert
          }}
        >
          {children}
        </TodoContext.Provider>
    )
}
export const useToDoContext= () => useContext(TodoContext)
