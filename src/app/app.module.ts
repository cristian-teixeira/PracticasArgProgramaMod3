import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { AboutComponent } from './about/about.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { CtaComponent } from './cta/cta.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    AboutComponent,
    ServiciosComponent,
    PortfolioComponent,
    ConocimientosComponent,
    CuentaComponent,
    ContactoComponent,
    FooterComponent,
    CtaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
