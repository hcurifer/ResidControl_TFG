import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { SidebarComponent } from "../../../components/sidebar/sidebar.component";
import { MenuComponent } from "../../../components/menu/menu.component";
import { ProgressCircleComponent } from '../../../components/ProgressCircle/progreso/progreso.component';

@Component({
  selector: 'app-page-dashboard',
  imports: [CommonModule,NavbarComponent, SidebarComponent, MenuComponent, ProgressCircleComponent],
  templateUrl: './page-dashboard.component.html',
  styleUrl: './page-dashboard.component.scss'
})
export class PageDashboardComponent {
 
}
