import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
// const logo = require("../../../assets/logo.jpg").default as string;
// import logo from '../../../assets/logo.jpg';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbNavModule,NgbDropdownModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  active = 0;
  // logo1=logo;
 //constructor(){
    // this.logo="../../assets/logo.jpg";
  //}
}

