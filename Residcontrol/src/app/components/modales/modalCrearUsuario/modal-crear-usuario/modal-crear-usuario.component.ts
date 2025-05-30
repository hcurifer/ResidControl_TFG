import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { ApiService } from '../../../../services/api.service'; 

@Component({
  selector: 'app-modal-crear-usuario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './modal-crear-usuario.component.html',
  styleUrls: ['./modal-crear-usuario.component.scss']
})
export class ModalCrearUsuarioComponent {
  nombre = '';
  apellidos = '';
  edad: number | null = null;
  numeroEmpresa = '';
  email = '';
  contrasenia = '';
  rol = '';

  constructor(
    private dialogRef: MatDialogRef<ModalCrearUsuarioComponent>,
    private snackBar: MatSnackBar,
    private apiService: ApiService
  ) {}

  get numeroEmpresaValida(): boolean {
    return /^EMP\d{5,}$/.test(this.numeroEmpresa);
  }

  crearUsuario() {
    if (!this.numeroEmpresaValida) {
      this.snackBar.open('Número de empresa inválido. Debe empezar por EMP y tener al menos 5 dígitos.', 'Cerrar', {
        duration: 3000
      });
      return;
    }

    const nuevoUsuario = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      edad: this.edad,
      numero_empresa: this.numeroEmpresa,
      email: this.email,
      contrasenia: this.contrasenia,
      rol: this.rol
    };

    this.apiService.crearUsuario(nuevoUsuario).subscribe({
      next: () => {
        this.snackBar.open('Usuario creado correctamente', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
        this.dialogRef.close();
      },
      error: () => {
        this.snackBar.open('Error al crear usuario', 'Cerrar', { duration: 3000 });
      }
    });
  }

  cancelar() {
    this.dialogRef.close();
  }
}
