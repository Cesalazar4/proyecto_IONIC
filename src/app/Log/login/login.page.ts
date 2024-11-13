import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private navCtrl: NavController, private apiService: ApiService) {}

  data: any;

  usuario: string = '';
  clave: string = ''; // Propiedad para el modelo de datos

  // Método para manejar el inicio de sesión
  login() {

    this.data = {
      usuario: this.usuario,
      clave: this.clave
    };

    this.apiService.login(this.data).subscribe(
      (respuesta) => {
        console.log(respuesta);
        alert(respuesta.message);
        // Recuperar el rol del almacenamiento local
          const role = localStorage.getItem('role');

        // Redirigir según el rol
        if (role === 'master') {
          this.navCtrl.navigateForward('/menu'); // Página de Master
        } else {
          this.navCtrl.navigateForward('/menu'); // Página de Jugador
        }
      },
      (error) => {
        alert(error.error.message);
        console.error('Error al obtener datos:', error);
      }
    );


    
  }

  // Método para ir a la página de registro
  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }

  home() {
    this.navCtrl.navigateForward('/home');
  }
}

