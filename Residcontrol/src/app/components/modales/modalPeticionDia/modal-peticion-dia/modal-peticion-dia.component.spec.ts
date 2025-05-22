import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPeticionDiaComponent } from './modal-peticion-dia.component';

describe('ModalPeticionDiaComponent', () => {
  let component: ModalPeticionDiaComponent;
  let fixture: ComponentFixture<ModalPeticionDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPeticionDiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPeticionDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
