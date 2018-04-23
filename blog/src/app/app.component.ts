import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  postItems = [
    new PostComponent("Monpremier post","Le Lorem Ipsum est simplement du faux texte employé ",34),
    new PostComponent("Mon second post","Ce cie est le seconde post dede ce blog ",45),
    new PostComponent("Mon troisième post","et voici le troisième post avec u blablablabla ",12)
  ]

  _postItems = [
    
    {
      title: "Mon premier post",
      content: "Le Lorem Ipsum est simplement du faux texte employé ",
      rate: 34,
      created_at: Date()
    },
    {
      title: "Mon second post",
      content: "Le Lorem Ipereereeergdfdgffdgsum est saaaaaaaaaaaaaaaaaaaaaaaaaaee",
      rate: 45,
      created_at: Date()
    },
    {
      title: "Mon troisième post",
      content: "Le L du faux texte employé ",
      rate: 12,
      created_at: Date()
    }
  ];
}



