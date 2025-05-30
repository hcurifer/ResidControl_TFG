import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class LoginComponent {
  numeroEmpresa: string = '';
  password: string = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  iniciarSesion() {
    if (!this.numeroEmpresa.startsWith('EMP')) {
      this.snackBar.open('El número debe comenzar con "EMP"', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
      return;
    }

    this.auth.login(this.numeroEmpresa, this.password).subscribe({
      next: res => {
        this.auth.guardarSesion(res.token, {
          nombre: res.nombre,
          apellidos: res.apellidos,
          rol: res.rol
        });

        this.snackBar.open(`Bienvenido ${res.nombre}`, 'Cerrar', {
          duration: 2500,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });

        this.router.navigate(['/dashboard']);
      },
      error: err => {
        this.snackBar.open(err.message, 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    });
  }
}

