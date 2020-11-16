import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

// Import all the components for which navigation service has to be activated
//import { SignInComponent } from '../../components/sign-in/sign-in.component';
//import { SignUpComponent } from '../../components/sign-up/sign-up.component';
//import { DashboardComponent } from '../../components/dashboard/dashboard.component';

import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';

import { AuthGuard } from "./views/guard/auth.guard";
import { VerifyEmailComponent } from './views/verify-email/verify-email.component';

export const routes: Routes = [
  //auth
 // { path: 'login', pathMatch: 'full' },
//{ path: 'sign-in', component: SignInComponent },
//{ path: 'register-user', component: SignUpComponent },
//{ path: 'dashboard', component: DashboardComponent },
{ path: 'forgot-password', component: ForgotPasswordComponent },
{ path: 'verify-email-address', component: VerifyEmailComponent },
  //auth
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Inicio'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      },
      {
        path: 'empleados',
        loadChildren: () => import('./views/empleados/empleados.module').then(m => m.EmpleadosModule)
      },
      {
        path: 'servicios',
        loadChildren: () => import('./views/servicios/servicios.module').then(m => m.ServiciosModule)
      },
      {
        path: 'propietarios',
        loadChildren: () => import('./views/propietarios/propietarios.module').then(m => m.PropietariosModule)
      },
      {
        path: 'BuscarPropietarios',
        loadChildren: () => import('./views/propietarios-list/propietarios-list.module').then(m => m.PropietariosListModule)
      },
      {
        path: 'mascotas',
        loadChildren: () => import('./views/mascotas/mascotas.module').then(m => m.MascotasModule)
      },
      {
        path: 'citas',
        loadChildren: () => import('./views/citas/citas.module').then(m => m.CitasModule)
      },
      {
        path: 'BuscarMascotas',
        loadChildren: () => import('./views/mascotas-list/mascotas-list.module').then(m => m.MascotasListModule)
      },
      {
        path: 'consultas',
        loadChildren: () => import('./views/consulta/consulta.module').then(m => m.ConsultaModule)
      },
      {
        path: 'BuscarConsultas',
        loadChildren: () => import('./views/consulta-list/consulta-list.module').then(m => m.ConsultaListModule)
      }
      ,
      {
        path: 'acerca',
        loadChildren: () => import('./views/acerca/acerca.module').then(m => m.AcercaModule)
      },
      {
        path: 'redes',
        loadChildren: () => import('./views/redes/redes.module').then(m => m.RedesModule)
      },
      {
        path: 'ayuda',
        loadChildren: () => import('./views/ayuda/ayuda.module').then(m => m.AyudaModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
