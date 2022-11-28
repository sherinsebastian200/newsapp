import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewNewsComponent } from './view-news/view-news.component';
import { NewsAddComponent } from './news-add/news-add.component';
import { FormsModule } from '@angular/forms';


const myRoute:Routes = [
  {
    path:"",
    component:ViewNewsComponent
  }
 
]
@NgModule({
  declarations: [
    AppComponent,
    ViewNewsComponent,
    NewsAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
