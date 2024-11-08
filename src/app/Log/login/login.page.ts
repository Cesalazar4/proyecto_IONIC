import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private navCtrl: NavController) {}

  // Método para manejar el inicio de sesión
  login() {
    // Recuperar el rol del almacenamiento local
    const role = localStorage.getItem('role');

    // Redirigir según el rol
    if (role === 'master') {
      this.navCtrl.navigateForward('/menu'); // Página de Master
    } else {
      this.navCtrl.navigateForward('/options'); // Página de Jugador
    }
  }

  // Método para ir a la página de registro
  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }
}

