import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReporteDiaComponent } from './modal-reporte-dia.component';

describe('ModalReporteDiaComponent', () => {
  let component: ModalReporteDiaComponent;
  let fixture: ComponentFixture<ModalReporteDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalReporteDiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalReporteDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
