const DISCORD_INVITE = "https://discord.gg/UF7f4XHNYX";

const directPaymentDetails = {
  litecoinAddress: "LQ9mfqnZdWhLhYsjARKaXtscTR1jJBuv14",
  bankName: "Banorte",
  bankHolder: "Arlette Noemi Alva Montero",
  bankAccount: "0313239326",
  bankClabe: "072180003132393268"
};

const paymentMethods = [
  {
    name: "Litecoin",
    label: "Pagar con Litecoin",
    note: "Copia la wallet y envia el monto exacto",
    type: "litecoin"
  },
  {
    name: "Transferencia MEX",
    label: "Transferencia Mexico",
    note: "Copia los datos y usa el producto como concepto",
    type: "bank"
  },
  {
    name: "Discord",
    label: "Consultar otro metodo",
    note: "Preguntar disponibilidad",
    type: "link",
    url: DISCORD_INVITE,
    enabled: true
  }
];

const products = [
  {
    name: "Netflix",
    subtitle: "Cuenta completa",
    term: "Streaming",
    price: "$1.50 USD",
    category: "streaming",
    symbol: "N",
    logo: "https://cdn.simpleicons.org/netflix/FF3358",
    accent: "#ff3358",
    accent2: "#7a1225",
    tag: "Popular"
  },
  {
    name: "Disney+",
    subtitle: "Cuenta completa",
    term: "Streaming",
    price: "$1.50 USD",
    category: "streaming",
    symbol: "D+",
    logo: "https://cdn.simpleicons.org/disneyplus/58B8FF",
    accent: "#58b8ff",
    accent2: "#7a6bff",
    tag: "Streaming"
  },
  {
    name: "HBO Max",
    subtitle: "Cuenta completa",
    term: "Streaming",
    price: "$1.50 USD",
    category: "streaming",
    symbol: "max",
    logo: "https://cdn.simpleicons.org/max/8B68FF",
    accent: "#8b68ff",
    accent2: "#49d5ff",
    tag: "Streaming"
  },
  {
    name: "Spotify",
    subtitle: "Cuenta completa",
    term: "Musica",
    price: "$1.50 USD",
    category: "streaming",
    symbol: "S",
    logo: "https://cdn.simpleicons.org/spotify/54F18B",
    accent: "#54f18b",
    accent2: "#0f8d47",
    tag: "Musica"
  },
  {
    name: "Paramount+",
    subtitle: "Cuenta completa",
    term: "Streaming",
    price: "$1.50 USD",
    category: "streaming",
    symbol: "P+",
    logo: "https://cdn.simpleicons.org/paramountplus/4D8CFF",
    accent: "#4d8cff",
    accent2: "#d2efff",
    tag: "Streaming"
  },
  {
    name: "Crunchyroll",
    subtitle: "Cuenta completa",
    term: "Anime",
    price: "$1.50 USD",
    category: "streaming",
    symbol: "C",
    logo: "https://cdn.simpleicons.org/crunchyroll/FF9B3F",
    accent: "#ff9b3f",
    accent2: "#ffd36a",
    tag: "Anime"
  },
  {
    name: "Fortnite",
    subtitle: "Cuenta con skins",
    term: "Gaming",
    price: "$1.25 USD",
    category: "gaming",
    symbol: "FN",
    logo: "https://cdn.simpleicons.org/fortnite/65B7FF",
    accent: "#65b7ff",
    accent2: "#9b6bff",
    tag: "Skins"
  },
  {
    name: "Minecraft Java",
    subtitle: "Cuenta original",
    term: "Gaming",
    price: "$1.00 USD",
    category: "gaming",
    symbol: "⛏",
    logo: "https://cdn.simpleicons.org/minecraft/65D66F",
    accent: "#65d66f",
    accent2: "#8d6847",
    tag: "Java"
  },
  {
    name: "Duolingo",
    subtitle: "Cuenta Plus",
    term: "Aprendizaje",
    price: "$1.30 USD",
    category: "herramientas",
    symbol: "D",
    logo: "https://cdn.simpleicons.org/duolingo/77F252",
    accent: "#77f252",
    accent2: "#ffc857",
    tag: "Plus"
  },
  {
    name: "YouTube",
    subtitle: "Seguidores",
    term: "Social",
    price: "$9.00 USD",
    category: "social",
    symbol: "YT",
    logo: "https://cdn.simpleicons.org/youtube/FF3D3D",
    accent: "#ff3d3d",
    accent2: "#ffffff",
    tag: "Social"
  },
  {
    name: "Instagram",
    subtitle: "Seguidores",
    term: "Social",
    price: "$1.20 USD",
    category: "social",
    symbol: "IG",
    logo: "https://cdn.simpleicons.org/instagram/FF63C7",
    accent: "#ff63c7",
    accent2: "#ffb35b",
    tag: "Social"
  },
  {
    name: "TikTok",
    subtitle: "Seguidores",
    term: "Social",
    price: "$1.20 USD",
    category: "social",
    symbol: "TT",
    logo: "https://cdn.simpleicons.org/tiktok/58EADF",
    accent: "#58eadf",
    accent2: "#ff4f87",
    tag: "Social"
  },
  {
    name: "Promocode",
    subtitle: "Codigo promocional",
    term: "1 mes",
    price: "$1.50 USD",
    category: "discord",
    symbol: "%",
    logo: "https://cdn.simpleicons.org/discord/F0D080",
    accent: "#f0d080",
    accent2: "#8b6914",
    tag: "Discord"
  },
  {
    name: "Server Boost",
    subtitle: "14 Boosts",
    term: "1 mes",
    price: "$1.80 USD",
    category: "discord",
    symbol: "B",
    logo: "https://cdn.simpleicons.org/discord/FF73FA",
    accent: "#ff73fa",
    accent2: "#7a6bff",
    tag: "Boost"
  },
  {
    name: "Token Nitro",
    subtitle: "10 tokens",
    term: "Discord",
    price: "$4.00 USD",
    category: "discord",
    symbol: "TN",
    logo: "https://cdn.simpleicons.org/discord/9B6BFF",
    accent: "#9b6bff",
    accent2: "#58eadf",
    tag: "Nitro"
  },
  {
    name: "Nitro",
    subtitle: "Suscripcion",
    term: "Mensual",
    price: "$1.30 USD",
    category: "discord",
    symbol: "N",
    logo: "https://cdn.simpleicons.org/discord/8A7CFF",
    accent: "#8a7cff",
    accent2: "#ff73fa",
    tag: "Discord"
  },
  {
    name: "NordVPN",
    subtitle: "Cuenta premium",
    term: "VPN",
    price: "$1.00 USD",
    category: "herramientas",
    symbol: "VPN",
    logo: "https://cdn.simpleicons.org/nordvpn/64A8FF",
    accent: "#64a8ff",
    accent2: "#58eadf",
    tag: "VPN"
  },
  {
    name: "IPVanish",
    subtitle: "Cuenta premium",
    term: "VPN",
    price: "$1.00 USD",
    category: "herramientas",
    symbol: "IP",
    logo: "",
    accent: "#5bd9ff",
    accent2: "#54f18b",
    tag: "VPN"
  },
  {
    name: "ChatGPT Plus",
    subtitle: "Licencia",
    term: "Mensual",
    price: "$2.50 USD",
    category: "herramientas",
    symbol: "AI",
    logo: "https://cdn.simpleicons.org/openai/58EADF",
    accent: "#58eadf",
    accent2: "#64a8ff",
    tag: "IA"
  },
  {
    name: "Canva Pro",
    subtitle: "Licencia",
    term: "1 mes",
    price: "$0.50 USD",
    category: "herramientas",
    symbol: "C",
    logo: "https://cdn.simpleicons.org/canva/58EADF",
    accent: "#58eadf",
    accent2: "#9b6bff",
    tag: "Pro"
  },
  {
    name: "Novo Ware",
    subtitle: "Ghost Client de Minecraft",
    term: "Licencia",
    price: "$4.00 USD",
    category: "gaming",
    symbol: "NW",
    logo: "",
    accent: "#b26cff",
    accent2: "#ff63c7",
    tag: "Minecraft"
  }
];

