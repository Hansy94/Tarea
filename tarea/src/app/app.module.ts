import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { ListadoTarjetaComponent } from './listado-tarjeta/listado-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    ListadoTarjetaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
