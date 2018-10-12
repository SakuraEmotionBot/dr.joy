import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoproComponent } from './gopro.component';

describe('GoproComponent', () => {
  let component: GoproComponent;
  let fixture: ComponentFixture<GoproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
