import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtimeComponent } from './atime.component';

describe('AtimeComponent', () => {
  let component: AtimeComponent;
  let fixture: ComponentFixture<AtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
