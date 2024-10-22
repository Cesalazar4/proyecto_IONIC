import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  goToCrearMundo() {
    this.navCtrl.navigateForward('/options');
  }

  goToJugadores(){
    this.navCtrl.navigateForward('/jugadores');
  }

  goToSalir() {
    this.navCtrl.navigateForward('/login');
  }

  ngOnInit() {
    console.log("")
  }
}
