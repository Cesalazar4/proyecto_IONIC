import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-config-jugador',
  templateUrl: './config-jugador.page.html',
  styleUrls: ['./config-jugador.page.scss'],
})
export class ConfigJugadorPage implements OnInit {


  constructor( private toastController: ToastController, 
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private apiService: ApiService, private storage: Storage) {
      this.init();
    }
  
    async init() {
      // Inicializar el almacenamiento
      await this.storage.create();
      const usuario = await this.storage.get('usuario');
    
      if (usuario) {
        this.idSala = usuario.id_sala;
      } else {
        console.log('No se encontró información del usuario.');
      }

      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        this.playerId = id;
        if (id) {
          this.apiService.getJugadores(id).subscribe({
            next: (respuesta) => {
              if (respuesta) {
                console.log(respuesta);
                this.data = respuesta;
              }
            },
            error: (error) => {
              alert('Error al obtener datos: ' + error.error.message);
              console.error('Error al iniciar sesión:', error);
            }
          });
        }
      });
  
      this.apiService.getJugadoresConocidos({"id_sala": this.idSala,  "id_jugador": this.playerId}).subscribe({
        next: (respuesta) => {
          this.conocidos = respuesta
          console.log(this.conocidos);
          
        },
        error: (error) => {
          alert('Error al obtener datos: ' + error.error.message);
          console.error('Error al iniciar sesión:', error);
        }
      });
      
      
    }
    idSala: any;
  playerId: any;
  data: any = {
    "caracteristicas": [],
    "habilidades": [],
    "equipamientos": []
  };
  

  conocidos: any= [];

  async saveCharacter() {
    console.log(this.data);
    
    this.apiService.actualizarOtrosDatosJugador(this.data).subscribe({
      next:async (respuesta) => {
        console.log(respuesta);
        const toast = await this.toastController.create({
          message: 'Se ha guardado correctamente',
          duration: 500,
          position: 'middle',
          color: 'success'
        });
        await toast.present();
        await toast.onDidDismiss();
        // this.goToDetailPage(this.playerId);
      },
      error: (error) => {
        alert('Error al obtener datos: ' + error.error.message);
        console.error('Error al iniciar sesión:', error);
      }
    });



  }

  goToDetailPage(id: any) {
    this.router.navigate(['/jugadores']);
  }
    //nuevo para redirige a propiedades
  propiedades() {
    this.navCtrl.navigateForward('/propiedades');
  }

  cambiarEstado(i:any) {
    this.data.habilidades[i].bloqueado = 1;
  }

  cambiarEstadoEquipamiento(i:any) {
    this.data.equipamientos[i].bloqueado = 1;
  }

  ngOnInit() {
    // Obtiene el parámetro 'id' de la URL
    
  }

}





