import Header from './components/Header'
import Tasks from './components/Tasks';
import {useState} from 'react'
import AddTask from './components/AddTask';

function App() {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([
    {
        id:1,
        text:'Doctor meet',
        day:'Friday',
        reminder:false
    },
    {
        id:4,
        text:'Get Groceries',
        day:'Friday',
        reminder:true
    },
    {
        id:22,
        text:'Go To Gym',
        day:'Thursday',
        reminder:false
    },
    {
        id:3,
        text:'Online Meet',
        day:'Saturday',
        reminder:true
    }
  ]
  )
  
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks,newTask])
    }

  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task,reminder:!task.reminder}:task))  
  }

  return (
    <div className = 'container'>
      <Header className='headers' onAdd = {() => setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      { tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> : 'There are no task'}
    </div>
  );
}

export default App;
