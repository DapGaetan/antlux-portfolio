import { Component } from '@angular/core';
import { NavLeftComponent } from '../../nav-left/nav-left.component';
import { NavTopComponent } from '../../nav-top/nav-top.component';
import { FooterComponent } from '../../footer/footer.component';



@Component({
  selector: 'app-home-page',
  imports: [NavTopComponent, NavLeftComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
