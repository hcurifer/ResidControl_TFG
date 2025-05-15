import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { SidebarComponent } from "../../../components/sidebar/sidebar.component";
import { MenuComponent } from "../../../components/menu/menu.component";

@Component({
  selector: 'app-page-dashboard',
  imports: [NavbarComponent, SidebarComponent, MenuComponent],
  templateUrl: './page-dashboard.component.html',
  styleUrl: './page-dashboard.component.scss'
})
export class PageDashboardComponent {

}
