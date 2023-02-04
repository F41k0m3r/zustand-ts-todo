import React from 'react';
import {ITodo} from '../typescript/interfaces';
import styles from './TodoEL.module.css';
import useTodoStore from '../store/TodoStore';

const TodoEl = ({element}:{element:ITodo}) => {
    const store = useTodoStore()
    return (
        <div className={styles.wrap}>
            <div className={styles.row}>
                <input className={styles.complete} onChange={e=>store.completeTodo(element.id)} type="checkbox"/>
                <h1>{element.id}.</h1>
                <h1 className={element.completed ? styles.completedTitle : null}>{element.title}</h1>
                <button className={styles.removeButton} onClick={e=>store.removeTodo(element.id)}>❌</button>
            </div>
            <h1 className={element.completed ? styles.completedBody : styles.body}>{element.body}</h1>
        </div>
    );
};

export default TodoEl;
