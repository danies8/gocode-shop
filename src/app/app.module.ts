import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './filterProduct/filter.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './appMessages/message.component';
import { SortComponent } from './sortProduct/sort.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    FilterComponent,
    MessageComponent,
    SortComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
