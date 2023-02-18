import { Component } from '@angular/core';
import { Product } from './product';
declare let alertify:any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
  title= "Ürün Listesi"
  filterText= ""
  products : Product[] = [
    {id:1, name:"Laptop", price: 20000, categoryId:1, description:"Lenova V1", imageUrl:"https://productimages.hepsiburada.net/s/43/375/10756146954290.jpg"},
    {id:1, name:"Fare", price: 2000, categoryId:2, description:"Gaming Mouse", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/a/ab/Razer_Naga_2014_MMO_Gaming_Mouse_%2814714867599%29.jpg"},
    {id:1, name:"Laptop", price: 20000, categoryId:1, description:"Lenova V1", imageUrl:"https://productimages.hepsiburada.net/s/43/375/10756146954290.jpg"},
    {id:1, name:"Laptop", price: 20000, categoryId:1, description:"Lenova V1", imageUrl:"https://productimages.hepsiburada.net/s/43/375/10756146954290.jpg"},
    {id:1, name:"Laptop", price: 20000, categoryId:1, description:"Lenova V1", imageUrl:"https://productimages.hepsiburada.net/s/43/375/10756146954290.jpg"},
    {id:1, name:"Laptop", price: 20000, categoryId:1, description:"Lenova V1", imageUrl:"https://productimages.hepsiburada.net/s/43/375/10756146954290.jpg"},
  ]
  addToCart(product:string){
    alertify.success("added!")
  }
}
