import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { Storage } from '@ionic/storage-angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  role: string = 'jugador'; // Valor por defecto

  constructor(private navCtrl: NavController, private apiService: ApiService, private storage: Storage,private loadingController: LoadingController) {
    this.init();
  }

  async init() {
    // Inicializar el almacenamiento
    await this.storage.create();

    await this.storage.remove('sala');

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

  async register() {
    const loading = await this.loadingController.create({
      message: 'Cargando...', // Mensaje de carga
      spinner: 'crescent', // Tipo de spinner
      cssClass: 'custom-loading', // Clase CSS opcional para estilos personalizados
      backdropDismiss: false // Evita que el usuario cierre el loading tocando fuera
    });
    await loading.present(); // Muestra el loading

    if  (this.usuario=='' || this.clave=='' || this.correo=='' || this.role=='' || this.avatar=='') {
      await loading.dismiss(); // Oculta el loading
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
      next:async (respuesta) => {
        if (respuesta.id) {  
          await loading.dismiss(); // Oculta el loading

          this.storage.set('usuario', respuesta);

          alert('Usuario registrado exitosamente.');
          
          localStorage.setItem('role', this.role);
          if (this.role === 'jugador') {
            this.navCtrl.navigateForward('/login');
          } else if (this.role === 'master') {
            this.navCtrl.navigateForward('/options');
          }
        } else {
          alert('No se pudo registrar el usuario.');
        }
      },
      error:async (error) => {
        await loading.dismiss(); // Oculta el loading

        alert('Error al obtener datos: ' + error.error.message);
        console.error('Error al iniciar sesión:', error);
      }
    });
    
  }
  
  


  // Método para ir a la página de inicio de sesión
  goToLogin() {
    
    this.navCtrl.navigateForward('/login');
  }

  home() {
    // Aquí puedes agregar lógica para validar el login
    this.navCtrl.navigateForward('/home');
  }
}
