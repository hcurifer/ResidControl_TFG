import { Component } from '@angular/core';
import { AlertasComponent } from '../../../components/alertas/alerta/alerta.component';
import { MenuComponent } from '../../../components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ProgressCircleComponent } from '../../../components/ProgressCircle/progreso/progreso.component';

@Component({
  selector: 'app-page-alarmas',
  standalone: true,
  imports: [CommonModule, MenuComponent, AlertasComponent, MatButtonModule, ProgressCircleComponent],
  templateUrl: './page-alarmas.component.html',
  styleUrl: './page-alarmas.component.scss'
})
export class PageAlarmasComponent {
  totalAlertas = 8; 
  completadas = 5;  
  get porcentaje(): number {
    return Math.round((this.completadas / this.totalAlertas) * 100);
  }
}
