import { useEffect, useState } from "react";
import { useTasks } from "../app/store";

function Front() {

  const taskStore = useTasks();
  
  useEffect(() => {
    taskStore.fetchTasks();
  }, [taskStore]);
    return (
      <div>
        <h1 className="text-yellow-300 text-2xl">front page </h1>
        {taskStore.taskList.map((task) => (
          <div key={task.title}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    );
};

export default Front
