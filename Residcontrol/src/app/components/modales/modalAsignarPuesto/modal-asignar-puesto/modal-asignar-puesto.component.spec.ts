import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAsignarPuestoComponent } from './modal-asignar-puesto.component';

describe('ModalAsignarPuestoComponent', () => {
  let component: ModalAsignarPuestoComponent;
  let fixture: ComponentFixture<ModalAsignarPuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAsignarPuestoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAsignarPuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
