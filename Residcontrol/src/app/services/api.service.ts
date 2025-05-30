import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000'; // Cambiar si levanto en servidor, direcion actual local

  constructor(private http: HttpClient) {}

  // Usuarios
  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/usuarios/`);
  }
  deleteUsuario(id: number) {
    return this.http.delete(`${this.baseUrl}/usuarios/${id}`);
  }
  crearUsuario(usuario: {
    nombre: string;
    apellidos: string;
    numero_empresa: string;
    email: string;
    contrasenia: string;
    rol: string;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuarios/`, usuario);
  }


  // Residentes
  getResidentes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/residentes/`);
  }
  putEstadoResidente(id: number, nuevoEstado: string) {
    return this.http.put(`${this.baseUrl}/residentes/${id}/estado`, null, {
      params: {
        nuevo_estado: nuevoEstado
      }
    });
  }
  postResidente(residente: any) {
    return this.http.post(`${this.baseUrl}/residentes/`, residente);
  }
  deleteResidente(id: number) {
    return this.http.delete(`${this.baseUrl}/residentes/${id}`);
  }





}
