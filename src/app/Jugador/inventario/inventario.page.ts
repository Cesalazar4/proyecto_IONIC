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
    { id: 1, name: 'Empty', icon: '' },
    { id: 2, name: 'Empty', icon: '' },
    { id: 3, name: 'Empty', icon: '' },
    { id: 4, name: 'Empty', icon: '' },
    { id: 5, name: 'Empty', icon: '' },
    { id: 6, name: 'Empty', icon: '' },
    { id: 7, name: 'Empty', icon: '' },
    { id: 8, name: 'Empty', icon: '' },
    { id: 9, name: 'Empty', icon: '' },
  ];

  constructor() { }

  ngOnInit() {
    console.log("")
  }

}
