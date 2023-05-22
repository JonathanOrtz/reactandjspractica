import { useState } from "react";
//import { Update } from "./components/Update";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [updateTask, setUpdateTask] = useState("");
  const [isEditting, setIsEditting] = useState(false);
  const [editIndex, setEditIndex] = useState(null);


  const handleInputTask = (e) => {
    setTask(e.target.value);
  };

  const handleUpdateInputChange = (e) => {
    setUpdateTask(e.target.value);
  }

  const addTask = () => {
    if (task.trim() === "") {
      alert("add your task either wont work");
    } else {
      setTaskList((prevTaskList) => {
        const updatedTaskList = [...prevTaskList, task];
        console.log(updatedTaskList);
        return updatedTaskList;
      });
      setTask("");
    }
  };

  const deleteTask = (indexRemove) => {
    setTaskList((prevTaskList) => {
      const updatedTaskList = prevTaskList.filter(
        (_, index) => index !== indexRemove
      );
      console.log(updatedTaskList);
      return updatedTaskList;
    });
  };

  const updatetaskFunction = (indexToUpdate) => {
    if(updateTask.trim() === ""){
      alert("update your task either won't work");
    }else{
      setTaskList((prevTaskList) => {
        const updatedTaskList = prevTaskList.map((task, index) => {
          if(index === indexToUpdate){
            return updateTask;
          }else{
            return task;
          }
        });
        console.log(updatedTaskList);
        return updatedTaskList;
      });
      setUpdateTask('');
      setEditIndex(null);
      setIsEditting(false);
    }
  }

  const startEditting = (index) => {
    setIsEditting(true);
    setEditIndex(index);
    setUpdateTask(taskList[index]);
  };

  const finishEditting = () => {
    setIsEditting(false);
    setEditIndex(null);
    setUpdateTask("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add the task"
        value={task}
        onChange={handleInputTask}
      />
      <br />
      <button onClick={addTask}>Add task to the list</button>
      <div>
        {taskList.map((n, index) => (
          <ul key={index}>
            {index === editIndex && isEditting ? (
              <div>
                                <input
                  type="text"
                  value={updateTask}
                  onChange={handleUpdateInputChange}
                />
                <button onClick={() => updatetaskFunction(index)}>Update</button>
                <button onClick={finishEditting}>Cancel</button>

              </div>
            ) : (
              <div>
                <li>{n}</li>
                <button onClick={() => deleteTask(index)}>Delete</button>
                <button onClick={() => startEditting(index)}>Edit</button>
              </div>
            )}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
