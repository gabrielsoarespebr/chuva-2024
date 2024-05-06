import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginaDeTrabalhoComponent } from './pages/pagina-de-trabalho/pagina-de-trabalho.component';
import { MenuLateralComponent } from './shared/components/menu-lateral/menu-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaDeTrabalhoComponent,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
