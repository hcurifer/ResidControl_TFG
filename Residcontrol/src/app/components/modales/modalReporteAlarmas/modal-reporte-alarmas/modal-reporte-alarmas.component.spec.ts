import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReporteAlarmasComponent } from './modal-reporte-alarmas.component';

describe('ModalReporteAlarmasComponent', () => {
  let component: ModalReporteAlarmasComponent;
  let fixture: ComponentFixture<ModalReporteAlarmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalReporteAlarmasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalReporteAlarmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
