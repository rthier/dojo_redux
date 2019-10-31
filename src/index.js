import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const todoList = [
    {
        id: 1,
        title: "commitar",
        done: true,
    },
    {
        id: 2,
        title: "criar mr",
        done: true,
    },
    {
        id: 3,
        title: "teste de integracao no pipeline",
        done: false,
    },
    {
        id: 4,
        title: "impeachment",
        done: false,
    }
]



function todosReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_TODOS':
      return {
          todos: todoList
      }
    default:
      return state
  }
}

const store = createStore(todosReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
