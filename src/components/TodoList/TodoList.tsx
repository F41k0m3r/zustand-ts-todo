import React, {FC} from 'react';
import TodoEl from '../TodoEL/TodoEl';
import useTodoStore from '../store/TodoStore';

const TodoList:FC = () => {
    const store = useTodoStore()
    return (
        <div>
            <ul>
                {store.todos.map((el)=>{
                    return <li key={el.id}>
                        <TodoEl key={el.id} element={el}/>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default TodoList;
