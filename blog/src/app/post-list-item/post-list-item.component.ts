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
    content : string,
    created_at: Date,
    loveIts: number
  };

  @Input() rate: number;

  constructor() {
    console.log("postlistitem - constructor");


  }

  ngOnInit() {
    console.log("postlistItem - Init");
    console.log(this.Item.title);
    this.rate = 0;

  }

  getColor(){
    return 'black';
  }

  getFont(){
    return 'italic';
  }

  getWeight(){
    return 'bold';
  }
  onLovePost() {
    this.rate++;
    console.log(this.rate);
    
  }

  onDoNotLovePost() {
    this.rate--;
    console.log(this.rate);
    
  }
}
