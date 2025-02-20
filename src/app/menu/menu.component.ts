import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isMenuClose = false;

  constructor(private menuService: MenuService) {
    this.menuService.isMenuClose$.subscribe(state => {
      this.isMenuClose = state;
    });
  }

  toggleMenu() {
    this.isMenuClose = !this.isMenuClose;
  }
}
