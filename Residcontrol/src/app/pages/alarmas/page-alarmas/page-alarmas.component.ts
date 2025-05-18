import { Component } from '@angular/core';
import { AlertasComponent } from '../../../components/alertas/alerta/alerta.component';





@Component({
  selector: 'app-page-alarmas',
  standalone: true,
  imports: [
    AlertasComponent
  ],
  templateUrl: './page-alarmas.component.html',
  styleUrl: './page-alarmas.component.scss'
})
export class PageAlarmasComponent {

}
