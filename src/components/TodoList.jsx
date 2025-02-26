import { useState } from "react"

function TodoList() {
   const [task , setTask] = useState([]) ;
   const [newTask , setNewtask] = useState("") ;
   
   function handleInputChange(event) {
       setNewtask(event.target.value)  
   }
   function addTask() {
       if(newTask.trim !== "") {
           setTask(t => [...t , newTask]) ;
           setNewtask("") ;
       }
   }
   function deleteTask(index) {
       const updatedTask = task.filter((_ , inn) => inn !== index) ;
       setTask(updatedTask) ;
   }
   function moveTaskUp(index) {
       const updatedTask = [...task] ;
       if(index > 0) {
          [updatedTask[index] ,  updatedTask[index-1]] = 
          [updatedTask[index-1] , updatedTask[index]]  ;
          setTask(updatedTask) ;
       }
   }
   function moveTaskDown(index) {
        const updatedTask = [...task] ;
        if(index < updatedTask.length-1) {
        [updatedTask[index] ,  updatedTask[index+1]] = 
        [updatedTask[index+1] , updatedTask[index]]  ;
        setTask(updatedTask) ;
        }
   }
   return(
      <div className="to-do-list">
         <h1>To-Do-List</h1>
         <div>
            <input 
                   type="text" 
                   placeholder="Enter A Task..."
                   value={newTask}
                   onChange={handleInputChange} />
            <button className="add-button"
                               onClick={addTask}>Add
                               </button>
         </div>
         <ol>
            {task.map((task,index)=>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button 
                           className="delete-button"
                           onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button 
                           className="move-button"
                           onClick={() =>  moveTaskUp(index)}>
                    👆 
                    </button>
                    <button
                           className="move-button"
                           onClick={() =>  moveTaskDown(index)}>
                    👇
                    </button>
                </li>      
            )}
         </ol>
      </div>
   );
}

export default TodoList