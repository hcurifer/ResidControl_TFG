import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRevisarFeedbackComponent } from './modal-revisar-feedback.component';

describe('ModalRevisarFeedbackComponent', () => {
  let component: ModalRevisarFeedbackComponent;
  let fixture: ComponentFixture<ModalRevisarFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalRevisarFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRevisarFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
