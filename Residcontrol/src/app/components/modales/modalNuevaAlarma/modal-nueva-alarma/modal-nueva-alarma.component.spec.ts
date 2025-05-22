import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevaAlarmaComponent } from './modal-nueva-alarma.component';

describe('ModalNuevaAlarmaComponent', () => {
  let component: ModalNuevaAlarmaComponent;
  let fixture: ComponentFixture<ModalNuevaAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNuevaAlarmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNuevaAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
