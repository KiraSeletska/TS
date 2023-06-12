import { useState, FC } from "react";
import styles from "./Todo.module.scss";
import { TodoItem } from "./TodoListComponent";


interface AddTodoProps {
  makeNewTodo: (newTodo: TodoItem) => void;
}

export const AddTodo: FC <AddTodoProps> = ({ makeNewTodo }) => {
  const [description, setDescription] = useState("");
  const [newTime, setNewTime] = useState("");

  const addNewTodo:React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!description) return;

    const newTodo = {
      id: new Date(),
      title: description,
     // time: (newTime).split('-').reverse().join('.'),
     time: newTime,
      marked: false,
    };

    makeNewTodo(newTodo);
    setDescription("");
    setNewTime("");
  };

  return (
    <form action="" onSubmit={(event)=>addNewTodo(event)} className={styles.form}>
      <input
        type="text"
        onChange={(event) => setDescription(event.target.value)}
        value={description}
      ></input>
      <input
        type="date"
        onChange={(event) => setNewTime(event.target.value)}
        value={newTime}
      ></input>
      <button className={styles.addbtn} type="submit">
        Add
      </button>
    </form>
  );
};
