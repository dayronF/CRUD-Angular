import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPage } from './pages/product-page/product-page';
import { ProductForm } from './components/product-form/product-form';
import { ProductList } from './components/product-list/product-list';
import { ProductCard } from './components/product-card/product-card';

@NgModule({
  declarations: [ProductPage, ProductForm, ProductList, ProductCard],
  imports: [CommonModule],
})
export class ProductsModule {}
