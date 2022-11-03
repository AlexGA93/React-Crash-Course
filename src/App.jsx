import { useState } from "react";

// components
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import AddTask from "./components/Add_Task/AddTask";


const App = () => {

  const [showAddTask, setShowAddTask] = useState(false);

  // global (basic) state
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      day: 'Feb 5th at 3:09pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Doctor Appointment',
      day: 'Feb 5th at 3:09pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Doctor Appointment',
      day: 'Feb 5th at 3:09pm',
      reminder: true
    },
  ]);

  // Add Task to the global state
  const addTask = (task ) => {
    // assign a new id
    const id = Math.floor(Math.random()*10000)+1;

    // new task
    const newTask = { id, ...task };

    // assign a new task
    setTasks([...tasks, newTask]);
  };

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !==id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task));
  };

  return (
    // uso de gragment para abarcar los componentes
    <div className="container">
      
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>

      {
        showAddTask && <AddTask onAdd={addTask}/>
      }

      {/* conditional content */}
      {
        tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        ) : (
          'No Tasks To Show!'
        )
      }
      
    </div>
  );
}

export default App;
