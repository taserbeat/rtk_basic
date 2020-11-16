import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import taskReducer from '../features/task/TaskSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer,
  },
});
