import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginaDeTrabalhoComponent } from './pages/pagina-de-trabalho/pagina-de-trabalho.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaDeTrabalhoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
