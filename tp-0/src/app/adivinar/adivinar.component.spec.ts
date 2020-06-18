import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinarComponent } from './adivinar.component';

describe('AdivinarComponent', () => {
  let component: AdivinarComponent;
  let fixture: ComponentFixture<AdivinarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdivinarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
