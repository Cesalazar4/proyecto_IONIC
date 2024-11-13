import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  role: string = 'jugador'; // Valor por defecto

  constructor(private navCtrl: NavController, private apiService: ApiService) {}

  data:any; 

  usuario: string = '';
  clave: string = '';
  correo: string = '';
  rol: string = '';
  avatar: string = '';


  // Método para manejar el cambio de rol
  onRoleChange(event: any) {
    this.role = event.detail.value;
  }

  register() {
    this.data = {
      usuario: this.usuario,
      clave: this.clave,
      correo: this.correo,
      rol: this.role,
      avatar: this.avatar
    };
    this.apiService.crearUsuario(this.data).subscribe(
      (respuesta) => {
        console.log('Respuesta del backend al registrar:', respuesta);
        if (respuesta.success) {  // Asegúrate de que "success" sea la clave correcta en la respuesta
          alert('Usuario registrado exitosamente.');
          localStorage.setItem('role', this.role);
          if (this.role === 'jugador') {
            this.navCtrl.navigateForward('/perfil');
          } else if (this.role === 'master') {
            this.navCtrl.navigateForward('/options');
          }
        } else {
          alert('No se pudo registrar el usuario.');
        }
      },
      (error) => {
        alert('Error al registrar usuario: ' + error.error.message);
        console.error('Error al registrar usuario:', error);
      }
    );
  }
  
  


  // Método para ir a la página de inicio de sesión
  goToRegister() {
    this.navCtrl.navigateForward('/login');
  }

  home() {
    // Aquí puedes agregar lógica para validar el login
    this.navCtrl.navigateForward('/home');
  }
}
