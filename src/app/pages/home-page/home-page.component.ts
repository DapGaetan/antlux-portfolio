import { MenuComponent } from './../../menu/menu.component';
import { Component } from '@angular/core';
import { ContentComponent } from '../../content/content.component';
import { FooterComponent } from '../../footer/footer.component';


@Component({
  selector: 'app-home-page',
  imports: [MenuComponent, ContentComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
