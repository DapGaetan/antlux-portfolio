import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-content',
  imports: [FooterComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  isMenuOpen = false;

  
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
