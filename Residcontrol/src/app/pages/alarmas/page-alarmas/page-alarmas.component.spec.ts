import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAlarmasComponent } from './page-alarmas.component';

describe('PageAlarmasComponent', () => {
  let component: PageAlarmasComponent;
  let fixture: ComponentFixture<PageAlarmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAlarmasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAlarmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
