import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducteditComponent } from './productedit.component';

describe('ProductEditComponent', () => {
  let component: ProducteditComponent;
  let fixture: ComponentFixture<ProducteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
