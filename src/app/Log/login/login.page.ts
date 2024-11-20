import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private navCtrl: NavController, private apiService: ApiService, private storage: Storage) {
    this.init();
  }

  async init() {
    // Inicializar el almacenamiento
    await this.storage.create();
    const usuario = await this.storage.get('usuario');
  }
  data: any;

  usuario: string = '';
  clave: string = ''; // Propiedad para el modelo de datos

  // Método para manejar el inicio de sesión
  login() {
    this.data = {
      usuario: this.usuario,
      clave: this.clave
    };
  
    this.apiService.login(this.data).subscribe({
      next: (respuesta) => {
        console.log('Respuesta del backend al iniciar sesión:', respuesta);
        alert(respuesta.message);
        const role = localStorage.getItem('role');
    
        if (respuesta.data.rol === 'Master') {
          this.navCtrl.navigateForward('/jugadores');
        } else {
          this.navCtrl.navigateForward('/perfil');
        }

        this.storage.set('usuario', respuesta.data);

      },
      error: (error) => {
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

