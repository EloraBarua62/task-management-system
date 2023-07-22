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
    // New task added
    addTasks(task: object) {
      store.taskList.push(task);
    },

    // All tasks fetched
    async fetchTasks() {
      const tasks = localStorage.getItem("task_list");
      
      const task_list = JSON.parse(tasks);
      console.log(task_list);
      store.taskList = task_list;
      console.log(store.taskList);
    },

    // Remove task
    removeTask(taskId: any) {
        store.taskList.remove(taskId);
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


