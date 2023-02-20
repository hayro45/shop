import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent {
  title = "Kategori Listesi"
  constructor(private categoryService:CategoryService){

  }
  categories : Category[] = []
  ngOnInit(): void {
    this.categoryService.getProducts().subscribe((data)=>{
      this.categories=data
    })
  }

}
