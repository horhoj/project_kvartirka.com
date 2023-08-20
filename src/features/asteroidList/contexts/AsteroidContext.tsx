'use client';
import { createContext, Dispatch, useReducer } from 'react';
import { AsteroidData } from '../types/common';

interface InitialState {
  asteroidData: AsteroidData;
  isDistanceInKilometers: boolean;
}

const INITIAL_STATE: InitialState = {
  asteroidData: {},
  isDistanceInKilometers: true,
};

interface Action<T extends string, P> {
  type: T;
  payload: P;
}

type ActionList =
  | Action<'SET_ASTEROID_DATA', AsteroidData>
  | Action<'SET_IS_DISTANCE_IN_KILOMETERS', boolean>;

const reducer = (state: InitialState, action: ActionList): InitialState => {
  if (action.type === 'SET_ASTEROID_DATA') {
    return { ...state, asteroidData: action.payload };
  }

  if (action.type === 'SET_IS_DISTANCE_IN_KILOMETERS') {
    return { ...state, isDistanceInKilometers: action.payload };
  }

  return state;
};

export const asteroidContext = createContext<{
  state: InitialState;
  dispatch: Dispatch<ActionList>;
} | null>(null);

interface AsteroidContextWrapperProps {
  children: React.ReactNode;
}

export const AsteroidContextWrapper = ({
  children,
}: AsteroidContextWrapperProps) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <asteroidContext.Provider value={{ state, dispatch }}>
      {children}
    </asteroidContext.Provider>
  );
};
