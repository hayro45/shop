import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductsAddForm1Component } from './product/products-add-form1/products-add-form1.component';
import { ProductsAddForm2Component } from './product/products-add-form2/products-add-form2.component';

const routes: Routes = [
  {path:'products', component: ProductComponent},
  {path:'products-add-form1', component: ProductsAddForm1Component},
  {path:'products-add-form2', component: ProductsAddForm2Component},
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'products/category/:categoryId', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
