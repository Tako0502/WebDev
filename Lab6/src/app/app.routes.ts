import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'albums', loadComponent: () => import('./components/albums/albums.component').then(m => m.AlbumsComponent) },
  { path: 'albums/:id', loadComponent: () => import('./components/album-detail/album-detail.component').then(m => m.AlbumDetailComponent) },
  { path: 'albums/:id/photos', loadComponent: () => import('./components/photos/photos.component').then(m => m.PhotosComponent) },
  { path: 'about', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent) },
  { path: '**', redirectTo: 'home' }
];