const grid = document.querySelector("#productGrid");
const search = document.querySelector("#search");
const filters = document.querySelectorAll(".filter");
const modal = document.querySelector("#paymentModal");
const checkoutLogo = document.querySelector("#checkoutLogo");
const checkoutProduct = document.querySelector("#checkoutProduct");
const checkoutDetails = document.querySelector("#checkoutDetails");
const paymentOptions = document.querySelector("#paymentOptions");
const closeModalButton = document.querySelector(".modal-close");
let activeFilter = "todos";
let activeProduct = null;

function renderProducts() {
  grid.innerHTML = products.map((product) => `
    <article class="product" data-category="${product.category}" data-name="${product.name.toLowerCase()} ${product.subtitle.toLowerCase()}" style="--accent: ${product.accent}; --accent-2: ${product.accent2};">
      <div class="product-art" aria-hidden="true">
        <div class="box">
          <span>${product.name}<br>${product.tag}</span>
          <em>Scar Shop</em>
        </div>
        <div class="symbol">${renderLogo(product)}</div>
      </div>
      <div class="product-body">
        <h3>${product.name}</h3>
        <p class="meta">${product.subtitle} · ${product.term}</p>
        <p class="price">${formatPrice(product.price)}</p>
        <button class="button ghost buy-button" type="button" data-product="${product.name}">Pagar ahora</button>
      </div>
    </article>
  `).join("");
  filterProducts();
  bindBuyButtons();
}

