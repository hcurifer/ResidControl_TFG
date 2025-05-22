import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

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
    FormsModule
  ],
  templateUrl: './modal-peticion-dia.component.html',
  styleUrls: ['./modal-peticion-dia.component.scss']
})
export class ModalPeticionDiaComponent {
  fechaSeleccionada: Date | null = null;

  constructor(
    public dialogRef: MatDialogRef<ModalPeticionDiaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  cerrar() {
    this.dialogRef.close();
  }

  enviar() {
    const mensaje = `Solicitud de día para: ${this.fechaSeleccionada?.toLocaleDateString()}`;
    console.log('ENVIAR CORREO:', {
      to: this.data.to,
      subject: 'Petición de día',
      body: mensaje
    });
    this.dialogRef.close();
  }
}
