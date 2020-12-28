import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BapujiComponent } from './bapuji/bapuji.component';
import { ProductComponent } from './product/product.component'; 
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  {path:'', component:BapujiComponent},
  {path:'demo', component:ProductComponent},
  {path:'shop', component:ShoppingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
