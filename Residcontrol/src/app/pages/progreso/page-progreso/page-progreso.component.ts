import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../../components/menu/menu.component';
import { ProgressCircleComponent } from '../../../components/ProgressCircle/progreso/progreso.component';
import { MatCardModule } from '@angular/material/card';
//import { AuthService } from 'src/app/services/auth.service';

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
    const horasAsignadas = 3;
    const jornadaTotal = 8 - 0.5;
    this.cargaPorcentaje = Math.round((horasAsignadas / jornadaTotal) * 100);
  }
}