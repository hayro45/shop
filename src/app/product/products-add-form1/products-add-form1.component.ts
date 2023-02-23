import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

import { Product } from '../product';

@Component({
  selector: 'app-products-add-form1',
  templateUrl: './products-add-form1.component.html',
  styleUrls: ['./products-add-form1.component.css'],
  providers:[CategoryService, ProductService]
})
export class ProductsAddForm1Component {

  
  constructor(private categoryService:CategoryService, private productService:ProductService, private alertifyService:AlertifyService){

  }
  model: Product = new Product();
  
  categories : Category[] = []
  ngOnInit(): void {
    this.categoryService.getProducts().subscribe((data)=>{
      this.categories=data
    })
  }
  add(form:NgForm){
    this.productService.addProduct(this.model).subscribe(data=>{
      this.alertifyService.success("Ürün Başarıyla Eklendi")
    })
    
  }
}
