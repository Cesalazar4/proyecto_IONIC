import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {
  musica: number = 0;
  sonido: number = 0;
  brillo: number = 50;
  randomPlayerCount: number = 0; // Número inicial de jugadores
  usuario: any;
  constructor(private navCtrl: NavController, private apiService: ApiService, private storage: Storage) {
    this.init();
  }

  async init() {
    // Inicializar el almacenamiento
    await this.storage.create();
    const usuarioData = await this.storage.get('usuario');
  
    if (usuarioData) {
      this.usuario = usuarioData;
    } else {
      console.log('No se encontró información del usuario.');
    }
    
    
  }

  menu() {
    this.navCtrl.navigateForward('/menu');
  }

  // Función para crear la sala
  crearSala() {
    if (this.randomPlayerCount <= 0) {
      alert('Por favor realice el sorteo de los jugadores');
      return;
    }

    const salaData = {
      musica: this.musica,
      sonido: this.sonido,
      brillo: this.brillo,
      cant_jugadores: this.randomPlayerCount,
      id_usuario: this.usuario.id 
    };

    this.apiService.crearSala(salaData).subscribe({
      next: (respuesta) => {
        if (respuesta.id) {  
          this.storage.set('sala', respuesta);
          alert('Sala creada exitosamente');
          this.navCtrl.navigateForward(`/jugadores?count=${this.randomPlayerCount}`);
        } else {
          alert('No se pudo registrar el usuario.');
        }
      },
      error: (error) => {
        alert('Error al obtener datos: ' + error.error.message);
        console.error('Error al iniciar sesión:', error);
      }
    });
  }

  // Genera un número aleatorio entre 1 y 6 para el número de jugadores
  generarNumero() {
    this.apiService.getCantidadJugadores().subscribe({
      next: (respuesta) => {
        if (respuesta.cantidad) {  
          this.randomPlayerCount = Math.floor(Math.random() * respuesta.cantidad) + 1;
        } 
      },
      error: (error) => {
        alert('Error al obtener datos: ' + error.error.message);
        console.error('Error al iniciar sesión:', error);
      }
    });
  }

  ngOnInit() {
    console.log("Options Page Loaded");
  }
}

