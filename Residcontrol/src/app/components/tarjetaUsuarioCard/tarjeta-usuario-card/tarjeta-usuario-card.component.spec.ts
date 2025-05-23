import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaUsuarioCardComponent } from './tarjeta-usuario-card.component';

describe('TarjetaUsuarioCardComponent', () => {
  let component: TarjetaUsuarioCardComponent;
  let fixture: ComponentFixture<TarjetaUsuarioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaUsuarioCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaUsuarioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
