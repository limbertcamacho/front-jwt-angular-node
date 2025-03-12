import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

// Modulos
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

// Componentes
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AddTokenInterceptor } from './utils/add-token.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrarBusesComponent } from './components/registrar-buses/registrar-buses.component';
import { AsignarBusesComponent } from './components/asignar-buses/asignar-buses.component';
import { RegistrarTerminalComponent } from './components/registrar-terminal/registrar-terminal.component';
import { RegistrarSerieBoletaComponent } from './components/registrar-serie-boleta/registrar-serie-boleta.component';
import { RegistrarRutasParadasComponent } from './components/registrar-rutas-paradas/registrar-rutas-paradas.component';
import { RegistrarTipoBusesComponent } from './components/registrar-tipo-buses/registrar-tipo-buses.component';
import { VentaBoletosComponent } from './components/venta-boletos/venta-boletos.component';
import { CrearRutasComponent } from './components/crear-rutas/crear-rutas.component';
import { EncomiendasComponent } from './components/encomiendas/encomiendas.component';
import { ConsultarEncomiendasComponent } from './components/consultar-encomiendas/consultar-encomiendas.component';
import { RolesPermisosComponent } from './components/roles-permisos/roles-permisos.component';
import { RegistrarPersonalComponent } from './components/registrar-personal/registrar-personal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    DashboardComponent,
    SpinnerComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    RegistrarBusesComponent,
    AsignarBusesComponent,
    RegistrarTerminalComponent,
    RegistrarSerieBoletaComponent,
    RegistrarRutasParadasComponent,
    RegistrarTipoBusesComponent,
    VentaBoletosComponent,
    CrearRutasComponent,
    EncomiendasComponent,
    ConsultarEncomiendasComponent,
    RolesPermisosComponent,
    RegistrarPersonalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), // ToastrModule added
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


