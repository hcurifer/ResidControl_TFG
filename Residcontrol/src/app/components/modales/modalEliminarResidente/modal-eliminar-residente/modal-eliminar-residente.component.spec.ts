import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEliminarResidenteComponent } from './modal-eliminar-residente.component';

describe('ModalEliminarResidenteComponent', () => {
  let component: ModalEliminarResidenteComponent;
  let fixture: ComponentFixture<ModalEliminarResidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEliminarResidenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEliminarResidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
