import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../../components/menu/menu.component';
import { ProgressCircleComponent } from '../../../components/ProgressCircle/progreso/progreso.component';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-page-progreso',
  standalone: true,
  imports: [CommonModule, MenuComponent, ProgressCircleComponent, MatCardModule],
  templateUrl: './page-progreso.component.html',
  styleUrl: './page-progreso.component.scss'
})
export class PageProgresoComponent {
  userFullName = '';
  cargaPorcentaje = 0;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userFullName = this.authService.getUserFullName();

    // Simulación de carga de trabajo: 3 horas asignadas
    const horasAsignadas = 7;
    const jornadaTotal = 8 - 0.5;
    this.cargaPorcentaje = Math.round((horasAsignadas / jornadaTotal) * 100);
  }
  getCargaColor(): string {
  const p = this.cargaPorcentaje;
  if (p <= 40) return 'green';
  if (p <= 70) return '#fb7a02'; // naranja
  return 'red';
}
}