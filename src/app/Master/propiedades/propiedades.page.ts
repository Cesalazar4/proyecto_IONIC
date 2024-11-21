import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

interface Propiedades {
  nombre: string;
  pBase: number;
  bonificador: number;
  porCompetencia: number;
  porEquipo: number;
  sumaAlDado: number;
}

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.page.html',
  styleUrls: ['./propiedades.page.scss'],
})
export class PropiedadesPage implements OnInit {
  constructor(private navCtrl: NavController) { }

  propiedades: Propiedades[] = [
    { nombre: 'Fuerza', pBase: 9, bonificador: -1, porCompetencia: 0, porEquipo: 0, sumaAlDado: -1 },
    { nombre: 'Destreza', pBase: 13, bonificador: 0, porCompetencia: 0, porEquipo: 0, sumaAlDado: 1 },
    { nombre: 'Constitución', pBase: 11, bonificador: 0, porCompetencia: 0, porEquipo: 0, sumaAlDado: 1 },
    { nombre: 'Inteligencia', pBase: 13, bonificador: 1, porCompetencia: 0, porEquipo: 0, sumaAlDado: 1 },
    { nombre: 'Sabiduría', pBase: 12, bonificador: 1, porCompetencia: 0, porEquipo: 0, sumaAlDado: 1 },
    { nombre: 'Apariencia', pBase: 12, bonificador: 1, porCompetencia: 0, porEquipo: 0, sumaAlDado: 1 },
    { nombre: 'Estamina', pBase: 11, bonificador: 0, porCompetencia: 0, porEquipo: 0, sumaAlDado: 0 },
    { nombre: 'Balance', pBase: 13, bonificador: 1, porCompetencia: 0, porEquipo: 0, sumaAlDado: 1 },
    { nombre: 'Resistencia', pBase: 12, bonificador: 1, porCompetencia: 0, porEquipo: 0, sumaAlDado: 1 },
    { nombre: 'Conocimiento', pBase: 12, bonificador: 1, porCompetencia: 0, porEquipo: 0, sumaAlDado: 1 },
    { nombre: 'F. Voluntad', pBase: 14, bonificador: 2, porCompetencia: 2, porEquipo: 0, sumaAlDado: 4 },
    { nombre: 'Carisma', pBase: 12, bonificador: 1, porCompetencia: 0, porEquipo: 0, sumaAlDado: 1 },
    { nombre: 'Musculatura', pBase: 7, bonificador: -1, porCompetencia: 0, porEquipo: 0, sumaAlDado: -1 },
    { nombre: 'Puntería', pBase: 13, bonificador: 1, porCompetencia: 0, porEquipo: 0, sumaAlDado: 1 },
    { nombre: 'Salud', pBase: 14, bonificador: 1, porCompetencia: 0, porEquipo: 0, sumaAlDado: 1 },
    { nombre: 'Lógica', pBase: 13, bonificador: 1, porCompetencia: 0, porEquipo: 0, sumaAlDado: 1 },
    { nombre: 'Intuición', pBase: 10, bonificador: 1, porCompetencia: 0, porEquipo: 0, sumaAlDado: 1 },
    { nombre: 'Verborrea', pBase: 12, bonificador: 1, porCompetencia: 0, porEquipo: 0, sumaAlDado: 1 }
  ];

  calcularTotal(index: number) {
    const propiedad = this.propiedades[index];
    propiedad.sumaAlDado = propiedad.pBase + propiedad.bonificador + propiedad.porCompetencia + propiedad.porEquipo;
  }

  config_jugador() {
    this.navCtrl.navigateForward('/config-jugador');
  }

  armor_class(){
    this.navCtrl.navigateForward('armor-class/2');
  }

  ngOnInit() {
  }

}
