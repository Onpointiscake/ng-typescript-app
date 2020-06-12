import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HotelFormComponent } from './components/hotel-form/hotel-form.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';

import { HotelsService } from './services/hotels.service'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HotelFormComponent,
    HotelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HotelsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
