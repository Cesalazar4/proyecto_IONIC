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
  downloadFile() {
    // URL del archivo que deseas descargar
    const fileUrl = '/assets/Manuales/REMINISCENCIA.pdf'; // Corregido con slashes "/"
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'REMINISCENCIA.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
