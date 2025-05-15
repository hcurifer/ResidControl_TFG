import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary" class="navbar">
      <div class="navbar-logos">
        <img src="assets/img/ResidControl.png" alt="Logo Aplicacion" class="logo" />
        <img src="assets/img/ResidenciaAbrazos.png" alt="Logo Residencia" class="logo" />
      </div>
      <div class="navbar-texts">
        <span class="navbar-text upper">Lorem Ipsum Superior</span>
        <span class="navbar-text lower">Lorem Ipsum Inferior</span>
      </div>
      <span class="spacer"></span>
      <button mat-raised-button color="accent" class="login-btn">
        Login
      </button>
      <div class="mobile-lower-text">
        Lorem Ipsum Inferior
      </div>
    </mat-toolbar>
  `,styles: [`
    .navbar {
      display: flex;
      align-items: center;
      position: fixed;
      top: 0;
      width: 100vw;
      z-index: 1000;
      height: 64px;
      padding: 0 1rem;
    }
    .navbar-logos {
      display: flex;
      align-items: center;
    }
    .logo {
      height: 40px;
      margin-right: 8px;
    }
    .navbar-texts {
      display: flex;
      flex-direction: column;
      margin-left: 16px;
    }
    .navbar-text.upper {
      font-size: 1.1rem;
      font-weight: 600;
    }
    .navbar-text.lower {
      font-size: 0.95rem;
      color: #e0e0e0;
    }
    .spacer {
      flex: 1 1 auto;
    }
    .login-btn {
      min-width: 100px;
      margin-left: 16px;
    }
    .mobile-lower-text {
      display: none;
    }
    @media (max-width: 600px) {
      .navbar {
        flex-wrap: wrap;
        height: auto;
        padding-bottom: 0.5rem;
      }
      .navbar-texts {
        display: none;
      }
      .login-btn {
        order: 2;
      }
      .mobile-lower-text {
        display: block;
        width: 100%;
        text-align: right;
        font-size: 1rem;
        color: #e0e0e0;
        margin-top: 6px;
        margin-bottom: 4px;
        order: 3;
      }
    }
  `]
})
export class NavbarComponent {}