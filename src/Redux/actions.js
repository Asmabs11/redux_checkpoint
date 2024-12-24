import { ADD_TASK, GET_TASK } from "./actionTypes";

export const addTask = (task) => ({
  type: ADD_TASK,payload: task
});

export const getTask = (tasks) => ({
    type: GET_TASK,payload: tasks
  });
  

