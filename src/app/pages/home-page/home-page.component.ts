import { Component } from '@angular/core';
import { ContentComponent } from '../../content/content.component';
import { NavTopComponent } from '../../nav-top/nav-top.component';
import { FooterComponent } from '../../footer/footer.component';



@Component({
  selector: 'app-home-page',
  imports: [NavTopComponent, ContentComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
