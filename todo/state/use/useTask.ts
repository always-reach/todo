'use client';
import * as React from 'react';
import { DispatchContext, StateContext, TaskDispatchContext, TaskStateContext } from './Task';

const useTask = () => {
  const state = React.useContext<StateContext>(TaskStateContext);
  const dispatch = React.useContext<DispatchContext>(TaskDispatchContext);

  const addTask = (taskName: string, description: string) => {
    dispatch({ type: 'ADD_TASK', payload: { title: taskName, description } });
  };

  return { state, addTask };
};

export default useTask;
