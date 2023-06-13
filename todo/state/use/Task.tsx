'use client';

import * as React from 'react';
type State = {
  title: string;
  description: string;
};

type Action = {
  type: 'ADD_TASK';
  payload: State;
};

const initialState: State[] = [
  { title: 'タスク1', description: 'タスク1の説明' },
  { title: 'タスク2', description: 'タスク2の説明' },
  { title: 'タスク3', description: 'タスク3の説明' },
];

const reducer = (state: State[], action: Action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    default:
      return state;
  }
};

export type StateContext = State[];
export type DispatchContext = React.Dispatch<Action>;

export const TaskStateContext = React.createContext<StateContext>(initialState);
export const TaskDispatchContext = React.createContext<DispatchContext>(() => {});

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <TaskStateContext.Provider value={state}>
      <TaskDispatchContext.Provider value={dispatch}>{children}</TaskDispatchContext.Provider>
    </TaskStateContext.Provider>
  );
};
