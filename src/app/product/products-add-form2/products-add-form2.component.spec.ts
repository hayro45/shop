import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAddForm2Component } from './products-add-form2.component';

describe('ProductsAddForm2Component', () => {
  let component: ProductsAddForm2Component;
  let fixture: ComponentFixture<ProductsAddForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsAddForm2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsAddForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
