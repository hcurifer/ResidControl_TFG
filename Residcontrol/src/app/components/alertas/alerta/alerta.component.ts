import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';


interface Alerta {
  id: number;
  descripcion: string;
  tiempo: string;
  residente: string;
  enfermero: string;
}


@Component({
  selector: 'app-alerta',
  standalone: true,
  imports: [
    MatCheckboxModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './alerta.component.html',
  styleUrl: './alerta.component.scss'
})

export class AlertasComponent implements OnInit {
  alertas: Alerta[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerAlertas();
  }

  obtenerAlertas() {
    this.http.get<Alerta[]>('/api/alertas').subscribe(data => {
      this.alertas = data;
    });
  }

  marcarComoHecha(id: number) {
    this.http.post(`/api/alertas/${id}/hecha`, {}).subscribe(() => {
      this.alertas = this.alertas.filter(alerta => alerta.id !== id);
    });
  }
}
