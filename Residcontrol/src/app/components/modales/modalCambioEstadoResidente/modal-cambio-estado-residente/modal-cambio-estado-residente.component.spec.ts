import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCambioEstadoResidenteComponent } from './modal-cambio-estado-residente.component';

describe('ModalCambioEstadoResidenteComponent', () => {
  let component: ModalCambioEstadoResidenteComponent;
  let fixture: ComponentFixture<ModalCambioEstadoResidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCambioEstadoResidenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCambioEstadoResidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
