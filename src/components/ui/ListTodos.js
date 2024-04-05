import React from 'react';
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";

const ListTodos = () => {
    const todos = useSelector(state => state.todo.todos)
    return (
        <div>
            {
                todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                    />
                ))
            }
        </div>
    );
};

export default ListTodos;
