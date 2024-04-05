import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {addTodo} from "./TodoSlise";
import {v4 as uuidv4} from 'uuid';

const Form = () => {
    const dispatch = useDispatch()
    const [todoValue, setTodoValue] = useState('')
    const addTodoHandler = () => {
        const todo = {
            id: uuidv4(),
            text: todoValue,
            completed: false,
            edit: false
        }
        dispatch(addTodo(todo))
        setTodoValue('')
    }
    return (
        <form className='w-full flex ml-4' onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                value={todoValue}
                placeholder='Введите дело...'
                className='p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
                onChange={e => {
                    setTodoValue(e.target.value)
                }}
            />
            <button
                type='submit'
                className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
                onClick={() => {
                    addTodoHandler()
                }}
            >
                Добавить
            </button>
        </form>
    )
}

export default Form
