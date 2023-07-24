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
      <div className="w-full">
        {/* <h1 className="text-yellow-300 text-2xl">front page </h1> */}

        <div className="w-3/4 mx-auto my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {taskStore.taskList.map((task: any) => (
            <div
              key={task.id}
              className="w-60 h-60 bg-blue-100  border-blue-500 rounded-lg shadow-lg mx-auto"
            >
              <div className="w-full bg-blue-500 p-2 rounded-t-lg">
                <h1 className="text-white text-xl font-bold capitalize text-center">
                  {task.title}
                </h1>
              </div>

              <p className="px-4 mt-5">{task.description}</p>
              <div className="mx-4 w-24 bg-yellow-500 rounded-lg">
                <h1 className=" text-white font-medium mt-2 text-center">
                  {task.status}
                </h1>
              </div>

              <div className="px-4 flex gap-4 mt-10">
                <button
                  onClick={() => handleUpdate(task)}
                  className="font-bold bg-blue-600 text-white px-2 py-1 rounded-lg"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(task)}
                  className="font-bold bg-red-600 text-white px-2 py-1 rounded-lg"
                >
                  Delete
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
      </div>
    );
})



