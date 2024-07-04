import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
// const logo = require("../../../assets/logo.jpg").default as string;
// import logo from '../../../assets/logo.jpg';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbNavModule,NgbDropdownModule,NgbCarouselModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  active = 0;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  // logo1=logo;
 constructor(){
    // this.logo="../../assets/logo.jpg";
  }
}

