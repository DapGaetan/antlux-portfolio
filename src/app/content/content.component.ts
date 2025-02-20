import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  isMenuClose = false;

  constructor(private menuService: MenuService) {
    // Écoute les changements du menu
    this.menuService.isMenuClose$.subscribe(state => {
      this.isMenuClose = state;
    });
  }

  toggleMenu(): void {
    this.menuService.toggleMenu();
  }
}
