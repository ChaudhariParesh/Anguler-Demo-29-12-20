import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { BapujiComponent } from './bapuji/bapuji.component';
import { ShoppingComponent } from './shopping/shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BapujiComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
