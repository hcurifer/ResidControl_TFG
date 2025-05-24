import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-residente-card',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatOptionModule],
  templateUrl: './tarjeta-residente-card.component.html',
  styleUrls: ['./tarjeta-residente-card.component.scss']
})
export class ResidenteCardComponent {
@Input() residentes: any[] = [];
@Input() residenteSeleccionado: any;

cambiarResidente(nuevo: any) {
  this.residenteSeleccionado = nuevo;
}
}
