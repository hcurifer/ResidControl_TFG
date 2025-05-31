import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiService } from '../../../../services/api.service';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-modal-notificacion-alarma',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule
  ],
  templateUrl: './modal-notificacion-alarma.component.html',
  styleUrls: ['./modal-notificacion-alarma.component.scss']
})
export class ModalNotificacionAlarmaComponent {
  alarmasPendientes: any[] = [];
  alarmaSeleccionada: any = null;
  mensaje: string = '';
  tipoSeleccionado: string = '';

  constructor(
    private dialogRef: MatDialogRef<ModalNotificacionAlarmaComponent>,
    private snackBar: MatSnackBar,
    private apiService: ApiService,
    private auth: AuthService
  ) {
    this.cargarAlarmas();
  }

  cargarAlarmas() {
    this.apiService.getAlarmasPendientesConNombres().subscribe({
      next: (resp) => {
        this.alarmasPendientes = resp;
      },
      error: () => {
        this.snackBar.open('Error al cargar alarmas', 'Cerrar', { duration: 3000 });
      }
    });
  }

  enviarNotificacion() {
    const usuario = this.auth.getUsuario();

    // Datos para FastAPI (correo)
    const dataCorreo = {
      tipo: this.tipoSeleccionado,
      descripcion: this.alarmaSeleccionada.descripcion,
      mensaje: this.mensaje,
      enfermero: this.alarmaSeleccionada.enfermero,
      residente: this.alarmaSeleccionada.residente
    };

    // Datos para registro en BD
    const dataNotificacion = {
      tipo: this.tipoSeleccionado,
      contenido: this.mensaje,
      fecha_envio: new Date().toISOString(),
      id_usuario: usuario.id_usuario,
      id_alarma: this.alarmaSeleccionada.id_alarma
    };

    this.apiService.postCorreoNotificacionAlarma(dataCorreo).subscribe({
      next: () => {
        this.apiService.postNotificacion(dataNotificacion).subscribe({
          next: () => {
            this.snackBar.open('Notificación enviada y registrada', 'Cerrar', { duration: 3000 });
            this.dialogRef.close();
          },
          error: () => {
            this.snackBar.open('Error al guardar notificación', 'Cerrar', { duration: 3000 });
          }
        });
      },
      error: () => {
        this.snackBar.open('Error al enviar el correo', 'Cerrar', { duration: 3000 });
      }
    });
  }

  cancelar() {
    this.dialogRef.close();
  }
}
