import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {
  randomPlayerCount: number = 0; // Número inicial

  constructor(private navCtrl: NavController) { }

  menu() {
    // Aquí puedes agregar lógica para validar el login
    this.navCtrl.navigateForward('/menu');
  }

  sala() {
    // Aquí puedes agregar lógica para validar el login
    this.navCtrl.navigateForward(`/jugadores?count=${this.randomPlayerCount}`);
  }

  // Genera un número aleatorio entre 1 y 6
  generarNumero() {
    this.randomPlayerCount = Math.floor(Math.random() * 6) + 1;
  }

  ngOnInit() {
    console.log("")
  }
}
