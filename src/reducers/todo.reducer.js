
// constant
import {getLocalStorage} from "../helper/localStorage.js";

const ADD_ITEM_TODO = 'TODO/ADD_ITEM';
const DELETE_ITEM_TODO = 'TODO/DELETE_ITEM';
const UPDATE_ITEM_TODO = 'TODO/UPDATE_ITEM';
const TOGGLE_CHECK_TODO = 'TODO/TOGGLE_CHECK';
const DELETE_ALL_TODO = 'TODO/DELETE_ALL';

// initial state
export const initialState = {
  todos: getLocalStorage() || []
}

// action creator
export const addTodo = (payload) => {
  return {
    type: ADD_ITEM_TODO,
    payload
  }
}
export const deleteTodo = (payload) => {
  return {
    type: DELETE_ITEM_TODO,
    payload
  }
}

export const deleteAllTodo = (payload) => {
  return {
    type: DELETE_ALL_TODO,
    payload
  }
}

export const updateNameTodo = (payload) => {
  return {
    type: UPDATE_ITEM_TODO,
    payload
  }
}

export const toggleCheckTodo = (payload) => {
  return {
    type: TOGGLE_CHECK_TODO,
    payload
  }
}
// reducer
export function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case ADD_ITEM_TODO: {
      return {
        ...state,
        todos: [...state.todos, payload]
      }
    }

    case UPDATE_ITEM_TODO: {
      // const {newName , id} = payload
      // const updatedTodos = state.todos.map((todo) =>
      //     todo.id === id ? { ...todo, nameTask: newName } : todo
      // );
      return {
       todos: payload
      };
    }

    case DELETE_ITEM_TODO: {
      return {
        todos: payload
      }
    }

    case DELETE_ALL_TODO: {
      return {
        todos: payload
      }
    }

    case TOGGLE_CHECK_TODO: {
      return {
        todos: payload
      }
    }
    default:
      return state
  }
}
