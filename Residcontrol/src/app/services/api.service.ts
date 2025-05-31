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

  //Alarmas
  crearAlarma(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/alarmas/`, data);
  }
  getAlarmas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/alarmas/`);
  }
  putEstadoAlarma(id: number, nuevoEstado: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/alarmas/${id}/estado`, null, {
      params: { nuevo_estado: nuevoEstado }
    });
  }
  getAlarmasPorEstado(estado: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/alarmas/estado/${estado}`);
  }
  getAlarmasPendientesConNombres(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/alarmas/estado/pendiente/con-nombres`);
  }
  deleteAlarma(id: number) {
    return this.http.delete(`${this.baseUrl}/alarmas/${id}`);
  }
  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${endpoint}`);
  }
  postNotificacion(notificacion: {
    tipo: string;
    contenido: string;
    fecha_envio: string;
    id_usuario: number;
    id_alarma: number;
  }) {
    return this.http.post(`${this.baseUrl}/notificaciones/`, notificacion);
  }


  // Envio de correo electrónico

  postPeticionDia(data: {
  fecha: string;
  nombre: string;
  apellidos: string;
  emisor: string;
  }) {
    return this.http.post(`${this.baseUrl}/correo/peticion-dia`, data);
  }
  // Envio de correo de notificación de alarma
  postCorreoNotificacionAlarma(data: {
    descripcion: string;
    mensaje: string;
    enfermero: string;
    residente: string;
  }) {
    return this.http.post(`${this.baseUrl}/correo/notificar-alarma`, data);
  }




  // Tareas

  getTareasFiltradas(id_usuario: number, fecha: string, id_turno?: number, estado?: string) {
    const params: any = { id_usuario, fecha };
    if (id_turno !== undefined && id_turno !== null) {
      params.id_turno = id_turno;
    }
    if (estado) {
      params.estado = estado;
    }

    return this.http.get<any[]>(`${this.baseUrl}/tareas/filtrar`, { params });
  }


  putEstadoTarea(id_tarea: number, nuevoEstado: string) {
    return this.http.put(`${this.baseUrl}/tareas/${id_tarea}/estado`, null, {
      params: { nuevo_estado: nuevoEstado }
    });
  }
  postTarea(tarea: any) {
    return this.http.post(`${this.baseUrl}/tareas/`, tarea);
  }
  getTareasPendientesPorUsuarioYFecha(id_usuario: number, fecha: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/tareas/filtrar`, {
      params: { id_usuario, fecha }
    });
  }
  








}
