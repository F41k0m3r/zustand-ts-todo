import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {devtools} from 'zustand/middleware';
import {ITodo, ITodoStore} from '../typescript/interfaces';


const addTodo = (todos:ITodo[], body:string, title:string):ITodo[] => [
    ...todos,
    {
        id: todos.length + 1,
        body,
        title,
        completed: false
    }
]

const useTodoStore = create<ITodoStore>()(devtools(immer((set, get)=>({
    todos:[
        {id:1, body:'random todo', title:'rand', completed:false},
        {id:2, body:'random todo', title:'rand', completed:false},
        {id:3, body:'random todo', title:'rand', completed:false},
    ],
    createTodo (title, body) {
        const {todos} = get()
        set((state) => ({
            todos: addTodo(todos, title, body)
        }))
    },
    removeTodo: (id) => {
        set((state) => ({
            todos: state.todos.filter((el)=> el.id !== id)
        }))
    },
    fetchTodos: () => {
        const {todos} = get()
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(json => {
                set((state) => ({
                    ...state,
                    todos: [
                        ...todos,
                        ...json
                    ]
                }))
            })
        console.log(todos);
    },
    completeTodo: (id) => {
        set((state) => ({
           todos: state.todos.map((el)=>({
                    ...el,
                    completed: el.id === id ? !el.completed : el.completed
           }))
        }))
    }
}))))
export default useTodoStore;