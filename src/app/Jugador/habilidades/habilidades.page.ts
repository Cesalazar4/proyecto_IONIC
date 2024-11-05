import { Component, OnInit } from '@angular/core';

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
    { name: 'Torbellino de Espadas', icon: 'sword', unlocked: true },
    { name: 'Reflejos Felinos', icon: 'flash', unlocked: true },
    { name: 'Maestro de Armas', icon: 'shield', unlocked: true },
    { name: 'Espada Llamante', icon: 'flame', unlocked: true },
    { name: 'Golpe de Sangre', icon: 'water', unlocked: true },
    { name: 'Flecha Explosiva', icon: 'arrow', unlocked: true },
    { name: 'Curación Rapida', icon: 'heart', unlocked: true }
  ];

  constructor() { }

  ngOnInit() {
    console.log("");
  }

}
