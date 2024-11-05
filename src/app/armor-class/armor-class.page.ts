import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armor-class',
  templateUrl: './armor-class.page.html',
  styleUrls: ['./armor-class.page.scss'],
})
export class ArmorClassPage implements OnInit {
  selectedCharacter: number = 0;
  characters: string[] = [
    '/assets/p1.png',
    '/assets/p2.png',
  ];

  bloqueoStats = { Base: 10, Constitucion: 1, Item: 0, Total: 11 };
  esquivarStats = { Base: 10, Destreza: 1, Item: 0, Total: 11 };
  hitPointsStats = { Base: 10, 'Daño Sufrido': -8, Total: -8 };
  ataqueStats = { Caracteristica: -1, Items: 0, Habilidad: 0, Total: -1 };

  bonificadorCompetencias: number = 2;
  alias: string = '';
  playerId: string = '#12345';

  backgroundImage: string = '/assets/background.jpg'; // Añade esta línea

  constructor() { }

  ngOnInit() { 
    this.selectCharacter(this.selectedCharacter);
  }

  selectCharacter(index: number) {
    this.selectedCharacter = index;
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

  saveCharacter() {
    console.log('Guardando personaje...');
    // Aquí iría la lógica para guardar el personaje
  }
}

