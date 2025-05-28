import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../../services/api.service';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-cambio-estado-residente',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  templateUrl: './modal-cambio-estado-residente.component.html',
  styleUrl: './modal-cambio-estado-residente.component.scss'
})
export class ModalCambioEstadoResidenteComponent implements OnInit {
  residentes: any[] = [];
  residenteSeleccionado: any = null;

  estadosDisponibles = [
    'en residencia',
    'fuera',
    'ingresado'
  ];

  nuevoEstado: string = '';

  constructor(
     private api: ApiService,
    private dialogRef: MatDialogRef<ModalCambioEstadoResidenteComponent>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.api.getResidentes().subscribe((data) => {
      this.residentes = data;
    });
  }

  cambiarEstado() {
    this.snackBar.open('Estado del residente actualizado', 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });

    this.dialogRef.close();
  }

  cerrar() {
    this.dialogRef.close();
  }
}
