import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Log/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Log/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./Master/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'options',
    loadChildren: () => import('./Master/options/options.module').then( m => m.OptionsPageModule)
  },
  {
    path: 'jugadores',
    loadChildren: () => import('./Master/jugadores/jugadores.module').then( m => m.JugadoresPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./Jugador/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'habilidades',
    loadChildren: () => import('./Jugador/habilidades/habilidades.module').then( m => m.HabilidadesPageModule)
  },
  {
    path: 'inventario',
    loadChildren: () => import('./Jugador/inventario/inventario.module').then( m => m.InventarioPageModule)
  },
  {
    path: 'caracteristicas',
    loadChildren: () => import('./Jugador/caracteristicas/caracteristicas.module').then( m => m.CaracteristicasPageModule)
  },
  {
    path: 'configuración/avatar/:id',
    loadChildren: () => import('./Configuracion/avatar/avatar.module').then( m => m.AvatarPageModule)
  },  {
    path: 'pconocidas',
    loadChildren: () => import('./Jugador/pconocidas/pconocidas.module').then( m => m.PconocidasPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
