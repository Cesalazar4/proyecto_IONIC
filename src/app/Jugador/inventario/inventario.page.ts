import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {
    console.log("Inventario cargado correctamente");
  }

  // Método para manejar la selección de un ítem
  selectItem(item: InventoryItem) {
    this.selectedItem = item;
    console.log('Item seleccionado:', item);
  }
}
