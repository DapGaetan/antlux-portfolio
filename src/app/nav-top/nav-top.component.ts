import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-nav-top',
  imports: [],
  templateUrl: './nav-top.component.html',
  styleUrl: './nav-top.component.scss'
})
export class NavTopComponent {
  isMenuClose = false;

  constructor(private menuService: MenuService) {
    this.menuService.isMenuClose$.subscribe(state => {
      this.isMenuClose = state;
    });
  }
}
