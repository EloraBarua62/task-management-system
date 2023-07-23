import { useEffect, useState } from "react";
import { useTasks } from "../app/store";
import { observer } from "mobx-react-lite";


export default observer(function Front() {

  const taskStore = useTasks();
  
  // console.log(taskStore.taskList)
  useEffect(() => {
    taskStore.fetchTasks();
  }, [taskStore]);
    return (
      <div>
        <h1 className="text-yellow-300 text-2xl">front page </h1>
        {taskStore.taskList.map((task: any) => (
          <div key={task.id}>
            <h1>{task.title}</h1>
            <h1>{task.status ?  "In Progress" : "To Do"}</h1>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    );
})



