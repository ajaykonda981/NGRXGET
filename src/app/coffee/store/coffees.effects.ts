import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as coffeeActions from './coffees.actions';
import {
  
  GetAllCoffeesError,
  GetAllCoffeesSuccess,
  GetCoffee,
  GetCoffeeError,
  GetCoffeeSuccess,
  
} from './coffees.actions';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {CoffeeService} from '../services/coffee.service';
import {Coffee} from '../models/coffee';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable()
export class CoffeeEffects {
  constructor(private actions$: Actions,
              private svc: CoffeeService) {
  }

  @Effect()
  getAllCoffees$: Observable<Action> = this.actions$.pipe(
    ofType(coffeeActions.GET_COFFEES),
    switchMap(() => this.svc.getCoffees()),
    map(heroes => new GetAllCoffeesSuccess(heroes)),
    catchError((err) => [new GetAllCoffeesError(err)])
  );

  @Effect()
  getCoffee$ = this.actions$.pipe(
    ofType(coffeeActions.GET_COFFEE),
    map((action: GetCoffee) => action.payload),
    switchMap(id => this.svc.getCoffeByID(id)),
    map(hero => new GetCoffeeSuccess(hero)),
    catchError((err) => [new GetCoffeeError(err)])
  );

}
