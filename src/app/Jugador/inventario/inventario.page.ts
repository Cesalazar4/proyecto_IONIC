import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { Storage } from '@ionic/storage-angular';
import { LoadingController } from '@ionic/angular';

interface InventoryItem {
  id: number;
  name: string;
  icon?: string;
}

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
})
export class InventarioPage implements OnInit {
  data: any = {
    "caracteristicas": [],
    "habilidades": [],
    "equipamientos": []
  };
  inventoryItems: InventoryItem[] = [
    { id: 1, name: 'Arco y Flechas', icon: '/assets/arcoFlechas.png' },
    { id: 2, name: 'Armadura', icon: '/assets/armadura.png' },
    { id: 3, name: 'Bolsa de Dinero', icon: '/assets/bolsamoney.png' },
    { id: 4, name: 'Diamante', icon: '/assets/diamante.png' },
    { id: 5, name: 'Espada', icon: '/assets/espada.png' },
    { id: 6, name: 'Mapa', icon: '/assets/mapa.png' },
    { id: 7, name: 'Poción Rosa', icon: '/assets/pocimarosa.png' },
    { id: 8, name: 'Poción Verde', icon: '/assets/posion.png' },
    { id: 9, name: 'Item Extra 1', icon: '/assets/p1.png' },
  ];

  selectedItem: InventoryItem | null = null; // Propiedad para el ítem seleccionado

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
    console.log("Inventario cargado correctamente")
  }

  goToHome() {
    this.navCtrl.navigateForward(['/home']);
  }

  // Método para manejar la selección de un ítem
  selectItem(item: InventoryItem) {
    this.selectedItem = item;
    console.log('Item seleccionado:', item);
  }
}
