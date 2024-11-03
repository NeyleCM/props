function Task({ task, deleteTask, toggleCompleteTask }) {
    return (
        <>
        <li>
            <span
            onClick={() => toggleCompleteTask(task.id)}
            style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                cursor: 'pointer'
            }}
            >
            {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
        </li>
        </>
    );
  }
  export default Task;