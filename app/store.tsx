import { types } from "mobx-state-tree";


// Model including all fields of task
export const taskModel = types.model("taskModel", {
    id: types.optional(types.identifier, ()=> Math.random().toString()),
    title: types.optional(types.string, "Untitles task"),
    description: types.optional(types.string, "No description"),
    status: types.optional(types.string, "To Do")
})
// .actions((task) => ({
//   setTask(newTask: any){
//     task.title = newTask.title;
//     task.description = newTask.description;
//     task.status = newTask.status;
//     console.log(newTask)

//   }
// }))


// Store of all task 
export const taskStore = types
  .model("taskStore", {
    taskList: types.array(taskModel),
  })
  .actions((store) => ({
    
    // Set task
    setTasks(newTask: any){
      store.taskList = newTask || [];
      console.log(newTask)
    },
    
    // New task added
    addTasks(task: object) {
      this.setTasks([...store.taskList, task]);
      console.log(store.taskList);
      localStorage.setItem("task_list", JSON.stringify(store.taskList));
    },

    // update task
    setTask(newTask: any){
      const task_index = store.taskList.findIndex(task => task.id === newTask.id );
      store.taskList[task_index].title = newTask.title;
      store.taskList[task_index].description = newTask.description;
      store.taskList[task_index].status = newTask.status;
      localStorage.setItem("task_list", JSON.stringify(store.taskList));


    // task.title = newTask.title;
    // task.description = newTask.description;
    // task.status = newTask.status;
    // console.log(newTask)

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


  // let _taskModel: any;
  // export const useTask = () => {
  //   if(!_taskModel){
  //       _taskModel = taskModel.create({id: '',title:'', description:'',status:'' });
  //   }
  //   return _taskModel;
  // }