function renderLogo(product) {
  if (!product.logo) return `<span>${product.symbol}</span>`;
  return `<img src="${product.logo}" alt="" loading="lazy" onerror="this.replaceWith(document.createTextNode('${product.symbol}'))">`;
}

function formatPrice(price) {
  if (!price.includes(" - ")) return price;
  return price.replace(" - ", " <small>a</small> ");
}

function bindBuyButtons() {
  document.querySelectorAll(".buy-button").forEach((button) => {
    button.addEventListener("click", () => {
      const product = products.find((item) => item.name === button.dataset.product);
      if (product) openPaymentModal(product);
    });
  });
}

function openPaymentModal(product) {
  activeProduct = product;
  checkoutLogo.innerHTML = renderLogo(product);
  checkoutProduct.textContent = product.name;
  checkoutDetails.textContent = `${product.subtitle} · ${product.price}`;
  paymentOptions.innerHTML = renderPaymentChooser(product);
  bindPaymentChooser();
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function renderPaymentChooser(product) {
  return `
    <div class="payment-step">
      <span>Paso 1</span>
      <strong>Elige metodo de pago</strong>
    </div>
    <div class="payment-methods">
      ${paymentMethods.map((method) => `
        <button class="payment-method" type="button" data-method="${method.type}">
          <span>${method.label}</span>
          <small>${method.note}</small>
        </button>
      `).join("")}
    </div>
    <div class="payment-detail" id="paymentDetail">
      <p>Selecciona un metodo para ver los datos de pago de ${product.name}.</p>
    </div>
  `;
}

function renderPaymentMethod(method, product) {
  if (method.type === "litecoin") return renderLitecoinPayment(method, product);
  if (method.type === "bank") return renderBankPayment(method, product);
  return `
    <div class="payment-card">
      <div class="payment-card-head">
        <span>${method.label}</span>
        <small>${method.note}</small>
      </div>
      <a class="payment-action" href="${method.url}" target="_blank" rel="noreferrer">Abrir Discord</a>
    </div>
  `;
}

function renderLitecoinPayment(method, product) {
  const address = directPaymentDetails.litecoinAddress.trim();
  if (!address) {
    return `
      <div class="payment-option payment-card is-disabled">
        <span>${method.label}</span>
        <small>Falta configurar wallet LTC</small>
      </div>
    `;
  }
  return `
    <div class="payment-card">
      <div class="payment-card-head">
        <span>Paso 2 · ${method.label}</span>
        <small>${method.note}</small>
      </div>
      <div class="payment-line">
        <code>${address}</code>
        <button class="copy-button" type="button" data-copy="${address}">Copiar wallet</button>
      </div>
      <p class="payment-help">Monto: ${product.price}. Concepto: ${product.name} - Scar Shop.</p>
      <div class="verification-box">
        <strong>Paso 3 · Verificacion</strong>
        <p>Despues de enviar Litecoin, guarda tu TxID. La tienda no confirma pagos automaticamente todavia; el pedido queda pendiente hasta revisar la transaccion.</p>
      </div>
    </div>
  `;
}

function renderBankPayment(method, product) {
  const bankRows = [
    ["Banco", directPaymentDetails.bankName],
    ["Titular", directPaymentDetails.bankHolder],
    ["Cuenta/Tarjeta", directPaymentDetails.bankAccount],
    ["CLABE", directPaymentDetails.bankClabe]
  ].filter(([, value]) => value.trim());

  if (!bankRows.length) {
    return `
      <div class="payment-option payment-card is-disabled">
        <span>${method.label}</span>
        <small>Faltan datos de transferencia</small>
      </div>
    `;
  }

  return `
    <div class="payment-card">
      <div class="payment-card-head">
        <span>Paso 2 · ${method.label}</span>
        <small>${method.note}</small>
      </div>
      ${bankRows.map(([label, value]) => `
        <div class="payment-line">
          <code>${label}: ${value}</code>
          <button class="copy-button" type="button" data-copy="${value}">Copiar</button>
        </div>
      `).join("")}
      <p class="payment-help">Monto: ${product.price}. Concepto: ${product.name} - Scar Shop.</p>
      <div class="verification-box">
        <strong>Paso 3 · Verificacion</strong>
        <p>Despues de transferir, conserva el comprobante. La tienda no puede verificar transferencias bancarias automaticamente sin una API bancaria o procesador de pagos.</p>
      </div>
    </div>
  `;
}

function bindPaymentChooser() {
  document.querySelectorAll(".payment-method").forEach((button) => {
    button.addEventListener("click", () => {
      const method = paymentMethods.find((item) => item.type === button.dataset.method);
      const detail = document.querySelector("#paymentDetail");
      if (!method || !activeProduct || !detail) return;
      document.querySelectorAll(".payment-method").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      detail.innerHTML = renderPaymentMethod(method, activeProduct);
      bindCopyButtons();
    });
  });
}

function bindCopyButtons() {
  document.querySelectorAll(".copy-button").forEach((button) => {
    button.addEventListener("click", async () => {
      await navigator.clipboard.writeText(button.dataset.copy);
      button.textContent = "Copiado";
      setTimeout(() => {
        button.textContent = button.dataset.copy.length > 16 ? "Copiar wallet" : "Copiar";
      }, 1400);
    });
  });
}

function closePaymentModal() {
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function filterProducts() {
  const term = search.value.trim().toLowerCase();
  document.querySelectorAll(".product").forEach((card) => {
    const matchesFilter = activeFilter === "todos" || card.dataset.category === activeFilter;
    const matchesSearch = !term || card.dataset.name.includes(term);
    card.classList.toggle("is-hidden", !matchesFilter || !matchesSearch);
  });
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    filterProducts();
  });
});

search.addEventListener("input", filterProducts);
closeModalButton.addEventListener("click", closePaymentModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closePaymentModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePaymentModal();
});
renderProducts();

const canvas = document.querySelector("#particles");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles = Array.from({ length: Math.min(90, Math.floor(window.innerWidth / 16)) }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    vx: (Math.random() - 0.5) * 0.22,
    vy: Math.random() * 0.28 + 0.06,
    a: Math.random() * 0.58 + 0.22
  }));
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const dot of particles) {
    dot.x += dot.vx;
    dot.y += dot.vy;
    if (dot.y > canvas.height + 10) dot.y = -10;
    if (dot.x < -10) dot.x = canvas.width + 10;
    if (dot.x > canvas.width + 10) dot.x = -10;

    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${dot.a})`;
    ctx.fill();
  }
  requestAnimationFrame(drawParticles);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawParticles();
