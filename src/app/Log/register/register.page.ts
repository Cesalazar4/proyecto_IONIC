import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  role: string = 'jugador'; // Valor por defecto

  constructor(private navCtrl: NavController) {}

  // Método para manejar el cambio de rol
  onRoleChange(event: any) {
    this.role = event.detail.value;
  }

  // Método para registrar al usuario y redirigir según el rol seleccionado
  goToPerfil() {
    // Guardar el rol en el almacenamiento local
    localStorage.setItem('role', this.role);

    // Redirigir a la vista correspondiente según el rol
    if (this.role === 'jugador') {
      this.navCtrl.navigateForward('/perfil'); // Redirige a "Jugador"
    } else if (this.role === 'master') {
      this.navCtrl.navigateForward('/options'); // Redirige a "Options"
    } else {
      console.log('Rol desconocido');
    }
  }

  // Método para ir a la página de inicio de sesión
  goToRegister() {
    this.navCtrl.navigateForward('/login');
  }
}
