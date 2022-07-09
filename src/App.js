import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from "react"


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Wash the cat',
        day: 'Fri 8th July at 1:00pm',
        reminder: true,

    },
    {
        id: 2,
        text: 'Feed the car',
        day: 'Sat 9th July at 10:00am',
        reminder: true,

    },
    {
        id: 3,
        text: 'Catch some birds',
        day: 'Sat 9th July at 2:30pm',
        reminder: true,

    },
])

  // add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  // delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter( (task) => task.id !== id ))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task ))

  }


  return (
    <div className='container'>
      <Header  />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ?       
        <Tasks 
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
          /> : 'No Tasks To Show'
        }

    </div>
  );
}

export default App;
