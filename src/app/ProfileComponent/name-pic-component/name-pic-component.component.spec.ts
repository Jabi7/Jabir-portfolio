import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamePicComponentComponent } from './name-pic-component.component';

describe('NamePicComponentComponent', () => {
  let component: NamePicComponentComponent;
  let fixture: ComponentFixture<NamePicComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NamePicComponentComponent]
    });
    fixture = TestBed.createComponent(NamePicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
