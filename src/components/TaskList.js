import Task from "./Task";

const TaskList = ({tasks}) => {
return (
  <div>
    <h3>My To-do's</h3>
    <ul>
        {tasks.map((element, index) => {
            return (
                <Task text={element} key={index}/>
            )
        })}
    </ul>
  </div>
);
}

export default TaskList