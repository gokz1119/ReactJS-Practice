import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function TaskList({
  tasks,
  completeTaskHandler,
  deleteTaskHandler,
}) {
  tasks.sort((a, b) => a.completed - b.completed);
  return (
    <div>
      {tasks.map(({ label, completed, id }) => (
        <div key={id} className={`task ${completed && 'task--completed'}`}>
          <button
            className="task__complete-button"
            onClick={() => completeTaskHandler(id)}
          />
          <p className="task__label">{label}</p>
          <button
            className="task__delete-button"
            onClick={() => deleteTaskHandler(id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ))}
    </div>
  );
}