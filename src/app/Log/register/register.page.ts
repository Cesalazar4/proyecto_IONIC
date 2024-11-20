import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  role: string = 'jugador'; // Valor por defecto

  constructor(private navCtrl: NavController, private apiService: ApiService, private storage: Storage) {
    this.init();
  }

  async init() {
    // Inicializar el almacenamiento
    await this.storage.create();
    console.log('aquiiiiiii');
    console.log(this.storage.get('usuario'));
    
    
  }

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

    if  (this.usuario=='' || this.clave=='' || this.correo=='' || this.role=='' || this.avatar=='') {
      alert('Todos los campos son requeridos');
      return;
    }

    this.data = {
      usuario: this.usuario,
      clave: this.clave,
      correo: this.correo,
      rol: this.role.charAt(0).toUpperCase() + this.role.slice(1),
      avatar: this.avatar
    };
    this.apiService.crearUsuario(this.data).subscribe({
      next: (respuesta) => {
        console.log('Respuesta del backend al registrar:', respuesta);
        if (respuesta.id) {  
          this.storage.set('usuario', respuesta);

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
      error: (error) => {
        alert('Error al obtener datos: ' + error.error.message);
        console.error('Error al iniciar sesión:', error);
      }
    });
    
  }
  
  


  // Método para ir a la página de inicio de sesión
  goToRegister() {
    let data = {
      usuario: this.usuario,
      clave: this.clave,
      correo: this.correo,
      rol: this.role,
      avatar: this.avatar
    };
    console.log(data);
    
    // this.navCtrl.navigateForward('/login');
  }

  home() {
    // Aquí puedes agregar lógica para validar el login
    this.navCtrl.navigateForward('/home');
  }
}
