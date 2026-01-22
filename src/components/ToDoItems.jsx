import React from 'react'
import notTick_icon from '../assets/check.png'
import tick_icon from '../assets/checked.png'
import trash_icon from '../assets/delete.png'

const ToDoItems = ({text}) => {
  return (
    <div className='flex items-center my-3 gap-2 '>
        <div className='flex flex-1 cursor-pointer items-center'>
            <img className='w-8' src={tick_icon} alt="" />
            <p className='text-slate-700 ml-3 text-[15px]'>{text}</p>
        </div>

        <img src={trash_icon} alt="delete_icon" className='w-8 cursor-pointer' />
    </div>
  )
}

export default ToDoItems