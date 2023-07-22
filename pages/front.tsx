import { useEffect, useState } from "react";

function Front() {
  const [taskList , setTaskList] = useState([{}]);


  useEffect(() => {
    const tasks = localStorage.getItem("task_list");
    setTaskList(JSON.parse(tasks));
    console.log(taskList);
  },[])
  
    return (
      <div>
        <h1 className="text-yellow-300 text-2xl">front page </h1>
        {
          taskList.map(task => <div key={task.title}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
          </div>)
        }
      </div>
    );
};

export default Front
