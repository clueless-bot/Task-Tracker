import {FaTimes} from 'react-icons/fa'
import {FaBell} from 'react-icons/fa'

const Task = ({task,onDelete,onToggle}) => {
    return (
    <div>
      <h3 className='task'>
        {task.text} <FaBell className={task.reminder+'reminder'} style={{cursor:'pointer'}} icon={["bell"]} onClick = {()=>onToggle(task.id)} /> 
        <FaTimes className='delete_button' style={{color:'red' ,cursor:'pointer'}} onClick = {() => onDelete(task.id)}/>
        <p className = 'task_time'>
          {task.day}
        </p>
      </h3>
    </div>
  )
}
export default Task
