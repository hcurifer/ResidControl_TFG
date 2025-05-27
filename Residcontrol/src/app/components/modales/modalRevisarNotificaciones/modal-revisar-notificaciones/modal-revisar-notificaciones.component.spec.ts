import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRevisarNotificacionesComponent } from './modal-revisar-notificaciones.component';

describe('ModalRevisarNotificacionesComponent', () => {
  let component: ModalRevisarNotificacionesComponent;
  let fixture: ComponentFixture<ModalRevisarNotificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalRevisarNotificacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRevisarNotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
