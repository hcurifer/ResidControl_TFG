import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-residente-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './tarjeta-residente-card.component.html',
  styleUrl: './tarjeta-residente-card.component.scss'
})
export class ResidenteCardComponent {
  filtro = '';
  residenteSeleccionado: any = null;

  residentes = [
    { nombre: 'María', apellidos: 'García Pérez', habitacion: '101', imagen: 'assets/img/residente-placeholder.png' },
    { nombre: 'Luis', apellidos: 'Pérez Gómez', habitacion: '204', imagen: 'assets/img/residente-placeholder.png' },
    { nombre: 'Ana', apellidos: 'López Díaz', habitacion: '305', imagen: 'assets/img/residente-placeholder.png' }
  ];

  get residentesFiltrados() {
    return this.residentes.filter(r =>
      `${r.nombre} ${r.apellidos}`.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
}
