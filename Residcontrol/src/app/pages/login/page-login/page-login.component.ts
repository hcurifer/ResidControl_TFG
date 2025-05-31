import { Router, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { LoginComponent } from '../../../components/login/login.component';
import { LoginAnimacionComponent } from '../../../components/login-animacion/login-animacion/login-animacion.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-login',
  standalone: true,
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.scss',
  imports: [  CommonModule,NavbarComponent, LoginComponent, LoginAnimacionComponent]
})
export class PageLoginComponent {
  
  mostrarAnimacion = false;

  iniciarAnimacion() {
     console.log('[LOGIN PAGE] Mostrando animación...');
    this.mostrarAnimacion = true;
  }
}
