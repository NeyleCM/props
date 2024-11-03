import { useState } from 'react';

function AddTaskForm({ addTask }) {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskText.trim()) return; 
        addTask(taskText);
        setTaskText(''); 
      };

    return (
        <>
        <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Nueva tarea" 
            value={taskText} 
            onChange={(e) => setTaskText(e.target.value)} 
        />
        <button type="submit">Agregar tarea</button>
        </form>
        </>
      );

  };
  
  export default AddTaskForm;