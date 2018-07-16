import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Panel1Component } from './components/panel1/panel1.component';
import { ListService } from './providers/list.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    Panel1Component,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
