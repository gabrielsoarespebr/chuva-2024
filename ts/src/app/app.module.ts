import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginaDeTrabalhoComponent } from './pages/pagina-de-trabalho/pagina-de-trabalho.component';
import { MenuLateralComponent } from './shared/components/menu-lateral/menu-lateral.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PaginaDeTrabalhoComponent, MenuLateralComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
