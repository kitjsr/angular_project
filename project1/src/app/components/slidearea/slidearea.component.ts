import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slidearea',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './slidearea.component.html',
  styleUrl: './slidearea.component.css'
})
export class SlideareaComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
