import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { select, Store } from "@ngrx/store";

import * as coffeeActions from "../store/coffees.actions"
import { Coffee } from "../models/coffee";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { AppState } from '../../app.state';
import { getAllCoffees } from '../store/coffees.reducers';

@Component({
  selector: 'app-coffe-list',
  templateUrl: './coffe-list.component.html',
  styleUrls: ['./coffe-list.component.scss']
})
export class CoffeListComponent implements OnInit {
  coffees$: Observable<Coffee[]>;
  coffee: Observable<Coffee>;
  displayedColumns: string[] = ['id', 'blend_name', 'origin', 'variety'];
  dataSource = new MatTableDataSource<Coffee>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.loadCoffees();
  }
  public loadCoffees() {
    this.store.dispatch(new coffeeActions.GetAllCoffees());
    this.coffees$ = this.store.select(getAllCoffees);

    this.coffees$.subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
    });
  }

}
