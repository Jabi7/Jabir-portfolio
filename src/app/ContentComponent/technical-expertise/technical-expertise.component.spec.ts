import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalExpertiseComponent } from './technical-expertise.component';

describe('TechnicalExpertiseComponent', () => {
  let component: TechnicalExpertiseComponent;
  let fixture: ComponentFixture<TechnicalExpertiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicalExpertiseComponent]
    });
    fixture = TestBed.createComponent(TechnicalExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
