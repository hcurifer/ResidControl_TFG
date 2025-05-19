import { Component } from '@angular/core';
import { AlertasComponent } from '../../../components/alertas/alerta/alerta.component';
import { MenuComponent } from '../../../components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-page-alarmas',
  standalone: true,
  imports: [CommonModule, MenuComponent, AlertasComponent, MatButtonModule],
  templateUrl: './page-alarmas.component.html',
  styleUrl: './page-alarmas.component.scss'
})
export class PageAlarmasComponent {
  totalAlertas: number = 3; 
}
