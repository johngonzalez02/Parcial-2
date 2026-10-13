import { Routes } from '@angular/router';
import { HojaVida } from './pages/hoja-vida/hoja-vida';
import { Aprendizaje } from './pages/aprendizaje/aprendizaje';
import { TemaLibre } from './pages/tema-libre/tema-libre';

export const routes: Routes = [
  { path: '', redirectTo: 'hoja-vida', pathMatch: 'full' },
  { path: 'hoja-vida', component: HojaVida },
  { path: 'aprendizaje', component: Aprendizaje },
  { path: 'tema-libre', component: TemaLibre },
  { path: '**', redirectTo: 'hoja-vida' }
];