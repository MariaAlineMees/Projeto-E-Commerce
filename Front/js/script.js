// Estado do app
let state = {
  products: [],     // produtos com estoque atualizado
  cart: {}          // { productId: quantidade }
};

let products = [];

// Busca os produtos da API
async function fetchProducts() {
  const res = await fetch("http://localhost:3000/api/products");
  products = await res.json();
}

// Inicialização
document.addEventListener("DOMContentLoaded", async () => {
  await loadState();
  applyFilters();
  bindSearch();
  renderCart();
  bindClearCart();
});

// Carrega produtos da API e carrinho do localStorage
async function loadState() {
  const savedCart = localStorage.getItem("nvpm_cart");
  state.cart = savedCart ? JSON.parse(savedCart) : {};

  await fetchProducts();
  state.products = products.map(p => ({ ...p })); // clona para manter compatibilidade
}

// Salva estado no localStorage
function saveState() {
  localStorage.setItem("nvpm_cart", JSON.stringify(state.cart));
}

// Lê parâmetro de URL
function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

// Filtra por categoria e pesquisa, depois renderiza
function applyFilters() {
  const cat = getQueryParam("categoria");
  const term = getQueryParam("search");
  let list = state.products;

  if (cat) {
    list = list.filter(p => p.categoria === cat);
  }
  if (term !== null) {
    const termoBusca = term.toLowerCase().trim();
    list = list.filter(p =>
      p.name.toLowerCase().includes(termoBusca)
    );
  }
  renderProducts(list);
}

// Renderiza lista de produtos em cards
function renderProducts(list) {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = "";

  list.forEach(p => {
    const col = document.createElement("div");
    col.className = "col-sm-6 col-md-4 col-lg-3";

    const inCart = state.cart[p.id] || 0;
    const estoqueDisponivel = p.qtdEstoque - inCart;
    const btnDisabled = estoqueDisponivel < 1 ? "disabled" : "";

    col.innerHTML = `
      <div class="card h-100">
        <img src="${p.imagem}" class="card-img-top" alt="${p.name}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text text-success fw-bold">
            R$ ${p.valor.toFixed(2).replace(".", ",")}
          </p>
          <button class="btn btn-custom mt-auto add-btn"
                  data-id="${p.id}" ${btnDisabled}>
            ${btnDisabled ? "Esgotado" : "Adicionar"}
          </button>
        </div>
      </div>
    `;
    grid.appendChild(col);
  });

  document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => addToCart(+btn.dataset.id));
  });
}

// Adiciona produto ao carrinho
function addToCart(id) {
  const prod = state.products.find(p => p.id === id);
  const inCart = state.cart[id] || 0;
  const estoqueDisponivel = prod.qtdEstoque - inCart;
  if (!prod || estoqueDisponivel < 1) return;

  state.cart[id] = inCart + 1;
  saveState();

  applyFilters();
  renderCart();
}

// Remove item individual do carrinho
function removeFromCart(id) {
  if (!state.cart[id]) return;

  delete state.cart[id];
  saveState();
  renderCart();
  applyFilters();
}

// Renderiza carrinho na offcanvas
function renderCart() {
  const listEl = document.getElementById("cart-items");
  const countEl = document.getElementById("cart-count");
  listEl.innerHTML = "";
  let totalCount = 0;

  for (const [id, qty] of Object.entries(state.cart)) {
    totalCount += qty;
    const prod = state.products.find(p => p.id === +id);
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <span>${prod.name} (${qty})</span>
      <div class="d-flex align-items-center gap-2">
        <span>R$ ${(prod.valor * qty).toFixed(2).replace(".", ",")}</span>
        <button class="btn btn-sm btn-danger remove-btn" data-id="${id}">✕</button>
      </div>
    `;
    listEl.appendChild(li);
  }

  countEl.textContent = totalCount;

  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => removeFromCart(btn.dataset.id));
  });
}

// Finaliza compra: envia carrinho para API e atualiza estoque
document.getElementById("finish-btn").addEventListener("click", async () => {
  await fetch("http://localhost:3000/api/products/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cart: state.cart })
  });

  state.cart = {};
  saveState();
  await loadState(); // recarrega produtos atualizados
  renderCart();
  applyFilters();
});

// Limpa carrinho sem alterar estoque
function bindClearCart() {
  const clearBtn = document.querySelector(".clear-cart");
  if (!clearBtn) return;

  clearBtn.addEventListener("click", () => {
    state.cart = {};
    saveState();
    renderCart();
    applyFilters();
  });
}

// Binda pesquisa
function bindSearch() {
  const form = document.getElementById("search-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = document.getElementById("search-input");
    const searchTerm = input.value.trim();

    const params = new URLSearchParams(window.location.search);
    if (searchTerm) {
      params.set("search", searchTerm);
    } else {
      params.delete("search");
    }

    window.location.href = "?" + params.toString();
  });
}