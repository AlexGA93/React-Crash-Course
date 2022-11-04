import { useState, useEffect } from "react";

// components
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import AddTask from "./components/Add_Task/AddTask";


const App = () => {

  const [showAddTask, setShowAddTask] = useState(false);

  // global (basic) state
  const [tasks, setTasks] = useState([]);

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

  // Fetch tasks
  const fetchTasks = async () => {
    //backend uri
    const jsonServerUri = 'http://localhost:5000/tasks';
    const res = await fetch(jsonServerUri);

    // convert to json
    const data = await res.json();

    return data;
  };

  // Using useEffect hook to feth all the tasks from the backend
  useEffect(()=>{
    // runs every render
    const getTasks = async () => {
      const tasksFromBackend = await fetchTasks();
      // Update local state
      setTasks(tasksFromBackend)
    };

    getTasks();
  }, []);
  // if we add a second aparameter as an empty array => Runs only on the first render
  // if we add a second aparameter as an array => Runs only on the first render and any time any dependency value changes
  
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
