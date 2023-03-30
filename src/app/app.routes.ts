import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'contato',
    loadComponent: () => import('./contato/contato.page').then( m => m.ContatoPage)
  },
  {
    path: 'contato2',
    loadComponent: () => import('./contato2/contato2.page').then( m => m.Contato2Page)
  },
  {
    path: 'contato3',
    loadComponent: () => import('./contato3/contato3.page').then( m => m.Contato3Page)
  },
  {
    path: 'contato4',
    loadComponent: () => import('./contato4/contato4.page').then( m => m.Contato4Page)
  },
  {
    path: 'contato5',
    loadComponent: () => import('./contato5/contato5.page').then( m => m.Contato5Page)
  },

];
