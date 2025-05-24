import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ModalCrearUsuarioComponent } from '../../modales/modalCrearUsuario/modal-crear-usuario/modal-crear-usuario.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalCrearResidenteComponent } from '../../modales/modalCrearResidente/modal-crear-residente/modal-crear-residente.component';
import { ModalAsignarTareaComponent } from '../../modales/modalAsignarTareas/modal-asignar-tareas/modal-asignar-tareas.component';

@Component({
  selector: 'app-panel-control',
  standalone: true,
  imports: [CommonModule,
  MatButtonModule,
  ModalCrearUsuarioComponent,
  MatDialogModule,
  ModalCrearResidenteComponent,
  ModalAsignarTareaComponent
  ],
  templateUrl: './panel-control.component.html',
  styleUrl: './panel-control.component.scss'
})
export class PanelControlComponent {
  @Input() visible = false;

  constructor(private dialog: MatDialog) {}

  abrirModalCrearUsuario() {
    this.dialog.open(ModalCrearUsuarioComponent, {
      disableClose: false,
      hasBackdrop: true,
      width: '450px'
    });
  }

  abrirModalCrearResidente() {
    this.dialog.open(ModalCrearResidenteComponent, {
      width: '400px',
      disableClose: false,
      hasBackdrop: true
    });
  }

  abrirModalAsignarTarea() {
    this.dialog.open(ModalAsignarTareaComponent, {
      width: '480px',
      disableClose: false,
      hasBackdrop: true
    });
  }

}
