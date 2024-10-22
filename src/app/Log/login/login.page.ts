import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl: NavController) { }
   // Método que se ejecuta al hacer clic en el botón de iniciar sesión
  login() {
    // Aquí puedes agregar lógica para validar el login
    this.navCtrl.navigateForward('/menu');
  }

  goToRegister() {
    this.navCtrl.navigateForward('/register'); // Redirige a la página de Registro
  }
  
  ngOnInit() {
    console.log("")
  }

}
