import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './messages/message.component';
import { SortComponent } from './sort/sort.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    MessageComponent,
    SortComponent
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
