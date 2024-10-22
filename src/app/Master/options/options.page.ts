import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  login() {
    // Aquí puedes agregar lógica para validar el login
    this.navCtrl.navigateForward('/menu');
  }

  ngOnInit() {
    console.log("")
  }
}
