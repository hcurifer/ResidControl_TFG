import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatToolbarModule, MatButtonModule],
   templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  isLoggedIn: boolean = false;
  userFullName: string = '';


  ngOnInit(): void {
  this.isLoggedIn = this.authService.isLoggedIn();

  const user = this.authService.getUsuario(); 
    if (user) {
      this.userFullName = `${user.nombre} ${user.apellidos}`;
    }
  }

  constructor(private router: Router, private authService: AuthService) {}

  handleLoginLogout() {
    if (this.isLoggedIn) {
      this.authService.logout();
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}