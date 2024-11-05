import { Component, OnInit } from '@angular/core';

interface KnownPlayer {
  id: string;
  nivel: number;
  avatar: string;
  estado?: string;
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
      avatar: 'assets/avatars/player1.png',
      estado: 'online'
    },
    {
      id: '10634967',
      nivel: 1,
      avatar: 'assets/avatars/player2.png',
      estado: 'offline'
    },
    {
      id: '18934567',
      nivel: 1,
      avatar: 'assets/avatars/player3.png',
      estado: 'online'
    },
    {
      id: '11034960',
      nivel: 2,
      avatar: 'assets/avatars/player4.png',
      estado: 'offline'
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log
  }

}
