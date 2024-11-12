import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Redirección principal a 'home'
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // Ruta para la página de inicio
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  // Ruta para el inicio de sesión
  {
    path: 'login',
    loadChildren: () => import('./Log/login/login.module').then(m => m.LoginPageModule)
  },
  // Ruta para el registro de usuarios
  {
    path: 'register',
    loadChildren: () => import('./Log/register/register.module').then(m => m.RegisterPageModule)
  },
  // Rutas para las funcionalidades de 'Master'
  {
    path: 'menu',
    loadChildren: () => import('./Master/menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'options',
    loadChildren: () => import('./Master/options/options.module').then(m => m.OptionsPageModule)
  },
  {
    path: 'jugadores',
    loadChildren: () => import('./Master/jugadores/jugadores.module').then(m => m.JugadoresPageModule)
  },
  {
    path: 'armor-class',
    loadChildren: () => import('./armor-class/armor-class.module').then(m => m.ArmorClassPageModule)
  },
  {
    path: 'config-jugador',
    loadChildren: () => import('./Master/config-jugador/config-jugador.module').then(m => m.ConfigJugadorPageModule)
  },
  // Rutas para las funcionalidades de 'Jugador'
  {
    path: 'perfil',
    loadChildren: () => import('./Jugador/perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'habilidades',
    loadChildren: () => import('./Jugador/habilidades/habilidades.module').then(m => m.HabilidadesPageModule)
  },
  {
    path: 'inventario',
    loadChildren: () => import('./Jugador/inventario/inventario.module').then(m => m.InventarioPageModule)
  },
  {
    path: 'caracteristicas',
    loadChildren: () => import('./Jugador/caracteristicas/caracteristicas.module').then(m => m.CaracteristicasPageModule)
  },
  {
    path: 'pconocidas',
    loadChildren: () => import('./Jugador/pconocidas/pconocidas.module').then(m => m.PconocidasPageModule)
  },  {
    path: 'propiedades',
    loadChildren: () => import('./Master/propiedades/propiedades.module').then( m => m.PropiedadesPageModule)
  }


  

];

@NgModule({
  imports: [
    // Configuración del módulo de rutas con estrategia de precarga
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
