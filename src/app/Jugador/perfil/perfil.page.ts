import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

interface PlayerStats {
  edad: number;
  altura: number;
  nivel: number;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  // Propiedades de la clase
  playerAlias: string = '';
  playerId: string = '';
  playerStats: PlayerStats = {
    edad: 21,
    altura: 1.80,
    nivel: 1
  };

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log("")
  }

  goToHome() {
    this.navCtrl.navigateForward(['/home']);
  }

  goToHabilidades() {
    this.navCtrl.navigateForward('/habilidades'); // Redirige a la página de Registro
  }  
  goToInventario() {
    this.navCtrl.navigateForward('/inventario');
  }

  goToCaracteristicas() {
    this.navCtrl.navigateForward('/caracteristicas');
  }

  goToPConocidas() {
    this.navCtrl.navigateForward('/pconocidas');
  }
  // Método para inicializar los datos del jugador
  loadPlayerData() {
    // Simulando obtención de datos
    // En un caso real, esto vendría de un servicio
    this.playerAlias = 'Jugador1';
    this.playerId = 'ID-' + Math.floor(Math.random() * 1000);
    
    this.playerStats = {
      edad: 21,
      altura: 1.80,
      nivel: 1
    };
  }

  // Métodos para manejar eventos
  onAliasChange(event: any) {
    this.playerAlias = event.detail.value;
    console.log('Nuevo alias:', this.playerAlias);
  }

  onButtonClick(section: string) {
    console.log('Navegando a:', section);
    // Aquí puedes agregar la lógica de navegación
  }
}