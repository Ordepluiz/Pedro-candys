import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'login', component: LoginComponent },
];


