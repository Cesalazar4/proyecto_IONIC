import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { Storage } from '@ionic/storage-angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private navCtrl: NavController, private apiService: ApiService, private storage: Storage,private loadingController: LoadingController) {
    this.init();
  }

  async init() {
    await this.storage.create();
    await this.storage.remove('usuario');
    await this.storage.remove('sala');

    // Inicializar el almacenamiento
    await this.storage.create();
    const usuario = await this.storage.get('usuario');
  }
  data: any;

  usuario: string = '';
  clave: string = ''; // Propiedad para el modelo de datos

  // Método para manejar el inicio de sesión
  async login() {
    this.data = {
      usuario: this.usuario,
      clave: this.clave
    };
    const loading = await this.loadingController.create({
      message: 'Cargando...', // Mensaje de carga
      spinner: 'crescent', // Tipo de spinner
      cssClass: 'custom-loading', // Clase CSS opcional para estilos personalizados
      backdropDismiss: false // Evita que el usuario cierre el loading tocando fuera
    });

    await loading.present(); // Muestra el loading
    this.apiService.login(this.data).subscribe({
      next:async (respuesta) => {
        await loading.dismiss(); // Oculta el loading
        alert(respuesta.message);
        const role = localStorage.getItem('role');

        if (respuesta.data.rol === 'Master') {
          this.navCtrl.navigateForward('/jugadores');
        } else {
          this.navCtrl.navigateForward('/perfil');
        }

        this.storage.set('usuario', respuesta.data);

      },
      error: async (error) => {
        await loading.dismiss(); // Oculta el loading

        alert('Error al obtener datos: ' + error.error.message);
        console.error('Error al iniciar sesión:', error);
      }
    });
    

}

  // Método para ir a la página de registro
  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }

  home() {
    this.navCtrl.navigateForward('/home');
  }
}

