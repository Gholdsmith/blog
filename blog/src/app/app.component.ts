import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  postItems = [
    {
      title: "Mon premier post",
      content: "Le Lorem Ipsum est simplement du faux texte employé ",
      loveits: 12,
      created_at: Date()
    },
    {
      title: "Mon second post",
      content: "Le Lorem Ipereereeergdfdgffdgsum est saaaaaaaaaaaaaaaaaaaaaaaaaaee",
      loveits: 12,
      created_at: Date()
    },
    {
      title: "Mon troisième post",
      content: "Le L du faux texte employé ",
      loveits: 12,
      created_at: Date()
    }
  ];
}



