import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

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

  constructor(private navCtrl: NavController, private apiService: ApiService) { }

  menu() {
    this.navCtrl.navigateForward('/menu');
  }

  // Función para crear la sala
  crearSala() {
    const salaData = {
      musica: this.musica,
      sonido: this.sonido,
      brillo: this.brillo,
      cant_jugadores: this.randomPlayerCount,
      id_usuario: 17 // Reemplaza esto con el ID del usuario actual
    };

    this.apiService.crearSala(salaData).subscribe(
      (respuesta) => {
        console.log('Sala creada:', respuesta);
        alert('Sala creada exitosamente');
        this.navCtrl.navigateForward(`/jugadores?count=${this.randomPlayerCount}`);
      },
      (error) => {
        console.error('Error al crear sala:', error);
        alert('Error al crear la sala');
      }
    );
  }

  // Genera un número aleatorio entre 1 y 6 para el número de jugadores
  generarNumero() {
    this.randomPlayerCount = Math.floor(Math.random() * 6) + 1;
  }

  ngOnInit() {
    console.log("Options Page Loaded");
  }
}

