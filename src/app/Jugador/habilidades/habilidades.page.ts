import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

interface Skill {
  name: string;
  icon: string;
  unlocked: boolean;
}

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.page.html',
  styleUrls: ['./habilidades.page.scss'],
})
export class HabilidadesPage implements OnInit {

  skills: Skill[] = [
    { name: 'Torbellino de Espadas', icon: 'thunderstorm', unlocked: true },
    { name: 'Reflejos Felinos', icon: 'flash', unlocked: true },
    { name: 'Maestro de Armas', icon: 'shield', unlocked: true },
    { name: 'Espada Llamante', icon: 'flame', unlocked: true },
    { name: 'Golpe de Sangre', icon: 'water', unlocked: true },
    { name: 'Flecha Explosiva', icon: 'navigate', unlocked: true },
    { name: 'Curación Rapida', icon: 'heart', unlocked: true }
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log("")
  }

  goToHome() {
    this.navCtrl.navigateForward(['/home']);
  }

}
