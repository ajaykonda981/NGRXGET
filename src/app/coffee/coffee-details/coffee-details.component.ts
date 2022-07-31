import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { Store } from "@ngrx/store";
import * as coffeeActions from "../store/coffees.actions"
import { Coffee } from "../models/coffee";
import { ActivatedRoute } from '@angular/router';
import { getCoffee } from '../store/coffees.reducers';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.scss']
})
export class CoffeeDetailsComponent implements OnInit {
  ID: number = 0;
  coffee: Observable<Coffee>;

  constructor(
    private store: Store<AppState>,
    public activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe(_params => {
      this.ID = _params.id
    })
  }

  ngOnInit(): void {
    this.displayDetails(this.ID)
  }
  
  displayDetails(Id: number) {
    this.store.dispatch(new coffeeActions.GetCoffee(Id));
    this.coffee = this.store.select(getCoffee);
  }
}
