import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "../../../components/menu/menu.component";
import { ResidenteCardComponent } from '../../../components/tarjetaResidenteCard/tarjeta-residente-card/tarjeta-residente-card.component';
import { UsuarioCardComponent } from '../../../components/tarjetaUsuarioCard/tarjeta-usuario-card/tarjeta-usuario-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { PanelControlComponent } from '../../../components/panelControl/panel-control/panel-control.component';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-page-dashboard',
  standalone: true,
  imports: [CommonModule,
  MenuComponent,
  ResidenteCardComponent,
  UsuarioCardComponent,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  PanelControlComponent,
  MatButtonModule,
  MatDialogModule
  ],
  templateUrl: './page-dashboard.component.html',
  styleUrl: './page-dashboard.component.scss'
})
export class PageDashboardComponent {
 rolUsuario = 'Administrador';

residentes = [
  {
    nombre: 'María',
    apellidos: 'García Pérez',
    habitacion: '101',
    edad: 82,
    estado: 'Dependiente parcial',
    fechaIngreso: '12/03/2024',
    imagen: 'assets/img/user-placeholder.png'
  },
  {
    nombre: 'Luis',
    apellidos: 'Hernández Ruiz',
    habitacion: '102',
    edad: 78,
    estado: 'Autónomo',
    fechaIngreso: '20/07/2023',
    imagen: 'assets/img/user-placeholder.png'
  }
];

residenteSeleccionado = this.residentes[0];

}
