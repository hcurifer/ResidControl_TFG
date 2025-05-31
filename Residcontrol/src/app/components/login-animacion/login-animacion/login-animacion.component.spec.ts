import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAnimacionComponent } from './login-animacion.component';

describe('LoginAnimacionComponent', () => {
  let component: LoginAnimacionComponent;
  let fixture: ComponentFixture<LoginAnimacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginAnimacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAnimacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
