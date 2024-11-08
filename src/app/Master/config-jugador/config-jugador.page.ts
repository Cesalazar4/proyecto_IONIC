import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-config-jugador',
  templateUrl: './config-jugador.page.html',
  styleUrls: ['./config-jugador.page.scss'],
})
export class ConfigJugadorPage implements OnInit {


  constructor( private toastController: ToastController, private router: Router) { }
  stats = [
    { name: 'Musculatura', value: 7, bonus: 1 },
    { name: 'Puntería', value: 13, bonus: 1 },
    { name: 'Salud', value: 14, bonus: 1 },
    { name: 'Lógica', value: 13, bonus: 1 },
    { name: 'Intuición', value: 10, bonus: 1 },
    { name: 'Verborrea', value: 12, bonus: 1 },
  ];

  skills = [
    'Torbellino de Espadas',
    'Reflejos Felinos',
    'Maestro de Armas',
    'Espada Llameante',
    'Golpe de Sangre',
    'Flecha Explosiva',
    'Curación Rápida',
  ];

  equipment = Array(9).fill(null);
  knownCharacters = Array(4).fill(null);

  async saveCharacter() {
    console.log('Guardando personaje...');
    
    // Aquí iría la lógica para guardar el personaje
    //Base  datos


    const toast = await this.toastController.create({
      message: 'Se ha guardado correctamente el personaje',
      duration: 500,
      position: 'middle', 
      color: 'success'
    });
    await toast.present();

    await toast.onDidDismiss();

    this.router.navigate(['/armor-class']);
  }
  goToDetailPage(type: string) {

    this.router.navigate(['/armor-class']);
  }


  ngOnInit() {
    console.log()
    
  }

}





