# 🛍️ Nos Vemos pelo Mundo – Loja Virtual 🌍✈️

Projeto de uma loja virtual voltada a produtos inspirados em viagens, como camisetas, canecas, chaveiros e agendas. O objetivo é proporcionar uma interface amigável para que usuários possam explorar, buscar e comprar produtos com facilidade.

---

## ✨ Funcionalidades

- Exibição de produtos organizados em categorias
- Filtro por categoria e busca por nome
- Carrinho de compras com controle de estoque
- Armazenamento do carrinho no navegador com `localStorage`
- Atualização de estoque via API REST (back-end Node.js)
- Layout responsivo com Bootstrap
- Botão para limpar carrinho
- Indicação de produtos esgotados
- Simulação de finalização da compra

---

## 🔗 Integração com o Back-end

Este projeto consome dados da API criada no repositório:  
[`Projeto-E-Commerce-Back`](https://github.com/MariaAlineMees/Projeto-E-Commerce-Back)

- Endpoint: [`http://localhost:3000/api/products`](http://localhost:3000/api/products)

> ⚠️ Atenção: o arquivo `data/products.js` foi mantido apenas para testes offline. Os dados agora são carregados dinamicamente da API.

---

## 🧰 Tecnologias Utilizadas

- **HTML5** + **CSS3**
- **JavaScript**
- **Bootstrap 5.3**
- **LocalStorage API** (usada para salvar o carrinho temporariamente)
- **Fetch API** (para consumo do back-end)

---

## 🖥️ Como Executar o Projeto

1. **Clone ou baixe o repositório:**

   ```bash
   git clone https://github.com/MariaAlineMees/nos-vemos-pelo-mundo.git

   
2. **Abra o projeto no seu navegador:**

Basta abrir o arquivo index.html com duplo clique ou por algum servidor local (como Live Server do VS Code).

✅ Certifique-se de que o servidor da API (back-end) esteja rodando localmente antes de abrir o front-end.

✅ Importante: certifique-se de que as pastas assets/images, css/, js/ e data/ estejam com os arquivos corretos.

3. **📂Estrutura de pastas**
📁 nos-vemos-pelo-mundo/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── data/
│   └── products.js
├── assets/
│   └── images/
│       ├── camiseta1.jpg
│       ├── Caneca1.jpg
│       ├── Chaveiro1.png
│       ├── Agenda1.png
│       └── ... (demais imagens)

🖼️ Imagens de Telas

🔷 Tela inicial (lista de produtos)

<img src="Front/assets/images/tela_inicial.png" alt="Tela inicial" width="300">


🔷 Filtro por categoria

<img src="Front/assets/images/filtro_por_categoria.png" alt="Filtro por categoria" width="300">


🔷 Carrinho lateral (offcanvas)

<img src="Front/assets/images/carrinho_lateral.png" alt="Carrinho lateral" width="300">


💡 Futuras Melhorias
- Integração com sistema de pagamentos (ex: Mercado Pago, Stripe)

- Cadastro e login de usuários

- Histórico de pedidos

- Tela de administração de estoque


👩🏻‍💻 Autora: 
Projeto desenvolvido por Maria Aline Mees, como parte de estudos em desenvolvimento front-end com HTML, CSS e JavaScript do curso +Devs2Blu!

💬 "Nos vemos pelo mundo!" 🌍✈️

## 📄 Aviso de Uso

Este projeto foi desenvolvido apenas para fins didáticos, sem fins comerciais.

As imagens utilizadas são meramente ilustrativas e foram obtidas da internet.  
Caso você seja detentor de algum conteúdo e deseje que ele seja removido, por favor entre em contato.

**Este projeto não possui uma licença de uso aberta, pois contém materiais de terceiros.**
