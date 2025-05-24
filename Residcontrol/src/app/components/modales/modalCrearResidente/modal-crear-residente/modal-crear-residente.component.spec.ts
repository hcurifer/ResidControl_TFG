import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearResidenteComponent } from './modal-crear-residente.component';

describe('ModalCrearResidenteComponent', () => {
  let component: ModalCrearResidenteComponent;
  let fixture: ComponentFixture<ModalCrearResidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCrearResidenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearResidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
