import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  post: {
    title: string,
    content: string,
    loveits: number,
    created_at: Date
  }

  constructor() { }

  ngOnInit() {
  }

}
