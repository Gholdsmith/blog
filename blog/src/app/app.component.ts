import { Component } from '@angular/core';
import { Post } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postItems = [
    new Post('Mon premier post', 'ceci est le premier post', 6),
    new Post('Mon second post', 'Ce cie est le seconde post de ce blog ', -4),
    new Post('Mon troisième post', 'et voici le troisième post avec du blablablabla ', 3)
  ];
}



