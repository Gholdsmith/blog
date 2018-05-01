import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class Post implements OnInit {

  title: string;
  content: string;
  rate: number;
  created_at: string;

  constructor(title: string, content: string, rate: number) {
    this.title = title;
    this.content = content;
    this.rate = rate;
    this.created_at = Date();
  }

  ngOnInit() {
  }

}
