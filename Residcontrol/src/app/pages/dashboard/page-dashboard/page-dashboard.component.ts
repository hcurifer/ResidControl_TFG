import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "../../../components/menu/menu.component";
import { ResidenteCardComponent } from '../../../components/tarjetaResidenteCard/tarjeta-residente-card/tarjeta-residente-card.component';
import { UsuarioCardComponent } from '../../../components/tarjetaUsuarioCard/tarjeta-usuario-card/tarjeta-usuario-card.component';


@Component({
  selector: 'app-page-dashboard',
  standalone: true,
  imports: [CommonModule, MenuComponent, ResidenteCardComponent, UsuarioCardComponent],
  templateUrl: './page-dashboard.component.html',
  styleUrl: './page-dashboard.component.scss'
})
export class PageDashboardComponent {
 
}
