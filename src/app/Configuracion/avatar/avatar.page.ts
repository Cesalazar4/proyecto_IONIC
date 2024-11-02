import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Character {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {
  character!: Character;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const characterId = this.route.snapshot.paramMap.get('id');
    if (characterId) {
      this.character = this.getCharacterById(+characterId);
    } else {
      console.error('ID del personaje no encontrado');
    }
  }

  getCharacterById(id: number): Character {
    const characters = [
      { id: 1, name: 'Caballero', image: 'assets/p4.png' },
      { id: 2, name: 'Guerrero', image: 'assets/p2.png' },
      { id: 3, name: 'Enano', image: 'assets/p6.png' }
    ];
    return characters.find(char => char.id === id) || { id: 0, name: 'Desconocido', image: 'assets/default.png' };
  }
}
