import React, { useState, useEffect, useMemo } from 'react';

function App() {

  const [tasks, setTasks] = useState([...returnStoredTaskList()]);
  
  const [newTask, setNewTask] = useState('');

  // Behaves like shouldComponentUpdate, preventing unnecessary re-renders
  const totalTasks = useMemo(() => tasks.length, [tasks]);

  // Behaves like componentDidMount
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
    return () => {};
  }, []);

  // Behaves like componentDidUpdate
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return () => {};
  }, [tasks]);

  function handleAddTask(){
    setTasks([...tasks, newTask]);
    setNewTask('');
  }

  function returnStoredTaskList(){
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      return JSON.parse(storedTasks);
    }
    return [];
  }

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
      <input type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
      <button type='button' onClick={handleAddTask}>Add task</button>
      <br/>
      <br/>
      <strong>Remaining Tasks: {totalTasks}</strong>
    </div>
  );
}

export default App;
