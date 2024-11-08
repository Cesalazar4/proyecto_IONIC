import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute

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

export class JugadoresPage implements OnInit {
  players: Character[] = [
    { id: 1, name: 'Caballero', image: 'assets/p4.png' },
    { id: 2, name: 'Guerrero', image: 'assets/p2.png' },
    { id: 3, name: 'Enano', image: 'assets/p6.png' },
    { id: 4, name: 'mono', image: 'assets/p1.png' },
    { id: 5, name: 'Vikinga', image: 'assets/p5.png' },
    { id: 6, name: 'Caballera', image: 'assets/p3.png' }
  ];

  playerCount: number = 1; // Número de jugadores, por defecto 3

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

  constructor(private router: Router, private navCtrl: NavController, private route: ActivatedRoute) {}

  // Función para navegar a la página de Armor Class
  irArmorClass(playerId: number) {
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

  guardar() {
    // Aquí puedes agregar lógica para validar el login
    this.navCtrl.navigateForward('/menu');
  }

  ngOnInit() {
    // Recibe el número aleatorio de jugadores
    this.route.queryParams.subscribe(params => {
      if (params['count']) {
        this.playerCount = parseInt(params['count'], 10);
        this.players = this.players.slice(0, this.playerCount); // Ajusta el número de jugadores
      }
    });
  }

}
