import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiService } from '../../../services/api.service';
import { Observable } from 'rxjs';

interface Alerta {
  id_alarma: number;
  descripcion: string;
  estado: string;
  fecha: string;
  enfermero: string;
  residente: string;
  tiempo?: string;
  nueva?: boolean;
}

@Component({
  selector: 'app-alerta',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSnackBarModule
  ],
  templateUrl: './alerta.component.html',
  styleUrl: './alerta.component.scss'
})
export class AlertasComponent implements OnInit {
  alertas: Alerta[] = [];

  constructor(
    private api: ApiService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.obtenerAlertas();
    setInterval(() => this.obtenerAlertas(), 155000); //tiempo de 5s para refressh 5000
  }

 obtenerAlertas(): void {
  this.api.getAlarmasPendientesConNombres().subscribe({
    next: (data: any[]) => {
      const nuevas = data.filter(a =>
        !this.alertas.some(b => b.id_alarma === a.id_alarma)
      );

      // Si hay nuevas alertas, mostrar snackbar
      if (nuevas.length > 0) {
        this.snackBar.open('🚨 Nueva(s) alerta(s) recibida(s)', 'Cerrar', {
          duration: 4000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }

      this.alertas = data
        .map(a => ({
          ...a,
          tiempo: this.calcularTiempo(new Date(a.fecha))
        }))
        .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
    },
    error: err => {
      console.error('Error al obtener alarmas:', err);
    }
  });
}


  calcularTiempo(fecha: Date): string {
  const ahora = new Date();
  const diferenciaMs = ahora.getTime() - fecha.getTime();

  const minutos = Math.floor(diferenciaMs / 60000);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const semanas = Math.floor(dias / 7);

  if (minutos < 1) return 'Hace unos segundos';
  if (minutos < 60) return `Hace ${minutos} minuto${minutos > 1 ? 's' : ''}`;
  if (horas < 24) return `Hace ${horas} hora${horas > 1 ? 's' : ''}`;
  if (dias === 1) return 'Ayer';
  if (dias < 7) return `Hace ${dias} día${dias > 1 ? 's' : ''}`;
  if (semanas === 1) return 'Hace una semana';
  return `Hace ${semanas} semanas`;
}


  marcarComoHecha(id: number): void {
    this.api.putEstadoAlarma(id, 'completada').subscribe({
      next: () => {
        this.snackBar.open('✅ Alarma completada', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
        this.obtenerAlertas();
      },
      error: err => {
        console.error('Error al marcar como hecha:', err);
        this.snackBar.open('❌ Error al actualizar la alarma', 'Cerrar', {
          duration: 3000
        });
      }
    });
  }
}
