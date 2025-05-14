import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/page-login/page-login.component').then(m => m.PageLoginComponent)
  },
  // Puedes agregar aquí otras rutas
];
