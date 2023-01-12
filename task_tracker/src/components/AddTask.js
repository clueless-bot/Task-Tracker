import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {

    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
         if (!text){
            alert('Please add a task')
            return
         }
         onAdd({text,day,reminder})
         setText('')
         setDay('')
         setReminder(false)
    }

  return (
    <form className='add-form' onSubmit = {onSubmit}>
        <div className='form'>
            <h3><label className='label'>Task</label></h3>
            <input className = 'input' type='text' placeholder='Add Task' value = {text} onChange={(e) => setText(e.target.value)}/>
        </div>      
        <div className='form'>
            <h3><label className='label'>Day & Time</label></h3>
            <input className = 'input' type='text' placeholder='Add Reminder' value = {day} onChange={(e) => setDay(e.target.value)}/>
        </div>      
        <div className='form'>
            <h3><label className='label'>Set Reminder</label></h3>
            <input className = 'input_checkbox'type='checkbox' value = {reminder} checked = {reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>      
        <input type='submit' value ='Save Task' className='btn_save_task'/>
    </form >
  )
}

export default AddTask
