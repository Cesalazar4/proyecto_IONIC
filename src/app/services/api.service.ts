import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api'; 

  constructor(private http: HttpClient) {}

  getJugadores(id_jugador:any): Observable<any> {
    return this.http.get(`${this.apiUrl}/jugadores/${id_jugador}`); 
  }
  
  getDataSala(id_sala:any): Observable<any> {
    return this.http.get(`${this.apiUrl}/jugadores/salas/${id_sala}`); 
  }

  getCantidadJugadores(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cantidad/jugadores`); 
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuarios/verificar`, data);
  }

  crearSala(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/salas`, data);
  }

  crearUsuario(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuarios`, data);
  }

  getJugadoresConocidos(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/jugadores/conocidos/datos`, data);
  }

  actualizarJugador(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/jugadores/actualizar/datos`, data);
  }

  actualizarOtrosDatosJugador(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/jugadores/actualizar/datos/otros`, data);
  }


}
