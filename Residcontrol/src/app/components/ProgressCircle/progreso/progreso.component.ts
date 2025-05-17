import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progreso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.scss']
})
export class ProgressCircleComponent {
  @Input() current = 0;
  @Input() max = 100;
  @Input() size = 100;
  @Input() label = ''; // nombre del indicador

  radius = 45;
  stroke = 10;

  // Porcentaje calculado (0-100)
  percentage = computed(() => Math.min(Math.max(this.current / this.max, 0), 1) * 100);

  // Color según porcentaje
  color = computed(() => {
    const p = this.percentage();
    if (p <= 40) return 'red';
    if (p <= 70) return 'yellow';
    return 'green';
  });

  get circumference(): number {
    return 2 * Math.PI * this.radius;
  }

  get dashOffset(): number {
    return this.circumference * (1 - this.percentage() / 100);
  }
}
