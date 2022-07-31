import * as coffeeActions from './coffees.actions';
import {AppAction} from '../../app.action';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Coffee} from '../models/coffee';

export interface State {
  data: Coffee[];
  selected: Coffee | null;
  action: string | null;
  done: boolean;
  error?: Error | null;
}

const initialState: State = {
  data: [],
  selected: null,
  action: null,
  done: false,
  error: null
};

export function reducer(state = initialState, action: AppAction): State {
  // ...state create immutable state object
  switch (action.type) {
      /*************************
     * GET all Coffees actions
     ************************/
    case coffeeActions.GET_COFFEES:
      return {
        ...state,
        action: coffeeActions.GET_COFFEES,
        done: false,
        selected: null,
        error: null
      };
    case coffeeActions.GET_COFFEES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        done: true,
        selected: null,
        error: null
      };
    case coffeeActions.GET_COFFEES_ERROR:
      return {
        ...state,
        done: true,
        selected: null,
        error: action.payload
      };

      /*************************
     * GET coffee by id actions
     ************************/
    case coffeeActions.GET_COFFEE:
      return {
        ...state,
        action: coffeeActions.GET_COFFEE,
        done: false,
        selected: null,
        error: null
      };
    case coffeeActions.GET_COFFEE_SUCCESS:
      return {
        ...state,
        selected: action.payload,
        done: true,
        error: null
      };
    case coffeeActions.GET_COFFEE_ERROR:
      return {
        ...state,
        selected: null,
        done: true,
        error: action.payload
      };

    
  }
  return state;
}

/*************************
 * SELECTORS
 ************************/
 export const getCoffeesState = createFeatureSelector < State > ('coffees');
 export const getAllCoffees = createSelector(getCoffeesState, (state: State) => state.data);
 export const getCoffee = createSelector(getCoffeesState, (state: State) => {
   if (state.action === coffeeActions.GET_COFFEE && state.done) {
     return state.selected;
   } else {
     return null;
   }
 
 });
 
 export const getCoffeesError = createSelector(getCoffeesState, (state: State) => {
   return state.action === coffeeActions.GET_COFFEES
     ? state.error
    : null;
 });
 export const getCoffeeError = createSelector(getCoffeesState, (state: State) => {
   return state.action === coffeeActions.GET_COFFEE
     ? state.error
    : null;
 });
 