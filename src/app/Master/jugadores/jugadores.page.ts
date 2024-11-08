import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Character {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.page.html',
  styleUrls: ['./jugadores.page.scss'],
})


export class JugadoresPage {
  players: Character[] = [
    { id: 1, name: 'Caballero', image: 'assets/p4.png' },
    { id: 2, name: 'Guerrero', image: 'assets/p2.png' },
    { id: 3, name: 'Enano', image: 'assets/p6.png' }
  ];

  personajDispo: Character[] = [
    { id: 4, name: 'Mono', image: 'assets/p1.png' },
    { id: 5, name: 'Caballera', image: 'assets/p3.png' },
    { id: 6, name: 'Vikinga', image: 'assets/p5.png' },
    { id: 1, name: 'Caballero', image: 'assets/p4.png' },
    { id: 2, name: 'Guerrero', image: 'assets/p2.png' },
    { id: 3, name: 'Enano', image: 'assets/p6.png' }
  ];

  isCharacterSelectorOpen = false;
  showAddPlayer = true;
  selectedPlayerIndex: number | null = null;

  constructor(private router: Router) {}

  // Función para navegar a la página de Armor Class
  goToArmorClass(playerId: number) {
    this.router.navigate(['/armor-class', playerId]);
  }

  selectCharacter(index: number) {
    this.selectedPlayerIndex = index;
    this.isCharacterSelectorOpen = true;
  }


  selectCharacterFromList(character: Character) {
    if (this.selectedPlayerIndex !== null) {
      this.players[this.selectedPlayerIndex].image = character.image;
    }
    this.closeModal();
  }


  closeModal() {
    this.isCharacterSelectorOpen = false;
  }


  
  addPlayer() {
    this.players.push({ id: this.players.length + 1, name: 'Nuevo Jugador', image: 'assets/default.png' });
    if (this.players.length >= 6) {
      this.showAddPlayer = false;
    }
  }


  
  removePlayer(index: number) {
    if (index >= 0) {
      this.players.splice(index, 1);
      this.showAddPlayer = true;
    }
  }
}
