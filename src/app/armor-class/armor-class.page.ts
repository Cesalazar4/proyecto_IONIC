import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

interface Stats {
  [key: string]: number;
}

@Component({
  selector: 'app-armor-class',
  templateUrl: './armor-class.page.html',
  styleUrls: ['./armor-class.page.scss'],
})
export class ArmorClassPage implements OnInit {
  characterImage: string = '/assets/p1.png';

  playerId: any = 12345;

  backgroundImage: string = '/assets/background.jpg';
  data: any = {
    "id": null,
    "alias": null,
    "edad": null,
    "altura": null,
    "nivel": null,
    "bon_competencias": null,
    "id_usuario": null,
    "bloqueo": {
      "id": null,
      "base": 0,
      "constitucion": 0,
      "item": 0,
      "total": 0,
      "id_jugador": null
    },
    "hit_point": {
      "id": null,
      "base": 0,
      "daño_sufrido": 0,
      "total": 0,
      "id_jugador": null
    },
    "esquivar": {
      "id": null,
      "base": 0,
      "destreza": 0,
      "item": 0,
      "total": 0,
      "id_jugador": null
    },
    "ataque": {
      "id": null,
      "caracteristica": 0,
      "habilidad": 0,
      "item": 0,
      "total": 0,
      "id_jugador": null
    },
    "caracteristicas": [],
    "habilidades": [],
    "equipamientos": []
  };
  constructor(
    private toastController: ToastController,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    // Obtiene el parámetro 'id' de la URL
    this.route.paramMap.subscribe(params => {
      const id = params.get('playerId');
      this.characterImage = '/assets/'+params.get('avatar')+'.png';
      this.playerId = id;
      if (id) {
        this.apiService.getJugadores(id).subscribe({
          next: (respuesta) => {
            if (respuesta) {
              this.data = respuesta;
              console.log(this.data);
            }
          },
          error: (error) => {
            alert('Error al obtener datos: ' + error.error.message);
            console.error('Error al iniciar sesión:', error);
          }
        });
      }
    });

  }

  

  async saveCharacter() {

    console.log(this.data);
    
    this.apiService.actualizarJugador(this.data).subscribe({
      next:async (respuesta) => {
        console.log(respuesta);
        const toast = await this.toastController.create({
          message: 'Se ha guardado correctamente el personaje',
          duration: 500,
          position: 'middle',
          color: 'success'
        });
        await toast.present();
        await toast.onDidDismiss();
        this.router.navigate(['/jugadores']);
      },
      error: (error) => {
        alert('Error al obtener datos: ' + error.error.message);
        console.error('Error al iniciar sesión:', error);
      }
    });

    
  }

  goToDetailPage(idJugador: any) {
    this.router.navigate(['/config-jugador', idJugador]);
  }

  onInputChange(event: any, tipo: string, clave: string) {
    const value = parseInt(event.target.value);   
    if (!isNaN(value)) {
      this.data[tipo].total += value;
    }
  }
}