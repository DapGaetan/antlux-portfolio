import { MenuComponent } from './../../menu/menu.component';
import { Component } from '@angular/core';
import { ContentComponent } from '../../content/content.component';
import { FooterComponent } from '../../footer/footer.component';
import { MenuService } from '../../services/menu.service';


@Component({
  selector: 'app-home-page',
  imports: [MenuComponent, ContentComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
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
