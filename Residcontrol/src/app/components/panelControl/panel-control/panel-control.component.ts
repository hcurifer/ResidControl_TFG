import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ModalCrearUsuarioComponent } from '../../modales/modalCrearUsuario/modal-crear-usuario/modal-crear-usuario.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalCrearResidenteComponent } from '../../modales/modalCrearResidente/modal-crear-residente/modal-crear-residente.component';
import { ModalAsignarTareaComponent } from '../../modales/modalAsignarTareas/modal-asignar-tareas/modal-asignar-tareas.component';
import { ModalAsignarPuestoComponent } from '../../modales/modalAsignarPuesto/modal-asignar-puesto/modal-asignar-puesto.component';
import { ModalPeticionDiaComponent } from '../../modales/modalPeticionDia/modal-peticion-dia/modal-peticion-dia.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ModalEliminarEmpleadoComponent } from '../../modales/modalEliminarEmpleado/modal-eliminar-empleado/modal-eliminar-empleado.component';
import { ModalEliminarResidenteComponent } from '../../modales/modalEliminarResidente/modal-eliminar-residente/modal-eliminar-residente.component';


@Component({
  selector: 'app-panel-control',
  standalone: true,
  imports: [CommonModule,
  MatButtonModule,
  ModalCrearUsuarioComponent,
  MatDialogModule,
  ModalCrearResidenteComponent,
  ModalAsignarTareaComponent,
  ModalAsignarPuestoComponent,
  ModalPeticionDiaComponent,
  ModalEliminarEmpleadoComponent,
  ModalEliminarResidenteComponent
  ],
  templateUrl: './panel-control.component.html',
  styleUrl: './panel-control.component.scss'
})
export class PanelControlComponent {
  @Input() visible = false;
rolUsuario: string = 'Administrador';
  

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

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
  abrirModalAsignarPuesto() {
    this.dialog.open(ModalAsignarPuestoComponent, {
      width: '480px',
      disableClose: false,
      hasBackdrop: true
    });
  }
  abrirModalPeticionDia() {
    this.dialog.open(ModalPeticionDiaComponent, {
      data: {
        to: 'admin@residencia.com'
      },
      disableClose: false,
      hasBackdrop: true,
      width: '420px'
    });
  }
  abrirModalEliminarEmpleado() {
    this.dialog.open(ModalEliminarEmpleadoComponent, {
      width: '480px',
      disableClose: false,
      hasBackdrop: true
    });
  }
  abrirModalEliminarResidente() {
    this.dialog.open(ModalEliminarResidenteComponent, {
      width: '480px',
      disableClose: false,
      hasBackdrop: true
    });
  }





  cerrarSesion() {
  // Aquí puedes añadir lógica para limpiar datos si fuese necesario

  this.snackBar.open('Sesión cerrada correctamente', 'Cerrar', {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  });

  setTimeout(() => {
    this.router.navigate(['/login']);
  }, 1500);
}



}
