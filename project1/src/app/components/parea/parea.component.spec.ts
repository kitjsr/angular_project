import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PareaComponent } from './parea.component';

describe('PareaComponent', () => {
  let component: PareaComponent;
  let fixture: ComponentFixture<PareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
