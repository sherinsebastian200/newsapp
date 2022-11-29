import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news-view',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent {

  constructor(private api:ApiService){
    api.fetchCourses().subscribe(
      (response)=>
      {
        this.news=response;
      }

    )
  }
news:any=[]



}

