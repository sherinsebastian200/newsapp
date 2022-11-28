import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewNewsComponent } from './view-news/view-news.component';
import { NewsAddComponent } from './news-add/news-add.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';


const myRoute:Routes = [
  {
    path:"",
    component:ViewNewsComponent
  },
  {
    path:"add",
    component:NewsAddComponent

  },
  {
    path:"search",
    component:
  }
 
]
@NgModule({
  declarations: [
    AppComponent,
    ViewNewsComponent,
    NewsAddComponent,
    NavBarComponent
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
