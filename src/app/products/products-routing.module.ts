import { ViewAllProductsByCatagoryComponent } from './view-all-products-by-catagory/view-all-products-by-catagory.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductsComponent } from './products.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  { path: '', component: ViewAllProductComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'search-category', component: ViewAllProductsByCatagoryComponent},
  { path: 'search-date', component: ViewAllProductsByDateComponent},
  { path: 'delete-product/:id', component: DeleteProductComponent },
  { path: 'view-product/:id', component: ViewProductComponent },
  { path: 'update-product/:id', component: UpdateProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
