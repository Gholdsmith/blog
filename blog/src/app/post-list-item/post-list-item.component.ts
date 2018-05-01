import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() Item: {
    title: string,
    content: string,
    rate: number,
    created_at: Date
  };

  constructor() {
  }

  ngOnInit() {
  }

  getColor() {
    return 'black';
  }

  getFont() {
    return 'italic';
  }

  getWeight() {
    return 'bold';
  }
  onLovePost() {
    this.Item.rate++;
    console.log(this.Item.title + ' : ' + this.Item.rate);
  }

  onDoNotLovePost() {
    this.Item.rate--;
    console.log(this.Item.title + ' : ' + this.Item.rate);
  }
}
