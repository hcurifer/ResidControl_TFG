import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  template: `
    <div class="login-container">
      <mat-card class="login-card">
        <h2>Iniciar sesión</h2>
        <form>
          <div class="field-label">Introduce tu número de empleado</div>
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Número de empleado</mat-label>
            <input matInput type="number" name="employeeNumber" required>
          </mat-form-field>
          
          <div class="field-label">Introduce tu contraseña de empleado</div>
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Contraseña de empleado</mat-label>
            <input matInput type="password" name="employeePassword" required>
          </mat-form-field>
          
          <button mat-raised-button color="primary" class="full-width" type="submit">
            acceder
          </button>
        </form>
      </mat-card>
    </div>
  `,
  styles: [`
    .login-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f5f5f5;
    }
    .login-card {
      width: 350px;
      padding: 2rem 1.5rem;
      box-sizing: border-box;
    }
    .full-width {
      width: 100%;
      margin-bottom: 1rem;
    }
    h2 {
      text-align: center;
      margin-bottom: 2rem;
    }
    .field-label {
      text-align: center;
      font-size: 1rem;
      margin-bottom: 0.3rem;
      color: #333;
    }
  `]
})
export class LoginComponent {}
