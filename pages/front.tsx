import { useEffect, useState } from "react";
import { useTasks } from "../app/store";
import { observer } from "mobx-react-lite";


export default observer(function Front() {

  const taskStore = useTasks();
  
  // Fetching data
  useEffect(() => {
    taskStore.fetchTasks();
  }, [taskStore]);

  // Delete task
  const handleDelete = (task: any) => {
    console.log(task)
    taskStore.removeTask(task)
  }
    return (
      <div>
        <h1 className="text-yellow-300 text-2xl">front page </h1>
        {taskStore.taskList.map((task: any) => (
          <div key={task.id}>
            <h1>{task.title}</h1>
            <h1>{task.status ?  "In Progress" : "To Do"}</h1>
            <p>{task.description}</p>
            <button onClick={() => handleDelete(task)} className="font-bold bg-red-600 text-white p-1 rounded-sm">Delete</button>
          </div>
        ))}
      </div>
    );
})



