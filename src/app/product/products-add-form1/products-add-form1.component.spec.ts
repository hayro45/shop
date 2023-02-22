import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAddForm1Component } from './products-add-form1.component';

describe('ProductsAddForm1Component', () => {
  let component: ProductsAddForm1Component;
  let fixture: ComponentFixture<ProductsAddForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsAddForm1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsAddForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
