import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AddProductComponent} from "./components/add-product/add-product.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {ProductsComponent} from "./components/products/products.component";
import {ViewProductDetailsComponent} from "./components/view-product-details/view-product-details.component";
import {SuppliersComponent} from "./components/suppliers/suppliers.component";
import {AddSupplierComponent} from "./components/add-supplier/add-supplier.component";
import {EditProductComponent} from "./components/edit-product/edit-product.component";
import {ContentLimitterPipe} from "./Pipe/content-limitter.pipe";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ContentLimitterPipe,
    AddProductComponent,
    EditProductComponent,
    ViewProductDetailsComponent,
    SuppliersComponent,
    AddSupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
