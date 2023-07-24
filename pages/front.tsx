// imported file
import { useEffect, useState } from "react";
import { useTasks } from "../app/store";
import { observer } from "mobx-react-lite";
import UpdateTask from "../components/UpdateTask/UpdateTask";


// Props type
type Props = {
  id: any;
  title: string;
  description: string;
  status: string;
};

// Main funtion: Front
export default observer(function Front() {
  
  // State manager
  const taskStore = useTasks();

  // Fetching data
  useEffect(() => {
    taskStore.fetchTasks();
  }, [taskStore]);

  
  // CRUD operations
  // Update task
  const [updateForm, setUpdateForm] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({});
  const handleUpdate = (task: object) => {
    setUpdateForm(!updateForm);
    setUpdatedTask(task);
  };

  // Delete task
  const handleDelete = (task: object) => {
    taskStore.removeTask(task);
  };

  return (
    <div className="w-full">

      {/* All tasks loaded */}
      <div className="w-3/4 mx-auto my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {taskStore.taskList.map((task: any) => (
          
          
          // Single task
          <div
            key={task.id}
            className="w-60 pb-2 bg-blue-100  border-blue-500 rounded-lg shadow-lg mx-auto"
          >


            {/* Task title */}
            <div className="w-full bg-blue-500 p-2 rounded-t-lg">
              <h1 className="text-white text-xl font-bold capitalize text-center">
                {task.title}
              </h1>
            </div>

          {/* Task description */}
            <p className="px-4 mt-5">{task.description}</p>

            {/* Task status */}
            <div className="mx-4 w-24 bg-yellow-500 rounded-lg">
              <h1 className=" text-white font-medium mt-2 text-center">
                {task.status}
              </h1>
            </div>


          {/* Update and Delete task */}
            <div className="px-4 flex gap-4 mt-10">

              {/* update */}
              <button
                onClick={() => handleUpdate(task)}
                className="font-bold bg-blue-600 text-white px-2 py-1 rounded-lg"
              >
                Update
              </button>

              {/* delete */}
              <button
                onClick={() => handleDelete(task)}
                className="font-bold bg-red-600 text-white px-2 py-1 rounded-lg"
              >
                Delete
              </button>
            </div>

            
            {/* Task updation form */}
            {updateForm && (updatedTask as Props).id === task.id && (
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



