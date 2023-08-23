'use client';
import { createContext, Dispatch, useReducer } from 'react';
import { AsteroidData } from '../asteroidList/types/common';
import { FetchAsteroidListNearEarthObject } from '../asteroidList/types/FetchAsteroidListResponse';

interface InitialState {
  asteroidData: AsteroidData;
  isDistanceInKilometers: boolean;
  basket: Record<string, FetchAsteroidListNearEarthObject>;
}

const INITIAL_STATE: InitialState = {
  asteroidData: {},
  isDistanceInKilometers: true,
  basket: {},
};

interface Action<T extends string, P> {
  type: T;
  payload: P;
}

type ActionList =
  | Action<'SET_ASTEROID_DATA', AsteroidData>
  | Action<'SET_IS_DISTANCE_IN_KILOMETERS', boolean>
  | Action<
      'TOGGLE_THE_PRESENCE_OF_AN_ASTEROID_IN_BASKET',
      FetchAsteroidListNearEarthObject
    >;

const reducer = (state: InitialState, action: ActionList): InitialState => {
  if (action.type === 'SET_ASTEROID_DATA') {
    return { ...state, asteroidData: action.payload };
  }

  if (action.type === 'SET_IS_DISTANCE_IN_KILOMETERS') {
    return { ...state, isDistanceInKilometers: action.payload };
  }

  if (action.type === 'TOGGLE_THE_PRESENCE_OF_AN_ASTEROID_IN_BASKET') {
    if (state.basket[action.payload.id]) {
      const basketClone = { ...state.basket };
      delete basketClone[action.payload.id];
      return {
        ...state,
        basket: basketClone,
      };
    }
    return {
      ...state,
      basket: { ...state.basket, [action.payload.id]: action.payload },
    };
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
