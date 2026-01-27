import React from 'react'
import notTick_icon from '../assets/check.png'
import tick_icon from '../assets/checked.png'
import trash_icon from '../assets/delete.png'


const ToDoItems = ({text, toggle, id, isComplete, deleteTodo}) => {
  return (
    <div className='flex items-center my-3 gap-2 '>
        <div onClick= {() => {toggle(id)}} className='flex flex-1 cursor-pointer items-center'>
            <img className='w-8' src={isComplete? tick_icon : notTick_icon} alt="" />
            <p className={`text-slate-700 ml-3 text-[15px] decoration-slate-500 ${isComplete? "line-through"
              : ""}`}>{text}</p>
        </div>

        <img src={trash_icon} onClick={() => {deleteTodo(id)}} alt="delete_icon" className='w-8 cursor-pointer' />
    </div>
  )
}

export default ToDoItems