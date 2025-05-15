import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProgresoComponent } from './page-progreso.component';

describe('PageProgresoComponent', () => {
  let component: PageProgresoComponent;
  let fixture: ComponentFixture<PageProgresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProgresoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
