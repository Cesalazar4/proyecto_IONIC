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
    // Preparar los datos para el registro
    this.data = {
      usuario: this.usuario,
      clave: this.clave,
      correo: this.correo,
      rol: this.role,
      avatar: this.avatar
    };
    this.apiService.crearUsuario(this.data).subscribe(
      (respuesta) => {
        console.log(respuesta);
        alert(respuesta.message);

        // Guardar el rol en el almacenamiento local
        localStorage.setItem('role', this.role);

        // Redirigir a la vista correspondiente según el rol
        if (this.role === 'jugador') {
          this.navCtrl.navigateForward('/jugador'); // Redirige a "Jugador"
        } else if (this.role === 'master') {
          this.navCtrl.navigateForward('/options'); // Redirige a "Options"
        } else {
          console.log('Rol desconocido');
        }
      },
      (error) => {
        alert(error.error.message);
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
