import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAsignarTareasComponent } from './modal-asignar-tareas.component';

describe('ModalAsignarTareasComponent', () => {
  let component: ModalAsignarTareasComponent;
  let fixture: ComponentFixture<ModalAsignarTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAsignarTareasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAsignarTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
