import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsixComponent } from './catsix.component';

describe('CatsixComponent', () => {
  let component: CatsixComponent;
  let fixture: ComponentFixture<CatsixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatsixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
