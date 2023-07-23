import { useEffect, useState } from "react";
import { useTasks } from "../app/store";
import { observer } from "mobx-react-lite";
import UpdateTask from "../components/UpdateTask/UpdateTask";


export default observer(function Front() {

  const taskStore = useTasks();
  
  // Fetching data
  useEffect(() => {
    taskStore.fetchTasks();
  }, [taskStore]);

  // Delete task
  const handleDelete = (task: object) => {
    console.log(task)
    taskStore.removeTask(task)
  }

  // Update task
  const [updateForm , setUpdateForm] = useState(false);
  const [updatedTask ,setUpdatedTask] = useState({});
  const handleUpdate = (task: object) => {
    setUpdateForm(!updateForm);
    setUpdatedTask(task);
  }

    return (
      <div>
        <h1 className="text-yellow-300 text-2xl">front page </h1>
        {taskStore.taskList.map((task: any) => (
          <div key={task.id}>
            <h1>{task.title}</h1>
            <h1>{task.status}</h1>
            <p>{task.description}</p>
            <div>
              <button
                onClick={() => handleDelete(task)}
                className="font-bold bg-red-600 text-white p-1 rounded-sm"
              >
                Delete
              </button>
              <button
                onClick={() => handleUpdate(task)}
                className="font-bold bg-red-600 text-white p-1 rounded-sm"
              >
                Update
              </button>
            </div>

            {updateForm && (
              <UpdateTask
                updatedTask={updatedTask}
                setUpdateForm={setUpdateForm}
              />
            )}
          </div>
        ))}
      </div>
    );
})



