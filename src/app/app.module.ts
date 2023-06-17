import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';import { HomeComponent } from './home/home.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { ParentDataComponent } from './parent-data/parent-data.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CronometroComponent,
    ParentDataComponent,
    DiretivasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
