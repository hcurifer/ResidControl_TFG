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
import { AuthService } from '../../../services/auth.service';

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
  rolUsuario = '';
  usuario: any = null;

  constructor(private authService: AuthService) {
    this.usuario = this.authService.getUsuario();
    this.rolUsuario = this.usuario?.rol || '';
  }



}