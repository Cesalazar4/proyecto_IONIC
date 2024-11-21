import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute
import { ApiService } from '../../services/api.service';
import { Storage } from '@ionic/storage-angular';
import { LoadingController } from '@ionic/angular';

interface Character {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.page.html',
  styleUrls: ['./jugadores.page.scss'],
})

export class JugadoresPage implements OnInit {

  
  players: Character[] = [
    { id: 1, name: 'Caballero', image: 'assets/p4.png' },
    { id: 2, name: 'Guerrero', image: 'assets/p2.png' },
    { id: 3, name: 'Enano', image: 'assets/p6.png' },
    { id: 4, name: 'mono', image: 'assets/p1.png' },
    { id: 5, name: 'Vikinga', image: 'assets/p5.png' },
    { id: 6, name: 'Caballera', image: 'assets/p3.png' }
  ];

  playerCount: number = 1; // Número de jugadores, por defecto 3

  personajDispo: Character[] = [
    { id: 4, name: 'Mono', image: 'assets/p1.png' },
    { id: 5, name: 'Caballera', image: 'assets/p3.png' },
    { id: 6, name: 'Vikinga', image: 'assets/p5.png' },
    { id: 1, name: 'Caballero', image: 'assets/p4.png' },
    { id: 2, name: 'Guerrero', image: 'assets/p2.png' },
    { id: 3, name: 'Enano', image: 'assets/p6.png' }
  ];

  isCharacterSelectorOpen = false;
  showAddPlayer = true;
  selectedPlayerIndex: number | null = null;
  usuario: any;
  sala: any;
  jugadores: any;

  constructor(private router: Router, private navCtrl: NavController, private route: ActivatedRoute, private apiService: ApiService, private storage: Storage,private loadingController: LoadingController) {
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
    
   

    const usuarioData = await this.storage.get('usuario');
console.log(usuarioData);

      if (usuarioData) {
        // Verifica si la clave 'id_sala' no existe o es undefined
        if (!('id_sala' in usuarioData) || usuarioData.id_sala === undefined) {
          const salaData = await this.storage.get('sala');

          if (salaData) {
            this.sala = salaData;
          } else {
            console.log('No se encontró información de sala.');
          }

          if (this.sala) {
            usuarioData.id_sala = this.sala.id;
          }
        }
      } else {
        console.log('No se encontró información del usuario.');
      }

      this.storage.set('usuario', usuarioData);
      this.usuario = usuarioData;
    

    
    this.apiService.getDataSala(this.usuario.id_sala).subscribe({
      next: async(respuesta) => {
        await loading.dismiss(); // Oculta el loading
        if(respuesta){
          this.jugadores = respuesta;
          console.log(this.sala.id, this.jugadores);
          
        }
        
      },
      error: async(error) => {
        await loading.dismiss(); // Oculta el loading

        alert('No tienes sala creada ' + error.error.message);
        console.error('Error al iniciar sesión:', error);
      }
    });
    
  }

  // Función para navegar a la página de Armor Class
  irArmorClass(playerId: number, avatar: string) {
    this.router.navigate(['/armor-class', playerId, avatar]);
  }

  selectCharacter(index: number) {
    this.selectedPlayerIndex = index;
    this.isCharacterSelectorOpen = true;
  }


  selectCharacterFromList(character: Character) {
    if (this.selectedPlayerIndex !== null) {
      this.players[this.selectedPlayerIndex].image = character.image;
    }
    this.closeModal();
  }


  closeModal() {
    this.isCharacterSelectorOpen = false;
  }

  addPlayer() {
    this.players.push({ id: this.players.length + 1, name: 'Nuevo Jugador', image: 'assets/default.png' });
    if (this.players.length >= 6) {
      this.showAddPlayer = false;
    }
  }
  
  removePlayer(index: number) {
    if (index >= 0) {
      this.players.splice(index, 1);
      this.showAddPlayer = true;
    }
  }

  guardar() {
    // Aquí puedes agregar lógica para validar el login
    this.navCtrl.navigateForward('/menu');
  }

  ngOnInit() {
    console.log
    // Recibe el número aleatorio de jugadores
    // this.route.queryParams.subscribe(params => {
    //   if (params['count']) {
    //     this.playerCount = parseInt(params['count'], 10);
    //     this.players = this.players.slice(0, this.playerCount); // Ajusta el número de jugadores
    //   }
    // });
    

    // this.apiService.getDataSala(this.sala.id).subscribe({
    //   next: (respuesta) => {
    //     console.log(respuesta);
        
    //   },
    //   error: (error) => {
    //     alert('Error al obtener datos: ' + error.error.message);
    //     console.error('Error al iniciar sesión:', error);
    //   }
    // });
  }

  home() {
    this.navCtrl.navigateForward('/home');
  }
  goToMenu() {
    this.navCtrl.navigateForward('/menu');
  }

}
