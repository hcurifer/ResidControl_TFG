import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';


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
    CommonModule,
  ],
  templateUrl: './alerta.component.html',
  styleUrl: './alerta.component.scss'
})

export class AlertasComponent implements OnInit {
 /* alertas: Alerta[] = [];

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
  }*/

    alertas: Alerta[] = [];

  ngOnInit() {
    this.cargarAlertasMock();
  }

  cargarAlertasMock() {
    setTimeout(() => {
      this.alertas = [
        {
          id: 1,
          descripcion: 'Caída en habitación 203',
          tiempo: 'Hace 5 minutos',
          residente: 'Carmen García',
          enfermero: 'Marta Ruiz'
        },
        {
          id: 2,
          descripcion: 'Petición ayuda comedor',
          tiempo: 'Hace 12 minutos',
          residente: 'Luis Pérez',
          enfermero: 'Javier Martín'
        },
        {
          id: 3,
          descripcion: 'Aviso de urgencia médica',
          tiempo: 'Hace 1 minuto',
          residente: 'Sofía López',
          enfermero: 'Laura Fernández'
        }
      ];
    }, 500); // simula un retardo de 500ms
  }

  marcarComoHecha(id: number) {
    this.alertas = this.alertas.filter(alerta => alerta.id !== id);
  }
}
