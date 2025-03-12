import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegistrarBusesComponent } from './components/registrar-buses/registrar-buses.component';
import { ContentComponent } from './components/content/content.component';
import { RegistrarTerminalComponent } from './components/registrar-terminal/registrar-terminal.component';
import { AsignarBusesComponent } from './components/asignar-buses/asignar-buses.component';
import { RegistrarSerieBoletaComponent } from './components/registrar-serie-boleta/registrar-serie-boleta.component'; // Importa el nuevo componente
import { RegistrarRutasParadasComponent } from './components/registrar-rutas-paradas/registrar-rutas-paradas.component'; // Importa el nuevo componente
import { RegistrarTipoBusesComponent } from './components/registrar-tipo-buses/registrar-tipo-buses.component';
import { VentaBoletosComponent } from './components/venta-boletos/venta-boletos.component';
import { CrearRutasComponent } from './components/crear-rutas/crear-rutas.component';
import { EncomiendasComponent } from './components/encomiendas/encomiendas.component';
import { ConsultarEncomiendasComponent } from './components/consultar-encomiendas/consultar-encomiendas.component';
import { RolesPermisosComponent } from './components/roles-permisos/roles-permisos.component';
import { RegistrarPersonalComponent } from './components/registrar-personal/registrar-personal.component';
// Guards
import { AuthGuard } from './utils/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signIn', component: SignInComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: 'asignar-buses', component: AsignarBusesComponent }, // Agrega esta ruta
      { path: 'registrar-bus', component: RegistrarBusesComponent },
      { path: 'registrar-terminal', component: RegistrarTerminalComponent }, // Agrega la nueva ruta
      { path: 'registrar-serie-boleta', component: RegistrarSerieBoletaComponent }, // Agrega la nueva ruta
      { path: 'registrar-rutas-paradas', component: RegistrarRutasParadasComponent }, // Agrega la nueva ruta
      { path: 'registrar-tipo-buses', component: RegistrarTipoBusesComponent},
      { path: 'venta-boletos', component: VentaBoletosComponent},
      { path: 'crear-rutas', component: CrearRutasComponent},
      { path: 'encomiendas', component: EncomiendasComponent},
      { path: 'consultar-encomiendas', component: ConsultarEncomiendasComponent},
      { path: 'roles-permisos', component: RolesPermisosComponent},
      { path: 'registrar-personal', component: RegistrarPersonalComponent},
      { path: '', redirectTo: 'registrar-buses', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
