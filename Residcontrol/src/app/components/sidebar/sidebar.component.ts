import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'    
})


export class SidebarComponent {
  isMobile = window.innerWidth <= 600;
  sidenavOpened = false;

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 600;
    if (!this.isMobile) {
      this.sidenavOpened = false;
    }
  }

  openSidenav(sidenav: any) {
    this.sidenavOpened = true;
    sidenav.open();
  }
}
