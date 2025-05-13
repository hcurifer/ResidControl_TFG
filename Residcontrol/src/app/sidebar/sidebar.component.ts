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
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #sidenav
        [mode]="isMobile ? 'over' : 'side'"
        [opened]="!isMobile || sidenavOpened"
        (closedStart)="sidenavOpened = false"
        class="sidenav"
      >
        <mat-nav-list>
          <button mat-list-item>
            <mat-icon>home</mat-icon> Botón 1
          </button>
          <button mat-list-item>
            <mat-icon>star</mat-icon> Botón 2
          </button>
          <button mat-list-item>
            <mat-icon>settings</mat-icon> Botón 3
          </button>
          <button mat-list-item>
            <mat-icon>info</mat-icon> Botón 4
          </button>
          <button mat-list-item>
            <mat-icon>help</mat-icon> Botón 5
          </button>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <button
          mat-icon-button
          class="menu-btn"
          *ngIf="isMobile"
          (click)="openSidenav(sidenav)"
          aria-label="Abrir menú"
        >
          <mat-icon>menu</mat-icon>
        </button>
        <ng-content></ng-content>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    .sidenav-container {
      height: calc(100vh - 64px);
      position: fixed;
      top: 64px;
      left: 0;
      width: 250px;
      z-index: 999;
      background: #fff;
    }
    .sidenav {
      width: 250px;
      background: #232323;
      color: #fff;
    }
    .menu-btn {
      display: none;
      position: fixed;
      top: 72px;
      left: 16px;
      z-index: 1100;
    }
    @media (max-width: 600px) {
      .sidenav-container {
        width: 100vw;
        position: static;
        height: auto;
      }
      .sidenav {
        width: 220px;
      }
      .menu-btn {
        display: block;
      }
    }
  `]
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
