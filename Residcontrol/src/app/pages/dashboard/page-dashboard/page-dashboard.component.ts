import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "../../../components/menu/menu.component";

@Component({
  selector: 'app-page-dashboard',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './page-dashboard.component.html',
  styleUrl: './page-dashboard.component.scss'
})
export class PageDashboardComponent {
 
}
