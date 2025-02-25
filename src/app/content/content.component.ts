import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-content',
  imports: [FooterComponent],
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
