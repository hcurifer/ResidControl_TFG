import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-modal-nueva-alarma',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule
  ],
  templateUrl: './modal-nueva-alarma.component.html',
  styleUrl: './modal-nueva-alarma.component.scss'
})
export class ModalNuevaAlarmaComponent implements OnInit {
  descripcion: string = '';
  tipo: string = 'alarma';
  idUsuarioSeleccionado: number | null = null;
  idResidenteSeleccionado: number | null = null;

  listaUsuarios: any[] = [];
  listaResidentes: any[] = [];

  constructor(
     private dialogRef: MatDialogRef<ModalNuevaAlarmaComponent>,
    private snackBar: MatSnackBar,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.apiService.getUsuarios().subscribe({
      next: (usuarios) => {
        this.listaUsuarios = usuarios;
      },
      error: () => {
        this.snackBar.open('Error al cargar usuarios', 'Cerrar', { duration: 3000 });
      }
    });

    this.apiService.getResidentes().subscribe({
      next: (residentes) => {
        this.listaResidentes = residentes;
      },
      error: () => {
        this.snackBar.open('Error al cargar residentes', 'Cerrar', { duration: 3000 });
      }
    });
  }

  crearAlarma() {
    const nuevaAlarma = {
      descripcion: this.descripcion,
      estado: 'pendiente',
      fecha: new Date().toISOString(),
      id_usuario: this.idUsuarioSeleccionado,
      id_residente: this.idResidenteSeleccionado
    };

    this.apiService.crearAlarma(nuevaAlarma).subscribe({
      next: () => {
        this.snackBar.open('Alarma creada correctamente', 'Cerrar', { duration: 3000 });
        this.dialogRef.close();
      },
      error: () => {
        this.snackBar.open('Error al crear la alarma', 'Cerrar', { duration: 3000 });
      }
    });
  }

  cancelar() {
    this.dialogRef.close();
  }
}

