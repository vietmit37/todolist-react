import { useEffect, useState } from "react";
// css
import "./App.css";
//Components
import ToDoForm from "./components/ToDoForm";
import Todo from "./components/Todo";
// lib
import { v4 as uuidv4 } from "uuid";
import { getLocalStorage } from "./helper/localStorage";
import Alert from "./components/Alert";
import TabsCustom from "./components/TabsCustom";
import DoneTasksTab from "./components/DoneTasksTab";
import NotDoneTasksTab from "./components/NotDoneTasksTab";
import {TodoContext, ToDoProvider} from "./contexts/TodoContext.jsx";
import {Button} from "antd";

function App() {
  return (
  <ToDoProvider>
    <TodoContext.Consumer>{(context)=>(
        <div className="container">
          <div className="wrapper-todo">
            <h1>#TODO</h1>

            {context.alert.isShow && (
              <Alert {...context.alert} onHidden={context.handleShowAllert} todos={context.todos} />
            )}

              <TabsCustom
                tabAll={<ToDoForm />}
                tabNoDone={<NotDoneTasksTab />}
                tabDone={<DoneTasksTab />}
              />
            <Button
                style={{
                  marginTop:"10px"
                }}
                type='primary'
                danger
                onClick={context.handleDeleteAllToDo}
            >
              Delete All
            </Button>
          </div>
        </div>
    )}
    </TodoContext.Consumer>
  </ToDoProvider>
  );
}

export default App;
