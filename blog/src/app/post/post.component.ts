import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  title: string;
  content: string;
  created_at: string;
  rate: number;
  
  constructor(title,content,rate) { 
    this.title = title;
    this.content = content;
    this.rate = rate;
    this.created_at = Date();
  }

  ngOnInit() {
  }

}
