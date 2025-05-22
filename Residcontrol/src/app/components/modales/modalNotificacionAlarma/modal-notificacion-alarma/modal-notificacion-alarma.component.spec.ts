import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNotificacionAlarmaComponent } from './modal-notificacion-alarma.component';

describe('ModalNotificacionAlarmaComponent', () => {
  let component: ModalNotificacionAlarmaComponent;
  let fixture: ComponentFixture<ModalNotificacionAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNotificacionAlarmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNotificacionAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
