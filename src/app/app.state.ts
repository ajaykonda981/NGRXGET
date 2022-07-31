import * as fromCoffees from './coffee/store/coffees.reducers';

export interface AppState {
  coffees: fromCoffees.State;
}
