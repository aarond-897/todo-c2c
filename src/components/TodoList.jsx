import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props =>{

    const todoItems=props.todos.map((item,i)=>(
        <TodoItem key={i} id={item.id} todo={item.todo} priority={item.priority} complete={item.complete} updateTodo={props.updateTodo}/>
    ))

    console.log(props.todos)
    return(
        <div>
            {todoItems}
        </div>
    )
}

export default TodoList;