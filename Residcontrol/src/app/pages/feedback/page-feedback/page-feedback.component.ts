import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../../components/menu/menu.component';
import { ProgressCircleComponent } from '../../../components/ProgressCircle/progreso/progreso.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-page-feedback',
  standalone: true,
  imports: [
    CommonModule, MenuComponent, ProgressCircleComponent, MatButtonModule],
  templateUrl: './page-feedback.component.html',
  styleUrl: './page-feedback.component.scss'
})
export class PageFeedbackComponent {
  tareasPendientes = [30, 50, 70]; // Mañana, Tarde, Noche
  tareasCompletadas = [60, 40, 20];
  cargaTrabajo = 65;
}
