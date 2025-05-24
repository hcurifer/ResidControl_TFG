import { Component } from '@angular/core';
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
    MatNativeDateModule
  ],
  templateUrl: './modal-asignar-puesto.component.html',
  styleUrls: ['./modal-asignar-puesto.component.scss']
})
export class ModalAsignarPuestoComponent {
  fecha: Date | null = null;
  turno = '';
  persona = '';
  personas = ['Carlos', 'Lucía', 'Ana'];

  puestos = [
    {
      nombre: 'Enfermero Sala',
      horas: 7,
      tareas: ['Sentar a los residentes - 30min', 'Dar de comer - 1h 30min', 'Repartir medicinas - 1h', 'Limpiar sala - 2h']
    },
    {
      nombre: 'Cuidador Baños',
      horas: 6,
      tareas: ['Ayudar en aseo - 1h', 'Control pañales - 1h', 'Limpieza baños - 2h']
    },
    {
      nombre: 'Supervisión General',
      horas: 8,
      tareas: ['Revisión rutinas - 1h', 'Organización equipos - 2h', 'Reportes diarios - 1h']
    }
  ];

  puestosSeleccionados: string[] = [];

  constructor(private dialogRef: MatDialogRef<ModalAsignarPuestoComponent>) {}

  togglePuesto(nombre: string, checked: boolean) {
    if (checked) {
      this.puestosSeleccionados.push(nombre);
    } else {
      this.puestosSeleccionados = this.puestosSeleccionados.filter(p => p !== nombre);
    }
  }

  formatearTareas(tareas: string[]): string {
    return tareas.join('\n');
  }

  get horasTotales(): number {
    return this.puestos
      .filter(p => this.puestosSeleccionados.includes(p.nombre))
      .reduce((total, p) => total + p.horas, 0);
  }

  get botonDeshabilitado(): boolean {
    return !this.fecha || !this.turno || !this.persona || this.puestosSeleccionados.length === 0 || this.horasTotales > 8;
  }

  enviar() {
    console.log('PUESTOS ASIGNADOS:', {
      fecha: this.fecha,
      turno: this.turno,
      persona: this.persona,
      puestos: this.puestosSeleccionados
    });
    this.dialogRef.close();
  }

  cancelar() {
    this.dialogRef.close();
  }
}
