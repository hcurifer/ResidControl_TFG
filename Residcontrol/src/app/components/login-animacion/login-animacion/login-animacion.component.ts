import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-login-animacion',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule],
  templateUrl: './login-animacion.component.html',
  styleUrl: './login-animacion.component.scss',
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%) scale(0.5)', opacity: 0 }),
        animate('800ms ease-out', style({ transform: 'translateX(0) scale(1)', opacity: 1 }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%) scale(0.5)', opacity: 0 }),
        animate('800ms ease-out', style({ transform: 'translateX(0) scale(1)', opacity: 1 }))
      ])
    ]),
    trigger('fadeInText', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms 800ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class LoginAnimacionComponent {
  constructor(private router: Router) {}

  ngOnInit() {
  console.log('[ANIMACIÓN] Iniciada');
  setTimeout(() => {
    console.log('[ANIMACIÓN] Redirigiendo a /dashboard...');
    this.router.navigate(['/dashboard']);
  }, 4000);
}
}
