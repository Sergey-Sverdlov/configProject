import React from 'react';
import Form from "../features/todo/Form";
import ListTodos from "../components/ui/ListTodos";

const Todos = () => {
    return (
        <div>
            <h1 className="text-4xl text-center mb-6 mt-4">Список дел</h1>
            <Form/>
            <ListTodos/>
        </div>
    );
};

export default Todos;
