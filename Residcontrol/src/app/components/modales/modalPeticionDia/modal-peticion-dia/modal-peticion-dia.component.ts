import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiService } from '../../../../services/api.service';


@Component({
  selector: 'app-modal-peticion-dia',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule
  ],
  templateUrl: './modal-peticion-dia.component.html',
  styleUrls: ['./modal-peticion-dia.component.scss']
})
export class ModalPeticionDiaComponent {
  fechaSeleccionada: Date | null = null;

  constructor(
    public dialogRef: MatDialogRef<ModalPeticionDiaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar,
    private apiService: ApiService
    ) {}


  cerrar() {
    this.dialogRef.close();
  }

  enviar() {
    const fecha = this.fechaSeleccionada!;
    const fechaFormateada = `${fecha.getFullYear()}-${(fecha.getMonth() + 1).toString().padStart(2, '0')}-${fecha.getDate().toString().padStart(2, '0')}`;
    const nombreCompleto = this.data.nombre?.trim().split(' '); 
    const nombre = nombreCompleto?.[0] ?? '';
    const apellidos = nombreCompleto?.slice(1).join(' ') ?? '';
    const emisor = `${nombre}.${apellidos}@residenciaAbracitos.com`;


    this.apiService.postPeticionDia({
      fecha: fechaFormateada,
      nombre,
      apellidos,
      emisor: 'ResidControl@workmail.com'
    }).subscribe({
      next: () => {
        this.snackBar.open('Petición enviada correctamente', 'Cerrar', { duration: 3000 });
        this.dialogRef.close();
      },
      error: () => {
        this.snackBar.open('Error al enviar petición', 'Cerrar', { duration: 3000 });
      }
    });
  }
}