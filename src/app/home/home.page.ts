import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}
  // Función para redirigir a la página de Login
  goToLoginPage() {
    this.navCtrl.navigateForward('/login');
  }
}
