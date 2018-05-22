import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CattwoComponent } from './cattwo.component';

describe('CattwoComponent', () => {
  let component: CattwoComponent;
  let fixture: ComponentFixture<CattwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CattwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CattwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
