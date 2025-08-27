import { Routes } from '@angular/router';
import { HomeComponent } from './features/events/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];