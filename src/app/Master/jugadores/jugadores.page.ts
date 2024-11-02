import { Component } from '@angular/core';

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
  showAddPlayer = true; // Para mostrar el espacio de agregar nuevo jugador
  selectedPlayerIndex: number | null = null;

  // Abrir el selector de personajes
  selectCharacter(index: number) {
    this.selectedPlayerIndex = index;
    this.isCharacterSelectorOpen = true;
  }

  // Seleccionar personaje de la lista
  selectCharacterFromList(character: Character) {
    if (this.selectedPlayerIndex !== null) {
      this.players[this.selectedPlayerIndex].image = character.image;
    }
    this.closeModal();
  }

  // Cerrar modal
  closeModal() {
    this.isCharacterSelectorOpen = false;
  }

  // Agregar un nuevo jugador
  addPlayer() {
    this.players.push({ id: this.players.length + 1, name: 'Nuevo Jugador', image: 'assets/default.png' });
    if (this.players.length >= 6) {
      this.showAddPlayer = false;
    }
  }
  

  // Eliminar jugador
  removePlayer(index: number) {
    if (index >= 0) { // Solo permitir eliminar los añadidos
      this.players.splice(index, 1);
      this.showAddPlayer = true;
    }
  }
}
