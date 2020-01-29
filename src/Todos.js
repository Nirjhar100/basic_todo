import React from 'react'

const Todos = ({todos, deleteTodo}) =>{
    const todoList = todos.length ? (
        todos.map(todo =>{
            return(
                <div className="collection-item black" key = {todo.id}>
                    <span className="intext" >{todo.content}</span>
                    <a href="#!" class="secondary-content" onClick ={ ()=>{deleteTodo(todo.id)} } ><i class="material-icons">delete</i></a>
                </div>
            )
        })
    ):(
        <p className = "center"> You've no Todos left, yay!</p>
    )
    return(
        <div className="todos collection">
             {todoList}
        </div>
    )
}

export default Todos;