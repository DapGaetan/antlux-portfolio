import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-left',
  imports: [],
  templateUrl: './nav-left.component.html',
  styleUrl: './nav-left.component.scss'
})
export class NavLeftComponent {
  isMenuOpen = false;

  
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
