import DeleteIcon from '@mui/icons-material/Delete';
import IconButtoncustom from "../../Controllers/Button/ButtonShared";

const Todo = (props) => {
  const handleToggleDone = () => {
      props.handleToggleDone();
  };

  const handleDeleteTask = () => {
      props.handleDeleteTask(props.id); 
  };

  return (
      <div className="task-container form-check d-flex w-50 justify-content-between m-auto">
          <input
              type="checkbox"
              className="form-check-input p-3"
              checked={props.done}
              onChange={handleToggleDone}
          />
          <span className="fw-bolder h4" style={props.style}>
              {props.newTask}
          </span>
          <IconButtoncustom label="delete" size="large" color="red" onClick={handleDeleteTask}>
              <DeleteIcon className="w-100" fontSize="inherit" />
          </IconButtoncustom>
      </div>
  );
};

export default Todo