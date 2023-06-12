

import React, {FC} from 'react';
import styles from "./Todo.module.scss";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TodoComponentProps {
  id: Date;
  title: string;
  marked: boolean;
  time: string;
  doneTodo: (id: Date) => void;
  deletTodo: (id: Date) => void;

}


export const TodoComponent: FC<TodoComponentProps> = ({id, title, marked, time, doneTodo, deletTodo}) => {

  return (
    <div className={!marked ? styles.todo : styles.done}>
      <input type="checkbox" checked={marked} onChange={()=>doneTodo(id)}></input>
      <span className={styles.descr}> {title}</span>
      <p className={styles.time}>{time}</p>
      <button className={styles.deletBtn} onClick={()=>deletTodo(id)}>  
      <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  )
}
