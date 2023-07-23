import React, { useState } from 'react';
import { observer } from "mobx-react-lite";
import { useTasks } from '../../app/store';


type Props = {
  updatedTask: object;
  setUpdateForm: (val: boolean) => void;
};

export default observer(function UpdateTask( {updatedTask, setUpdateForm}: Props){
  
    const id = updatedTask.id;
    const [title, setTitle] = useState(updatedTask.title);
    const [description, setDescription] = useState(updatedTask.description);
    const [status, setStatus] = useState(updatedTask.status);
    const taskStore = useTasks();

    const handleNewTask = (event: any) => {
        event.preventDefault();

        taskStore.setTask({ id, title, description, status });
        setUpdateForm(false);
    }
    return (
      <div>
        <form
          onSubmit={handleNewTask}
          className="flex flex-col gap-2 border-2 p-2"
        >
          <input
            type="text"
            name="title"
            className="border border-blue-400"
            placeholder="Untitled task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name="description"
            className="border border-blue-400"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <select
            name="status"
            id=""
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <input
            type="submit"
            value="Submit"
            className="w-20 p-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
          />
        </form>
      </div>
    );
})