import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-content',
  imports: [FooterComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  isMenuClose = false;

  
  toggleMenu(): void {
    this.isMenuClose = !this.isMenuClose;
  }
}
