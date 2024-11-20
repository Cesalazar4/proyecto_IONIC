import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { Storage } from '@ionic/storage-angular';
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
    { name: 'Torbellino de Espadas', icon: 'thunderstorm', unlocked: true },
    { name: 'Reflejos Felinos', icon: 'flash', unlocked: true },
    { name: 'Maestro de Armas', icon: 'shield', unlocked: true },
    { name: 'Espada Llamante', icon: 'flame', unlocked: true },
    { name: 'Golpe de Sangre', icon: 'water', unlocked: true },
    { name: 'Flecha Explosiva', icon: 'navigate', unlocked: true },
    { name: 'Curación Rapida', icon: 'heart', unlocked: true }
  ];
  data: any = {
    "caracteristicas": [],
    "habilidades": [],
    "equipamientos": []
  };
  constructor(private navCtrl: NavController, private apiService: ApiService, private storage: Storage) {
    this.init();
  }

  iconos = ['thunderstorm', 'flash', 'shield', 'flame', 'water', 'navigate', 'heart'];

  obtenerIconoAleatorio(): string {
    const indiceAleatorio = Math.floor(Math.random() * this.iconos.length);
    return this.iconos[indiceAleatorio];
  }

  async init() {
    // Inicializar el almacenamiento
    await this.storage.create();
    const usuario = await this.storage.get('usuario');
  
    if (usuario) {
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

}
