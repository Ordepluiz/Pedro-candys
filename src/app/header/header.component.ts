import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; // importa módulo
import { MatButtonModule } from '@angular/material/button'; // se usar mat-button

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule], // importa módulos usados no template
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() viewChange = new EventEmitter<'home' | 'login' | 'cart'>();

  showHome() {
    this.viewChange.emit('home');
  }

  showLogin() {
    this.viewChange.emit('login');
  }

  showCart() {
    this.viewChange.emit('cart');
  }
}
