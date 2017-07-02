import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ProductComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        {
            path: 'member',
            component: MembersComponent
        },
        {
            path: 'product',
            component: ProductComponent
        }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
