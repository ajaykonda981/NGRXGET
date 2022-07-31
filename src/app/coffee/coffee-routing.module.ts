import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeListComponent } from './coffe-list/coffe-list.component';
import { CoffeeDetailsComponent } from './coffee-details/coffee-details.component';

const routes: Routes = [
  {
    path: '',
    component: CoffeListComponent
  },
  {
    path: 'details/:id',
    component: CoffeeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoffeeRoutingModule { }
