import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnoComponent } from './uno/uno.component';

import {HttpClientModule} from '@angular/common/http';
import {ServicioService} from './servicios/servicio.service';

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  exports:[HttpClientModule],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
