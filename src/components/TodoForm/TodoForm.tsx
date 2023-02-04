import React, {Fragment} from 'react';
import useTodoStore from '../store/TodoStore';
import styles from './TodoForm.module.css';
import {SubmitHandler, useForm} from 'react-hook-form';

type Inputs = {
    title:string
    description:string
}
const TodoForm = () => {
    const {register, handleSubmit,reset, formState:{errors}} = useForm<Inputs>()
    const store = useTodoStore()

    const onSubmit:SubmitHandler<Inputs> = (data):void => {
        store.createTodo(data.description, data.title)
        reset()
    }
    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.wrap}>
                <input
                    placeholder={'Todo title'}
                    className={styles.input}
                    {...register('title', {
                        required:true,
                    })}
                    type="text"/>
                {errors.title?.type === 'required'
                    && <h4 className={styles.error}>The title is required</h4>
                }
                <input
                    placeholder={'Todo description'}
                    className={styles.input}
                    {...register('description', )}
                    type="text"/>
                <input className={styles.submit} type="submit"/>
            </form>
        </Fragment>
    );
};

export default TodoForm;
