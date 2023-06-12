import React, { useState } from "react";
import { TodoComponent } from "./TodoComponent";
import { AddTodo } from "./AddTodo";
import { Frazes } from "../Frazes/Frazes";
import styles from "./Todo.module.scss";
import { faL } from "@fortawesome/free-solid-svg-icons";

export interface TodoItem {
  id: Date;
  title: string;
  marked: boolean;
  time: string
}

export const TodoListComponent = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [state, setState] = useState(false); //0 - отсюда,
  const [sortTodoUp, setSortTodoUp] = useState<TodoItem[]>([]); //1 отсюда
  const [sortedTime, setSortedTime] = useState<TodoItem[]>([]); //2 отсюда
  const [stateTime, setStateTime] = useState(false);

  const makeNewTodo = (newTodo: TodoItem) => {
    setTodoList([...todoList, newTodo]);
  };

  const deletTodo = (idDel: Date) => {
    setTodoList(todoList.filter((el) => el.id !== idDel));
  };

  const doneTodo = (idDone: Date) => {
    const changeTodo = todoList.find((el) => el.id === idDone);

    changeTodo && (changeTodo.marked = !changeTodo.marked);
    setTodoList([...todoList]);
  };

  const deletAll = () => {
    setTodoList([]);
  };

  const sortUp = () => {
    const arr = todoList;
    const sortArr = arr.filter((el) => el.marked);
    setState(true);
    setSortTodoUp([...sortArr]);
  };

  const sortDown = () => {
    const arr = todoList;
    const sortArr = arr.filter((el) => !el.marked);
    setState(true);
    setSortTodoUp([...sortArr]);
  };

  const clearSort = () => {
    setState(false);
    setTodoList([...todoList]);
  };

  const showState = () => {
    console.log(todoList);
    console.log(sortedTime);
  };
  const sortTimeUp = () => {
    setStateTime(true);
    const arr = todoList;
    const newArr = arr.sort((a, b) => {
      let dateA = new Date(a.time);
      let dateB = new Date(b.time);
      return dateA.getTime() - dateB.getTime();
    });
    setSortedTime([...newArr]);
  };

  const sortTimeDown = () => {
    const arr = todoList;
    const newArr = arr.sort((a, b) => {
      let dateA = new Date(a.time);
      let dateB = new Date(b.time);
      return dateB.getTime() - dateA.getTime();
    });
    setSortedTime([...newArr]);
  };
  const actualState = () => {
    if (!state) return todoList;
    else return sortTodoUp;
  };

 
  return (
    <div className={styles.formWraper}>
      <button className={styles.stateBtn} onClick={showState}>
        State
      </button>

      <Frazes />

      <AddTodo makeNewTodo={makeNewTodo} />

      <div className={styles.buttonMenu}>
        <div>
          <button onClick={sortTimeUp}>sortTime</button>
          <p>SortTime</p>
          <button onClick={sortTimeDown}>sortDown</button>
        </div>
        <div>
          <button onClick={sortUp}>SortUp</button>
          <p>SortDone</p>
          <button onClick={sortDown}>sortDown</button>
        </div>
        <div>
          <button onClick={clearSort}>clearSort</button>
          <p>Clear</p>
          <button onClick={deletAll}>deletAll</button>
        </div>
      </div>

      {actualState().map((el) => (
        <TodoComponent
          key={el.id.getTime()}
          {...el}
          deletTodo={deletTodo}
          doneTodo={doneTodo}
        />
      ))}
    </div>
  );
};
