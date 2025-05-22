import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReporteTareasComponent } from './modal-reporte-tareas.component';

describe('ModalReporteTareasComponent', () => {
  let component: ModalReporteTareasComponent;
  let fixture: ComponentFixture<ModalReporteTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalReporteTareasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalReporteTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
