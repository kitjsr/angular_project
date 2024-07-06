import { Component } from '@angular/core';

@Component({
  selector: 'app-decor',
  standalone: true,
  imports: [],
  templateUrl: './decor.component.html',
  styleUrl: './decor.component.css'
})
export class DecorComponent {
  
  decors=[
    {
      box:1,
      image:'http://rajtenthouse.in/images/wedding-decor-tenting.jpg',
    },
    {
      box:2,
      image:'http://rajtenthouse.in/images/wedding-decor-tenting2.jpg',
    },
    {
      box:3,
      image:'http://rajtenthouse.in/images/wedding-decor-tenting3.jpg',
    },
  ];
}
