import { Component } from '@angular/core';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.css']
})
export class NewsAddComponent {
  id=""
  name=""
  title=""
  description=""
  url=""
  image=""
  publishdate=""
  source=""
  content=""

  newsAdd=()=>
  {
    let data:any={"id":this.id,"name":this.name,"title":this.title,"description":this.description,"url":this.url,"image":this.image,"publishdate":this.publishdate,"source":this.source,"content":this.content}
    console.log(data)
  }


}
