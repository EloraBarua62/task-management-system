import { types } from "mobx-state-tree";


// Model Including All Fields Of Task
export const TaskModel = types.model("TaskModel", {
    id: types.optional(types.identifier, ()=> Math.random().toString()),
    title: types.optional(types.string, "Untitles task"),
    description: types.optional(types.string, "No description"),
    status: types.optional(types.number, 0)
});