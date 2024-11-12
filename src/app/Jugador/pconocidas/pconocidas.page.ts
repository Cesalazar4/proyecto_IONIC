import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

interface KnownPlayer {
  id: string;
  nivel: number;
  avatar: string;
  estado?: string;
  descripcion: string;
}

@Component({
  selector: 'app-pconocidas',
  templateUrl: './pconocidas.page.html',
  styleUrls: ['./pconocidas.page.scss'],
})
export class PconocidasPage implements OnInit {
  knownPlayers: KnownPlayer[] = [
    {
      id: '10034567',
      nivel: 2,
      avatar: 'assets/p1.png',
      estado: 'online',
      descripcion: 'Un guerrero audaz con destrezas en batallas cuerpo a cuerpo.'
    },
    {
      id: '10634967',
      nivel: 1,
      avatar: 'assets/p2.png',
      estado: 'offline',
      descripcion: 'Una sabia maga que prefiere la estrategia antes que la fuerza bruta.'
    },
    {
      id: '18934567',
      nivel: 1,
      avatar: 'assets/p3.png',
      estado: 'online',
      descripcion: 'Un explorador astuto, conocido por su agilidad y sigilo.'
    },
    {
      id: '11034960',
      nivel: 2,
      avatar: 'assets/p4.png',
      estado: 'offline',
      descripcion: 'Un maestro de las sombras, siempre observando desde la oscuridad.'
    }
  ];
  

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log("")
  }

  goToHome() {
    this.navCtrl.navigateForward(['/home']);
  }

}
