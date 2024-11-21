import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { Storage } from '@ionic/storage-angular';
import { LoadingController } from '@ionic/angular';

interface Caracteristica {
  nombre: string;
  pBase: number;
  bonificador: number;
  porCompetencia: number;
  porEquipo: number;
  sumaAlDado: number;
}

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.page.html',
  styleUrls: ['./caracteristicas.page.scss'],
})
export class CaracteristicasPage implements OnInit {
  data: any = {
    "caracteristicas": [],
    "habilidades": [],
    "equipamientos": []
  };
  caracteristicas: Caracteristica[] = [
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

  constructor(private navCtrl: NavController, private apiService: ApiService, private storage: Storage,private loadingController: LoadingController) {
    this.init();
  }

  async init() {
    const loading = await this.loadingController.create({
      message: 'Cargando...', // Mensaje de carga
      spinner: 'crescent', // Tipo de spinner
      cssClass: 'custom-loading', // Clase CSS opcional para estilos personalizados
      backdropDismiss: false // Evita que el usuario cierre el loading tocando fuera
    });
    await loading.present(); 
    // Inicializar el almacenamiento
    await this.storage.create();
    const usuario = await this.storage.get('usuario');
  
    if (usuario) {
      this.apiService.getJugadores(usuario.id_jugador).subscribe({
        next: async(respuesta) => {
          await loading.dismiss(); 

          if (respuesta) {
            this.data = respuesta;
            console.log(this.data);
          }
        },
        error: async(error) => {
          await loading.dismiss(); 

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
