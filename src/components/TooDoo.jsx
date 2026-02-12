import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/list.png'
import ToDoItems from './ToDoItems'

const TooDoo = () => {
    const inputRef = useRef()
    const [searchTerm, setSearchTerm] = useState("")
    const [todoList, setTodolist] = useState(localStorage.getItem("todo")? 
        JSON.parse(localStorage.getItem("todo")) : [])

    const add = () => {
        const inputText = inputRef.current.value.trim()
        if (inputText === ''){
            return null
        }
        
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }

        setTodolist((prev) => [...prev, newTodo])
        inputRef.current.value = ''

    }

    const filteredSearchList = todoList.filter((todo) => {
         return todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    })
    

    const deleteTodo = (id) => {
        setTodolist((prevTodos) => {
        return prevTodos.filter((todo) => todo.id !== id)//filter the todo array with the condition that todo.id does not equal the current id that we passed meaning that we take the list and return a new list where the id we passed has been removed
    })

    }
    const toggle = (id) => {
        setTodolist((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id){
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo
            })
        })
    }

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todoList))
    }, [todoList])

  return (
    <div className='bg-white place-self-center w-3xl max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
       
       {/* title */}
        <div className='flex items-center mt-7 gap-2'>
            <img className='w-12' src={todo_icon} alt="task_icon" />
            <h1 className='text-2xl font-semibold'>To-Do List</h1>
        </div>

        {/* input box */}
        <div className='flex flex-col'>
            <div className='flex items-center my-7 bg-gray-200 rounded-full'>
                <input ref = {inputRef} className='bg-transparent border-0 outline-none flex flex-1 h-10 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your Task' />
                <button onClick={add} className='border-none rounded-full hover:bg-blue-500 bg-blue-600 w-28 h-13 text-[16px] text-white font-medium cursor-pointer'>ADD</button>
            </div>
    
            <div>
                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='bg-gray-200 h-10 mb-5 px-5 text-[16px] placeholder:text-slate-600 rounded-full mx-1' type="search" placeholder='Search ToDo'/>
            </div>
        </div>


        {/* to-do list */}
        <div>
            {filteredSearchList.map((item, index) => {
                return <ToDoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete}
                deleteTodo={deleteTodo} toggle={toggle}/>
            } ) }
        </div>
    
    
    </div>
  )

}

export default TooDoo