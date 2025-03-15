import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private isMenuCloseSubject = new BehaviorSubject<boolean>(true); // Menu fermé par défaut
  isMenuClose$ = this.isMenuCloseSubject.asObservable();

  toggleMenu(): void {
    this.isMenuCloseSubject.next(!this.isMenuCloseSubject.value);
  }

  setMenuState(state: boolean): void {
    this.isMenuCloseSubject.next(state);
  }

  getMenuState(): boolean {
    return this.isMenuCloseSubject.value;
  }
}
