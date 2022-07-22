
import { useState } from "react"
import Task from "./Task";
const TaskForm = ({handleSubmit, setTask}) => {

  
const [text, setText] = useState('')
return (
    <div>
        <form action="" onSubmit={(e)=> {e.preventDefault(); handleSubmit(text); setText('')}}>
            <label htmlFor="">Task Description:</label>
            <input type="text" placeholder="Description" value={text} onChange={(e)=> {setText(e.target.value )}} />
            <input type='submit' value="Create New Task"/>
        </form>
    </div>
)
}

export default TaskForm