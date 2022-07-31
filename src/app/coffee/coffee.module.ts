import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeeRoutingModule } from './coffee-routing.module';
import { CoffeListComponent } from './coffe-list/coffe-list.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CoffeeEffects } from '../coffee/store/coffees.effects';
import { CoffeeService } from './services/coffee.service';
import * as  coffeereducer from './store/coffees.reducers';

import {HttpClientModule} from "@angular/common/http";

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CoffeeDetailsComponent } from './coffee-details/coffee-details.component';

export const reducers: ActionReducerMap<any> = {
  coffees: coffeereducer.reducer,
};

@NgModule({
  declarations: [CoffeListComponent, CoffeeDetailsComponent],
  imports: [
    CommonModule,
    CoffeeRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CoffeeEffects]),
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      //logOnly: environment.production, // Restrict extension to log-only mode
      //autoPause: false, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [CoffeeService]
})
export class CoffeeModule { }
