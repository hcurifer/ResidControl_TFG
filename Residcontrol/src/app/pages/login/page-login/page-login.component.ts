import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { LoginComponent } from '../../../components/login/login.component';
import { MenuComponent } from "../../../components/menu/menu.component";

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, LoginComponent, MenuComponent]
})
export class PageLoginComponent {
  
}
