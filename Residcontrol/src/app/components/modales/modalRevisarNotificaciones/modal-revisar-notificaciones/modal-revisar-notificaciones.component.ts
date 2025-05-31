import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../../../../services/api.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-revisar-notificaciones',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './modal-revisar-notificaciones.component.html',
  styleUrl: './modal-revisar-notificaciones.component.scss'
})
export class ModalRevisarNotificacionesComponent implements OnInit {
  notificaciones: any[] = [];

  constructor(
    private dialogRef: MatDialogRef<ModalRevisarNotificacionesComponent>,
    private apiService: ApiService,
    private snackBar: MatSnackBar
  ) {}

ngOnInit(): void {
  this.apiService.getNotificacionesConNombres().subscribe({
    next: (resp) => {
      this.notificaciones = resp;
      console.log(resp)
    },
    error: () => {
      this.snackBar.open('Error al cargar notificaciones', 'Cerrar', { duration: 3000 });
    }
  });
}

  cerrar() {
    this.dialogRef.close();
  }
}
