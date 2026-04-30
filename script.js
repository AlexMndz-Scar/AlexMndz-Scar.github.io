const products = [
  {
    name: "Netflix",
    subtitle: "Cuenta completa",
    term: "Streaming",
    price: "$1.50 USD",
    category: "streaming",
    symbol: "N",
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
    accent: "#b26cff",
    accent2: "#ff63c7",
    tag: "Minecraft"
  }
];

const grid = document.querySelector("#productGrid");
const search = document.querySelector("#search");
const filters = document.querySelectorAll(".filter");
let activeFilter = "todos";

function renderProducts() {
  grid.innerHTML = products.map((product) => `
    <article class="product" data-category="${product.category}" data-name="${product.name.toLowerCase()} ${product.subtitle.toLowerCase()}" style="--accent: ${product.accent}; --accent-2: ${product.accent2};">
      <div class="product-art" aria-hidden="true">
        <div class="box">
          <span>Scar<br>${product.tag}</span>
          <em>Scar Shop</em>
        </div>
        <div class="symbol">${product.symbol}</div>
      </div>
      <div class="product-body">
        <h3>${product.name}</h3>
        <p class="meta">${product.subtitle} · ${product.term}</p>
        <p class="price">${formatPrice(product.price)}</p>
        <a class="button ghost" href="https://discord.gg/UF7f4XHNYX" target="_blank" rel="noreferrer">Comprar por Discord</a>
      </div>
    </article>
  `).join("");
  filterProducts();
}

function formatPrice(price) {
  if (!price.includes(" - ")) return price;
  return price.replace(" - ", " <small>a</small> ");
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
