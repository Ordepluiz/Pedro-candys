import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProdutoCardComponent } from '../produto-card/produto-card.component';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProdutoCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInStagger', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class HomeComponent {
  produtos = [
    {
      id: 1,
      nome: 'Brigadeiro Tradicional',
      preco: 3.50,
      imagem: 'https://www.marajoaraalimentos.com.br/2018/wp-content/uploads/2020/07/349-scaled.jpg'
    },
    {
      id: 2,
      nome: 'Brigadeiro Branco',
      preco: 4.00,
      imagem: 'https://s2-receitas.glbimg.com/bXsL0IL0NCKx1LpsLdbOPoDGkGY=/0x0:620x415/984x0/smart/filters:strip_icc()/s2.glbimg.com/OqnZ0Gtq1-qpb92BduKopxOJdOQ%3D/g.glbimg.com/og/gs/gsat5/f/original/2015/08/28/branco_.jpg'
    },
    {
      id: 3,
      nome: 'Brigadeiro de Pistache',
      preco: 5.50,
      imagem: 'https://docesdangelo.com.br/site/wp-content/uploads/2016/11/pistache-com-avela.jpg'
    },
    {
      id: 4,
      nome: 'Brigadeiro de Morango',
      preco: 4.50,
      imagem: 'https://i.pinimg.com/736x/74/e8/fa/74e8fa7c14272e42c9cba948920125bd.jpg'
    },
    {
      id: 5,
      nome: 'Brigadeiro de Nutella',
      preco: 6.00,
      imagem: 'https://cdn.awsli.com.br/800x800/1554/1554716/produto/57819186/captura-de-tela-2024-02-19-122351-momnt56b69.png'
    },
    {
      id: 6,
      nome: 'Brigadeiro com Coco',
      preco: 3.80,
      imagem: 'https://www.receitadevovo.com.br/_next/image?url=https%3A%2F%2Fd2qcpt1idvpipw.cloudfront.net%2Frecipes%2F2020%2F10%2Fbeijinho-perfeito_27082018230818.jpg&w=3840&q=75'
    }
  ];

  onAdicionarCarrinho(produto: any) {
    alert(`Produto adicionado: ${produto.nome}`);
  }
}
