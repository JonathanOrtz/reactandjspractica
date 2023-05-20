import { useState } from 'react';
import './App.css'

function App() {
  const [task, setTask]= useState('');
  const [taskList, setTaskList] = useState([]);

  const handleChangeInputChange= (e) => {
    setTask(e.target.value);
  
  }


  const addTask =() =>{
    if(task.trim() === ''){
      alert('add your task either wont work')
    }else{
      setTaskList((prevTaskList) => {
        const updatedTaskList = [...prevTaskList, task]
        console.log(updatedTaskList);
        return updatedTaskList;
      })
      setTask('');
    }
  }

  const deleteTask = (indexRemove) => {
    setTaskList((prevTaskList) => {
      const updatedTaskList = prevTaskList.filter((_, index) => index !== indexRemove)
      console.log(updatedTaskList);
      return updatedTaskList;
    })
  }
  return (
    <div>
      <input type='text' placeholder='add the task' value={task} onChange={handleChangeInputChange}/>
      <button onClick={addTask}>Add task to the list</button>
      <div>
        {taskList.map(
          (n, index) => (
            
            <ul key={index}>
              <li >{n}</li>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </ul>
          )
        )}
      </div>
    </div>
    
  )
}

export default App
