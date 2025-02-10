import { Component } from '@angular/core';
import { ContentComponent } from '../../content/content.component';
import { NavTopComponent } from '../../nav-top/nav-top.component';



@Component({
  selector: 'app-home-page',
  imports: [NavTopComponent, ContentComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
