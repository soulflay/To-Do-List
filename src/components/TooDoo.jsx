import React from 'react'
import todo_icon from '../assets/list.png'
import ToDoItems from './ToDoItems'

const TooDoo = () => {
  return (
    <div className='bg-white place-self-center w-3xl max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
       
       {/* title */}
        <div className='flex items-center mt-7 gap-2'>
            <img className='w-12' src={todo_icon} alt="task_icon" />
            <h1 className='text-2xl font-semibold'>To-Do List</h1>
        </div>

        {/* input box */}
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input className='bg-transparent border-0 outline-none flex flex-1 h-13 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your Task' />
            <button className='border-none rounded-full bg-blue-600 w-28 h-13 text-[16px] text-white font-medium cursor-pointer'>ADD</button>
        </div>

        {/* to-do list */}
        <div>
            <ToDoItems text="Learn stuff right now sucker"/>
            <ToDoItems text="Learn stuff right now sucker"/>
        </div>
    
    
    </div>
  )
}

export default TooDoo