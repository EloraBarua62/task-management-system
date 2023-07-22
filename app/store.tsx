import { types } from "mobx-state-tree";


// Model including all fields of task
export const TaskModel = types.model("TaskModel", {
    id: types.optional(types.identifier, ()=> Math.random().toString()),
    title: types.optional(types.string, "Untitles task"),
    description: types.optional(types.string, "No description"),
    status: types.optional(types.number, 0)
});


// Store of all task 
export const taskStore = types.model("taskStore" , {
    taskList: types.array(TaskModel)
})




// .actions(store => ({
//     addTasks(task: any){
//         store.taskList.push(task);
//     },
// }))


