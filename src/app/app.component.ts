import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common' // importar NgIf
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from "./login/login.component";
import { CarrinhoComponent } from "./carrinho/carrinho.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CarrinhoComponent,
    HomeComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  view: 'home' | 'login' | 'cart' = 'home';

  onViewChange(viewName: 'home' | 'login' | 'cart') {
    this.view = viewName;
  }
}
