import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiService } from '../../../../services/api.service';
import { format } from 'date-fns';
import { DateService } from '../../../../services/date.service';

@Component({
  selector: 'app-modal-asignar-puesto',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule
  ],
  templateUrl: './modal-asignar-puesto.component.html',
  styleUrls: ['./modal-asignar-puesto.component.scss']
})
export class ModalAsignarPuestoComponent implements OnInit {
  fecha: Date | null = null;
  turno = '';
  persona: number | null = null;
  personas: any[] = [];

  puestosSeleccionados: string[] = [];
  ObjectKeys = Object.keys;

  puestos: { [nombre: string]: { descripcion: string; duracion: number }[] } = {
    'Enfermero Sala': [
      { descripcion: 'Sentar a los residentes', duracion: 30 },
      { descripcion: 'Dar de comer', duracion: 90 },
      { descripcion: 'Repartir medicinas', duracion: 60 },
      { descripcion: 'Limpiar sala', duracion: 120 }
    ],
    'Cuidador Baños': [
      { descripcion: 'Ayudar en aseo', duracion: 60 },
      { descripcion: 'Control pañales', duracion: 60 },
      { descripcion: 'Limpieza baños', duracion: 120 }
    ],
    'Supervisión General': [
      { descripcion: 'Revisión rutinas', duracion: 60 },
      { descripcion: 'Organización equipos', duracion: 120 },
      { descripcion: 'Reportes diarios', duracion: 60 }
    ],
    'Servicio de Limpieza': [
      { descripcion: 'Barrer zonas comunes', duracion: 45 },
      { descripcion: 'Desinfección de superficies', duracion: 60 },
      { descripcion: 'Reposición de material', duracion: 30 }
    ]
  };

  constructor(
    private dialogRef: MatDialogRef<ModalAsignarPuestoComponent>,
    private apiService: ApiService,
    private snackBar: MatSnackBar,
    private dateService: DateService
  ) {}

  ngOnInit(): void {
    this.apiService.getUsuarios().subscribe(data => {
      this.personas = data;
    });
  }

  togglePuesto(nombre: string, checked: boolean) {
    if (checked) {
      this.puestosSeleccionados.push(nombre);
    } else {
      this.puestosSeleccionados = this.puestosSeleccionados.filter(p => p !== nombre);
    }
  }

  get horasTotales(): number {
    return this.puestosSeleccionados.reduce((total, nombre) => {
      return total + this.puestos[nombre].reduce((suma, t) => suma + t.duracion / 60, 0);
    }, 0);
  }

  get botonDeshabilitado(): boolean {
    return !this.fecha || !this.turno || !this.persona || this.puestosSeleccionados.length === 0 || this.horasTotales > 8;
  }

  formatearTareas(tareas: { descripcion: string; duracion: number }[]): string {
    return tareas.map(t => `${t.descripcion} - ${this.dateService.formatHorasMinutos(t.duracion)}`).join('\n');
  }

  formatearHoras(tareas: { descripcion: string; duracion: number }[]): string {
    const totalMinutos = tareas.reduce((acum, tarea) => acum + tarea.duracion, 0);
    return this.dateService.formatHorasMinutos(totalMinutos)
  }

 enviar() {
  if (!this.fecha || !this.turno || !this.persona || this.puestosSeleccionados.length === 0) {
    this.snackBar.open('Completa todos los campos', 'Cerrar', { duration: 3000 });
    return;
  }

  const fechaFormateada = format(this.fecha, 'yyyy-MM-dd');
  const tareasAEnviar = [];

  for (const puesto of this.puestosSeleccionados) {
    const tareas = this.puestos[puesto] || [];
    for (const tarea of tareas) {
      tareasAEnviar.push(
        this.apiService.postTarea({
          descripcion: tarea.descripcion,
          estado: 'pendiente',
          fecha: fechaFormateada,
          duracion_minutos: tarea.duracion,
          id_usuario: Number(this.persona),
          id_turno: null // cambiar cuando haya lógica de turnos
        }).toPromise()
      );
    }
  }

  Promise.all(tareasAEnviar)
    .then(() => {
      this.snackBar.open('Tareas asignadas correctamente', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
      this.dialogRef.close();
    })
    .catch(() => {
      this.snackBar.open('Error al asignar tareas', 'Cerrar', { duration: 3000 });
    });
}

  cancelar() {
    this.dialogRef.close();
  }
}
