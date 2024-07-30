import React, { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    'Task 1',
    'Task 2',
  ]);
  
  const [newTask, setNewTask] = useState('');

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
      <input type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
      <button type='button' onClick={() => setTasks([...tasks, newTask])}>Add task</button>
    </div>
  );
}

export default App;
