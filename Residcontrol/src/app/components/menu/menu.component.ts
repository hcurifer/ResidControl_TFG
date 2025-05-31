import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('300ms ease-in')])
    ])
  ]
})
export class MenuComponent {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  

  turno = 'mañana';
  fecha = new Date();

  turnos = [
    { value: 'mañana', viewValue: 'mañana' },
    { value: 'tarde', viewValue: 'tarde' },
    { value: 'noche', viewValue: 'noche' }
  ];
    // Output emite la fecha al padre
  @Output() fechaSeleccionada = new EventEmitter<Date>();

  // Se llama cuando el datepicker cambia

  onFechaChange() {
    console.log('📤 Emitiendo fecha desde menu:', this.fecha);
    this.fechaSeleccionada.emit(this.fecha);
  }

}
