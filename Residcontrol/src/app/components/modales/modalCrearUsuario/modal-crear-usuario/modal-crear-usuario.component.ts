import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-modal-crear-usuario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './modal-crear-usuario.component.html',
  styleUrls: ['./modal-crear-usuario.component.scss']
})
export class ModalCrearUsuarioComponent {
  nombre = '';
  apellidos = '';
  numeroEmpresa: number | null = null;
  email = '';
  cargo = '';

  constructor(
    private dialogRef: MatDialogRef<ModalCrearUsuarioComponent>,
    private snackBar: MatSnackBar
  ) {}

  crearUsuario() {
  console.log('USUARIO NUEVO:', {
    nombre: this.nombre,
    apellidos: this.apellidos,
    numeroEmpresa: this.numeroEmpresa,
    email: this.email,
    cargo: this.cargo
  });

  this.snackBar.open('Usuario creado correctamente', 'Cerrar', {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  });

  this.dialogRef.close();
}


  cancelar() {
    this.dialogRef.close();
  }
}
