import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaResidenteCardComponent } from './tarjeta-residente-card.component';

describe('TarjetaResidenteCardComponent', () => {
  let component: TarjetaResidenteCardComponent;
  let fixture: ComponentFixture<TarjetaResidenteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaResidenteCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaResidenteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
