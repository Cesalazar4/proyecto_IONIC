import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-armor-class',
  templateUrl: './armor-class.page.html',
  styleUrls: ['./armor-class.page.scss'],
})
export class ArmorClassPage implements OnInit {
  characterImage: string = '/assets/p1.png';

  bloqueoStats = { Base: 10, Constitucion: 1, Item: 0, Total: 11 };
  esquivarStats = { Base: 10, Destreza: 1, Item: 0, Total: 11 };
  hitPointsStats = { Base: 10, 'Daño Sufrido': -8, Total: -8 };
  ataqueStats = { Caracteristica: -1, Items: 0, Habilidad: 0, Total: -1 };

  bonificadorCompetencias: number = 2;
  alias: string = '';
  playerId: string = '#12345';

  backgroundImage: string = '/assets/background.jpg';

  constructor(
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('ArmorClassPage initialized');
  }
  

  incrementStat(statObject: any, key: string) {
    if (key === 'Total') {
      statObject[key]++;
    }
  }

  decrementStat(statObject: any, key: string) {
    if (key === 'Total') {
      statObject[key]--;
    }
  }

  async saveCharacter() {
    console.log('Guardando personaje...');
    
    // Aquí iría la lógica para guardar el personaje
    // Por ejemplo, una llamada a un servicio que guarde los datos

    // Mostrar mensaje de confirmación
    const toast = await this.toastController.create({
      message: 'Se ha guardado correctamente el personaje',
      duration: 500, // Duración en milisegundos
      position: 'middle', // Puedes cambiar a 'top' o 'bottom' si prefieres
      color: 'success'
    });
    await toast.present();

    // Esperar a que se muestre el toast antes de navegar
    await toast.onDidDismiss();

    // Navegar a la página de jugadores
    this.router.navigate(['/jugadores']);
  }
  goToDetailPage(type: string) {
    // Navegar a la página de detalles con el tipo como parámetro
    this.router.navigate(['/config-jugador']);
  }
}
