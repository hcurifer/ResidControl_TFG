import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-modal-eliminar-residente',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './modal-eliminar-residente.component.html',
  styleUrl: './modal-eliminar-residente.component.scss'
})
export class ModalEliminarResidenteComponent implements OnInit {
  residentes: any[] = [];
  residenteSeleccionado: any = null;

  constructor(
    private api: ApiService,
    private dialogRef: MatDialogRef<ModalEliminarResidenteComponent>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.api.getResidentes().subscribe((data) => {
      this.residentes = data;
    });
  }

  eliminar() {
    if (!this.residenteSeleccionado?.id_residente) return;

    this.api.deleteResidente(this.residenteSeleccionado.id_residente).subscribe({
      next: () => {
        this.snackBar.open('Residente eliminado correctamente', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
        this.dialogRef.close();
      },
      error: () => {
        this.snackBar.open('Error al eliminar el residente', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    });
  }

  cerrar() {
    this.dialogRef.close();
  }
}
