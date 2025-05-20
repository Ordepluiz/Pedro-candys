# 🍬 Pedro Candys

**Pedro Candys** é uma loja fictícia de brigadeiros desenvolvida em Angular, com um layout sofisticado, animações suaves e foco em uma experiência visual atrativa para o usuário. O projeto permite visualização de produtos, login e gerenciamento de um carrinho de compras.

## 🚀 Tecnologias Utilizadas

* **Angular (standalone components)**
* **Angular Material** – interface moderna e responsiva
* **Bootstrap** – auxílio em responsividade
* **SCSS** – para estilizações personalizadas e refinadas
* **Reactive Forms** – para validações no formulário de login
* **Google Fonts** – fonte `Poppins` para tipografia elegante

## 📸 Funcionalidades

* Exibição de produtos com animações e botões de adicionar ao carrinho
* Página de login com validações reativas e botão de visualização de senha
* Página de carrinho com integração a produtos
* Layout com cabeçalho fixo, footer estilizado e cores vibrantes
* Transições suaves e responsividade aprimorada

## 📦 Instalação e Execução

Após clonar este repositório:

```bash
git clone https://github.com/seu-usuario/pedro-candys.git
cd pedro-candys
npm install
```


## 🧱 Bibliotecas e Dependências

Instale as seguintes dependências se necessário:

### Angular Material

```bash
ng add @angular/material
```

Inclui os módulos usados:

* `MatToolbarModule`
* `MatFormFieldModule`
* `MatInputModule`
* `MatButtonModule`
* `MatIconModule`
* `MatCardModule`

### Bootstrap

```bash
npm install bootstrap
```

E adicione no `angular.json`:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.scss"
]
```

### Google Fonts

Adicione no `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

---

## 🛠️ Configurações recomendadas

### SCSS como padrão

Caso não tenha configurado SCSS por padrão:

```bash
ng config schematics.@schematics/angular:component.style scss
```

---


