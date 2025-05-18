import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/page-login/page-login.component').then(m => m.PageLoginComponent)
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/page-dashboard/page-dashboard.component').then(m => m.PageDashboardComponent)
      },
      {
        path: 'tareas',
        loadComponent: () =>
          import('./pages/tareas/page-tareas/page-tareas.component').then(m => m.PageTareasComponent)
      },
      {
        path: 'progreso',
        loadComponent: () =>
          import('./pages/progreso/page-progreso/page-progreso.component').then(m => m.PageProgresoComponent)
      },
      {
        path: 'feedback',
        loadComponent: () =>
          import('./pages/feedback/page-feedback/page-feedback.component').then(m => m.PageFeedbackComponent)
      },
      {
        path: 'alarmas',
        loadComponent: () =>
          import('./pages/alarmas/page-alarmas/page-alarmas.component').then(m => m.PageAlarmasComponent)
      }
    ]
  }
];