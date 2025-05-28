import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-residente-card',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatOptionModule],
  templateUrl: './tarjeta-residente-card.component.html',
  styleUrls: ['./tarjeta-residente-card.component.scss']
})
export class ResidenteCardComponent implements OnInit {
  residentes: any[] = [];
  residenteSeleccionado: any = null;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getResidentes().subscribe((data) => {
      this.residentes = data;
      if (data.length > 0) {
        this.residenteSeleccionado = data[0]; // primero por defecto
      }
    });
  }

  seleccionarResidente(id: number) {
    const encontrado = this.residentes.find(r => r.id_residente === id);
    if (encontrado) {
      this.residenteSeleccionado = encontrado;
    }
  }
}
