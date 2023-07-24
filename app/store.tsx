// imported file
import { types } from "mobx-state-tree";


// Model including all fields of task
export const taskModel = types.model("taskModel", {
    id: types.optional(types.identifier, ()=> Math.random().toString()),
    title: types.optional(types.string, "Untitles task"),
    description: types.optional(types.string, "No description"),
    status: types.optional(types.string, "To Do")
})


// Store of all task 
export const taskStore = types
  .model("taskStore", {
    taskList: types.array(taskModel),
  })
  // actions for fetch, add, update and delete tasks
  .actions((store) => ({
    
    
    
    // Set tasks to task list array
    setTasks(newTask: any){
      store.taskList = newTask || [];
    },
    
    
    
    // New task added
    addTasks(task: object) {

      // Send to setTask function for update task list
      this.setTasks([...store.taskList, task]);
     
      // New task added to local storage
      localStorage.setItem("task_list", JSON.stringify(store.taskList));
    },

    
    
    // update single task
    setTask(newTask: any){
      
      // find targeted task
      const task_index = store.taskList.findIndex(
        (task) => task.id === newTask.id
      );

      // reset all fields for update existing task
      store.taskList[task_index].title = newTask.title;
      store.taskList[task_index].description = newTask.description;
      store.taskList[task_index].status = newTask.status;

      // Updated task readded to local storage
      localStorage.setItem("task_list", JSON.stringify(store.taskList));
    },

    
    
    // All tasks fetched
    async fetchTasks() {

      // Task list retrived from local storage and parsed
      const tasks: string = localStorage.getItem("task_list") as string;
      const task_list = JSON.parse(tasks);

      // Send to setTask function for update task list
      this.setTasks(task_list);
    },

    
    // Remove task
    removeTask(task: any) {
      
      // task removed from task list
      store.taskList.remove(task);

      // Send to setTask function for update task list
      this.setTasks(store.taskList);

      // Updated list readded to local storage
      localStorage.setItem("task_list", JSON.stringify(store.taskList));
    },
  }));


  
  // State manager function
  let _taskStore: any;
  export const useTasks = () => {
    if(!_taskStore){
        _taskStore = taskStore.create({taskList :[]});
    }
    return _taskStore;
  }



