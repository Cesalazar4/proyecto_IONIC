import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api';  //se cambia a la Ip del dispositivo by:Jose

  constructor(private http: HttpClient) {}

  getJugadores(id_jugador:any): Observable<any> {
    return this.http.get(`${this.apiUrl}/jugadores/${id_jugador}`);                   // ✔REALIZADO
  }
  
  getDataSala(id_sala:any): Observable<any> {
    return this.http.get(`${this.apiUrl}/jugadores/salas/${id_sala}`);                 // ✔REALIZADO
  }

  getCantidadJugadores(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cantidad/jugadores`);                         // ✔REALIZADO
  }

  login(data: any): Observable<any> {
    console.log(this.apiUrl + '/usuarios')
    return this.http.post(`${this.apiUrl}/usuarios/verificar`, data);                  // ✔REALIZADO
  }

  crearSala(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/salas`, data);                               // ✔REALIZADO
  }

  crearUsuario(data: any): Observable<any> {
    console.log(this.apiUrl + '/usuarios')
    return this.http.post(`${this.apiUrl}/usuarios`, data);                            // ✔REALIZADO
    
  }

  getJugadoresConocidos(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/jugadores/conocidos/datos`, data);          // ✔REALIZADO
  }

  actualizarJugador(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/jugadores/actualizar/datos`, data);          // ✔REALIZADO
  }

  actualizarOtrosDatosJugador(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/jugadores/actualizar/datos/otros`, data);   // ✔REALIZADO
  }


}
