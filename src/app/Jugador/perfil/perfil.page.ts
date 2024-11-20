import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { Storage } from '@ionic/storage-angular';

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
  avatar:string='';
  constructor(private navCtrl: NavController, private apiService: ApiService, private storage: Storage) {
    this.init();
  }

  async init() {
    // Inicializar el almacenamiento
    await this.storage.create();
    const usuario = await this.storage.get('usuario');
  
    if (usuario) {
      console.log(usuario);
      this.avatar = 'assets/'+usuario.avatar+'.png';
      this.apiService.getJugadores(usuario.id_jugador).subscribe({
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
    } else {
      console.log('No se encontró información del usuario.');
    }
  }

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