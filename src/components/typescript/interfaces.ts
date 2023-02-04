export interface ITodo {
    id:number,
    title:string,
    body:string,
    completed:boolean
}
export interface ITodoStore {
    todos: ITodo[],
    createTodo: (tittle:string, body:string) => void
    removeTodo: (id:number) => void
    completeTodo:(id:number) => void
    fetchTodos: () => void
}