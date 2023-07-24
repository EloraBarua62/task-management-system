// imported file
import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useTasks } from "../../app/store";

// Props type
type Props = {
  updatedTask: any;
  setUpdateForm: (val: boolean) => void;
};

// Main function: Update task
export default observer(function UpdateTask({
  updatedTask,
  setUpdateForm,
}: Props) {
  
  
  // State manager
  const taskStore = useTasks();

  // Task fields: id, title, description, status
  const id = updatedTask.id;
  const [title, setTitle] = useState(updatedTask.title);
  const [description, setDescription] = useState(updatedTask.description);
  const [status, setStatus] = useState(updatedTask.status);

  // Update task
  const handleNewTask = (event: any) => {
    event.preventDefault();

    // state management function called
    taskStore.setTask({ id, title, description, status });
    setUpdateForm(false);
  };
  
  
  return (
    <div className="mx-2 mt-4 shadow-xl">
      {/* Task updation form */}
      <form
        onSubmit={handleNewTask}
        className="flex flex-col gap-2 border-[1px] bg-yellow-400 p-3 rounded-lg"
      >
        {/* Input field: title */}
        <input
          type="text"
          name="title"
          className="border pl-2 outline-none border-blue-400 rounded-md"
          placeholder="Untitled task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Input field: description */}
        <textarea
          name="description"
          className="border pl-2 outline-none border-blue-400 rounded-md"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        {/* Input field: status */}
        <select
          name="status"
          id=""
          value={status}
          className="border pl-2 outline-none border-blue-400 rounded-md"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        {/* submit task */}
        <input
          type="submit"
          value="Submit"
          className="w-20 p-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
        />
      </form>
    </div>
  );
});
