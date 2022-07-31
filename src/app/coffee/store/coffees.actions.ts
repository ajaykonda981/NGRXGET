import {Action} from '@ngrx/store';
import {Coffee} from '../models/coffee';

export const GET_COFFEES = '[ALL] Coffees';
export const GET_COFFEES_SUCCESS = '[ALL] Coffees Success';
export const GET_COFFEES_ERROR = '[ALL] Coffees Error';

export const GET_COFFEE = '[GET] Coffee';
export const GET_COFFEE_SUCCESS = '[GET] Coffees Success';
export const GET_COFFEE_ERROR = '[GET] Coffees Error';

/****************************************
 * GET all the coffees
 ****************************************/
export class GetAllCoffees implements Action {
  readonly type = GET_COFFEES;
}

export class GetAllCoffeesSuccess implements Action {
  readonly type = GET_COFFEES_SUCCESS;

  constructor(public payload: Coffee[]) {
  }
}

export class GetAllCoffeesError implements Action {
  readonly type = GET_COFFEES_ERROR;

  constructor(public payload: Error) {
  }
}

/****************************************
 * GET coffee by id
 ****************************************/
export class GetCoffee implements Action {
  readonly type = GET_COFFEE;

  constructor(public payload: number) {
  }
}

export class GetCoffeeSuccess implements Action {
  readonly type = GET_COFFEE_SUCCESS;

  constructor(public payload: Coffee) {
  }
}

export class GetCoffeeError implements Action {
  readonly type = GET_COFFEE_ERROR;

  constructor(public payload: Error) {
  }
}

