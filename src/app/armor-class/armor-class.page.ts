import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

interface Stats {
  [key: string]: number;
}

@Component({
  selector: 'app-armor-class',
  templateUrl: './armor-class.page.html',
  styleUrls: ['./armor-class.page.scss'],
})
export class ArmorClassPage implements OnInit {
  characterImage: string = '/assets/p1.png';

  bloqueoStats: Stats = { Base: 10, Constitucion: 1, Item: 0, Total: 11 };
  esquivarStats: Stats = { Base: 10, Destreza: 1, Item: 0, Total: 11 };
  hitPointsStats: Stats = { Base: 10, 'Daño Sufrido': 0, Total: 10 };
  ataqueStats: Stats = { Caracteristica: 0, Items: 0, Habilidad: 0, Total: 0 };

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
    this.updateAllTotals();
  }

  updateTotal(statType: 'bloqueo' | 'esquivar' | 'hitPoints' | 'ataque') {
    const stats = this[`${statType}Stats`] as Stats;
    let total = 0;
    for (const key in stats) {
      if (key !== 'Total') {
        stats[key] = Math.max(0, Math.min(100, stats[key]));
        total += stats[key];
      }
    }
    stats['Total'] = Math.min(100, total);
  }

  updateAllTotals() {
    this.updateTotal('bloqueo');
    this.updateTotal('esquivar');
    this.updateTotal('hitPoints');
    this.updateTotal('ataque');
  }

  async saveCharacter() {
    console.log('Guardando personaje...');
    
    const toast = await this.toastController.create({
      message: 'Se ha guardado correctamente el personaje',
      duration: 500,
      position: 'middle',
      color: 'success'
    });
    await toast.present();
    await toast.onDidDismiss();
    this.router.navigate(['/jugadores']);
  }

  goToDetailPage(type: string) {
    this.router.navigate(['/config-jugador']);
  }

  onInputChange(event: any, statType: 'bloqueo' | 'esquivar' | 'hitPoints' | 'ataque', key: string) {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      this[`${statType}Stats`][key] = Math.max(0, Math.min(11, value));
      this.updateTotal(statType);
    }
  }
}