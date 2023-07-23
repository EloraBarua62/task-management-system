import { types } from "mobx-state-tree";


// Model including all fields of task
export const TaskModel = types.model("TaskModel", {
    id: types.optional(types.identifier, ()=> Math.random().toString()),
    title: types.optional(types.string, "Untitles task"),
    description: types.optional(types.string, "No description"),
    status: types.optional(types.number, 0)
});


// Store of all task 
export const taskStore = types
  .model("taskStore", {
    taskList: types.array(TaskModel),
  })
  .actions((store) => ({
    
    // Set task
    setTasks(newTask: any){
      store.taskList = newTask;
    },
    
    // New task added
    addTasks(task: object) {
      console.log(task);
      store.taskList.push(task);
      localStorage.setItem("task_list", JSON.stringify(store.taskList));
    },

    // All tasks fetched
    async fetchTasks() {
      const tasks = localStorage.getItem("task_list");    
      const task_list = JSON.parse(tasks);
      console.log(task_list);
      // console.log(store);
      this.setTasks(task_list);
    },

    // Remove task
    removeTask(task: any) {
        store.taskList.remove(task);
        this.setTasks(store.taskList);
        localStorage.setItem("task_list", JSON.stringify(store.taskList));
    },
  }));


//   const task_list = taskStore.create({taskList: []})
  let _taskStore: any;
  export const useTasks = () => {
    if(!_taskStore){
        _taskStore = taskStore.create({taskList :[]});
    }
    return _taskStore;
  }


