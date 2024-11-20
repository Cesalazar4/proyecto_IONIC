import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { Storage } from '@ionic/storage-angular';
import { LoadingController } from '@ionic/angular';

interface KnownPlayer {
  id: string;
  nivel: number;
  avatar: string;
  estado?: string;
  descripcion: string;
}

@Component({
  selector: 'app-pconocidas',
  templateUrl: './pconocidas.page.html',
  styleUrls: ['./pconocidas.page.scss'],
})
export class PconocidasPage implements OnInit {
  knownPlayers: KnownPlayer[] = [
    {
      id: '10034567',
      nivel: 2,
      avatar: 'assets/p1.png',
      estado: 'online',
      descripcion: 'Un guerrero audaz con destrezas en batallas cuerpo a cuerpo.'
    },
    {
      id: '10634967',
      nivel: 1,
      avatar: 'assets/p2.png',
      estado: 'offline',
      descripcion: 'Una sabia maga que prefiere la estrategia antes que la fuerza bruta.'
    },
    {
      id: '18934567',
      nivel: 1,
      avatar: 'assets/p3.png',
      estado: 'online',
      descripcion: 'Un explorador astuto, conocido por su agilidad y sigilo.'
    },
    {
      id: '11034960',
      nivel: 2,
      avatar: 'assets/p4.png',
      estado: 'offline',
      descripcion: 'Un maestro de las sombras, siempre observando desde la oscuridad.'
    }
  ];
  conocidos: any=[];

  constructor(private navCtrl: NavController,
    private apiService: ApiService, private storage: Storage,private loadingController: LoadingController) {
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
  
      this.apiService.getJugadoresConocidos({"id_sala": usuario.id_sala,  "id_jugador": usuario.id_jugador}).subscribe({
        next: async(respuesta) => {
          await loading.dismiss(); 

          this.conocidos = respuesta
          console.log(this.conocidos);
          
        },
        error: async(error) => {
          await loading.dismiss(); 

          alert('Error al obtener datos: ' + error.error.message);
          console.error('Error al iniciar sesión:', error);
        }
      });
      
      
    }

  ngOnInit() {
    console.log("")
  }

  goToHome() {
    this.navCtrl.navigateForward(['/home']);
  }

}
