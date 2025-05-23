import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { LoginComponent } from '../../../components/login/login.component';

@Component({
  selector: 'app-page-login',
  standalone: true,
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.scss',
  imports: [SidebarComponent, NavbarComponent, LoginComponent]
})
export class PageLoginComponent {
  
}
