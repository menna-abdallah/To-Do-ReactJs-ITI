import "./TodoWrapper.css";
import Todo from "../Todo/Todo";
import InputBasic from "../../Controllers/Input/Inputcustom";
import { useState } from "react";
import AddTaskIcon from '@mui/icons-material/AddTask';
import IconButtoncustom from "../../Controllers/Button/ButtonShared";

const TodoWrapper = () => {
    const [todosList, setTodosList] = useState([]);
    const [taskName, setTaskName] = useState("");

    const handleTaskName = (e) => {
        setTaskName(e.target.value);
    };

    const handleAddTask = () => {
        const newId = todosList.length > 0 ? todosList[todosList.length - 1].id + 1 : 1; 
        let newTask = {
            id: newId,
            name: taskName,
            done: false,
        };
        setTodosList([...todosList, newTask]);
    };

    const handleDeleteTask = ( id) => {
        const tempArr = todosList.filter((todo) => id !== todo.id);
        setTodosList([...tempArr]);
      };
     
      const handleToggleDone = (id) => {
        const updatedTodosList = todosList.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        );
        setTodosList(updatedTodosList);
      };

    return (
        <div className="todo-wrapper">
            <h1 className="header">To-Do-App</h1>
            <InputBasic
                id="outlined-multiline-static"
                label="To Do"
                rows={2}
                variant="outlined"
                onChange={handleTaskName}
            />
            <IconButtoncustom label="Add" size="large" color="#48e448be" onClick={handleAddTask}>
                <AddTaskIcon className="w-100" fontSize="inherit" />
            </IconButtoncustom>
            <hr/>
            <div className="todos-list d-flex flex-column">
                {todosList.length === 0 ? (
                    <div>Start your To Do!!</div>
                ) : (
                    todosList.map((todo, index) => (
                        <Todo
                            key={`todo-${index}`}
                            newTask={todo.name}
                            done={todo.done}
                            id={todo.id}
                            handleToggleDone={() => handleToggleDone(todo.id)}
                            handleDeleteTask={() => handleDeleteTask(todo.id)}
                            style={{ textDecoration: todo.done ? "line-through" : "none" }}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default TodoWrapper;
