const products = [
  {
    id: "sofa",
    name: "Marlow 3-Seater Sofa",
    category: "furniture",
    tag: "Living room",
    price: 1299,
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=900&q=80",
    description: "A compact fabric sofa with deep seating for apartments and studio homes."
  },
  {
    id: "bed",
    name: "Queen Storage Bed",
    category: "furniture",
    tag: "Bedroom",
    price: 1099,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    description: "Queen bed frame with storage drawers and installation included."
  },
  {
    id: "fridge",
    name: "260L Double Door Fridge",
    category: "appliance",
    tag: "Kitchen",
    price: 899,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=900&q=80",
    description: "Energy-efficient refrigerator for everyday groceries and weekly meal prep."
  },
  {
    id: "washer",
    name: "Front Load Washer",
    category: "appliance",
    tag: "Laundry",
    price: 799,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=80",
    description: "Fully automatic washing machine with maintenance and swap support."
  },
  {
    id: "desk",
    name: "Work Desk Plus Chair",
    category: "workspace",
    tag: "Work from home",
    price: 649,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=80",
    description: "A practical desk and ergonomic chair bundle for focused workdays."
  },
  {
    id: "microwave",
    name: "Convection Microwave",
    category: "appliance",
    tag: "Kitchen",
    price: 399,
    image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=900&q=80",
    description: "Countertop microwave for reheating, baking, grilling, and quick meals."
  },
  {
    id: "air-conditioner",
    name: "Split Air Conditioner",
    category: "appliance",
    tag: "Living room",
    price: 599,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    description: "Energy-efficient split AC for comfortable cooling in your home."
  },
  {
    id: "gas-stove",
    name: "4-Burner Gas Stove",
    category: "appliance",
    tag: "Kitchen",
    price: 299,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
    description: "Reliable gas stove with four burners for efficient cooking."
  },
  {
    id: "television",
    name: "55-inch Smart TV",
    category: "appliance",
    tag: "Living room",
    price: 499,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=80",
    description: "Smart TV with streaming capabilities for entertainment."
  },
  {
    id: "geyser",
    name: "Instant Water Geyser",
    category: "appliance",
    tag: "Bathroom",
    price: 299,
    image: "https://images.unsplash.com/photo-1604503462715-d8c9b7f5f0b8?auto=format&fit=crop&w=900&q=80",
    description: "Fast-heating electric geyser for hot showers and everyday comfort."
  },
  {
    id: "water-purifier",
    name: "RO Water Purifier",
    category: "appliance",
    tag: "Kitchen",
    price: 349,
    image: "https://images.unsplash.com/photo-1582719478250-9aaaea1c1a3d?auto=format&fit=crop&w=900&q=80",
    description: "Compact RO purifier with mineral enhancement for clean drinking water."
  },
  {
    id: "air-purifier",
    name: "HEPA Air Purifier",
    category: "appliance",
    tag: "Living room",
    price: 329,
    image: "https://images.unsplash.com/photo-1511415512301-b76a0db0a93b?auto=format&fit=crop&w=900&q=80",
    description: "Air purifier with HEPA filter to reduce dust, pollen, and indoor pollutants."
  },
  {
    id: "wardrobe",
    name: "Modular Wardrobe",
    category: "furniture",
    tag: "Bedroom",
    price: 549,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    description: "Custom modular wardrobe with shelves, hanging space, and sliding doors."
  },
  {
    id: "almirah",
    name: "Classic Almirah",
    category: "furniture",
    tag: "Bedroom",
    price: 469,
    image: "https://images.unsplash.com/photo-1567016432779-0d09c333862c?auto=format&fit=crop&w=900&q=80",
    description: "Sturdy almirah with lockable doors for secure clothes and storage."
  }
];

const storageKey = "rentease-app-state";
const defaultState = {
  activeCategory: "all",
  duration: 6,
  location: "Bengaluru",
  sort: "featured",
  bundle: {
    sofa: 1,
    fridge: 1
  }
};

const productGrid = document.querySelector("#productGrid");
const selectedList = document.querySelector("#selectedList");
const itemCount = document.querySelector("#itemCount");
const monthlyTotal = document.querySelector("#monthlyTotal");
const depositTotal = document.querySelector("#depositTotal");
const discountLabel = document.querySelector("#discountLabel");
const searchInput = document.querySelector("#searchInput");
const durationSelect = document.querySelector("#durationSelect");
const locationInput = document.querySelector("#locationInput");
const sortSelect = document.querySelector("#sortSelect");
const tabs = document.querySelectorAll(".tab");
const leadForm = document.querySelector(".lead-form");
const checkoutButton = document.querySelector("#checkoutButton");
const clearButton = document.querySelector("#clearButton");
const catalogStatus = document.querySelector("#catalogStatus");
const checkoutTitle = document.querySelector("#checkoutTitle");
const checkoutCopy = document.querySelector("#checkoutCopy");
const checkoutPreview = document.querySelector("#checkoutPreview");
const formStatus = document.querySelector("#formStatus");

let state = loadState();

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey));
    return { ...defaultState, ...stored, bundle: { ...defaultState.bundle, ...stored?.bundle } };
  } catch {
    return { ...defaultState, bundle: { ...defaultState.bundle } };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

const formatCurrency = (value) => `Rs. ${value.toLocaleString("en-IN")}`;

function getDiscountRate() {
  if (state.duration >= 12) return 0.1;
  if (state.duration >= 6) return 0.05;
  return 0;
}

function getBundleProducts() {
  return products
    .filter((product) => state.bundle[product.id])
    .map((product) => ({ ...product, quantity: state.bundle[product.id] }));
}

function getTotals() {
  const selectedProducts = getBundleProducts();
  const subtotal = selectedProducts.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const discountRate = getDiscountRate();
  const monthly = Math.round(subtotal * (1 - discountRate));
  const deposit = Math.round(monthly * 1.5);
  const items = selectedProducts.reduce((sum, product) => sum + product.quantity, 0);

  return { selectedProducts, subtotal, discountRate, monthly, deposit, items };
}

function filteredProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchesCategory = state.activeCategory === "all" || product.category === state.activeCategory;
    const matchesSearch = [product.name, product.tag, product.description]
      .join(" ")
      .toLowerCase()
      .includes(query);
    return matchesCategory && matchesSearch;
  });

  return [...filtered].sort((a, b) => {
    if (state.sort === "price-low") return a.price - b.price;
    if (state.sort === "price-high") return b.price - a.price;
    return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id);
  });
}

function renderProducts() {
  const items = filteredProducts();

  catalogStatus.textContent = `${items.length} item${items.length === 1 ? "" : "s"} available for ${state.location || "your location"}.`;
  productGrid.innerHTML = items.length
    ? items.map((product) => {
      const quantity = state.bundle[product.id] || 0;
      return `
        <article class="product-card">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <div class="product-body">
            <div class="product-meta">
              <span>${product.tag}</span>
              <span>${product.category}</span>
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price-row">
              <span class="price">${formatCurrency(product.price)}/mo</span>
              <button class="add-button ${quantity ? "selected" : ""}" type="button" data-action="add" data-id="${product.id}">
                ${quantity ? `Added x${quantity}` : "Add"}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("")
    : `<p class="muted empty-state">No rentals match that search yet.</p>`;
}

function renderSummary() {
  const totals = getTotals();

  selectedList.innerHTML = totals.selectedProducts.length
    ? totals.selectedProducts.map((product) => `
      <div class="selected-item">
        <div>
          <span>${product.name}</span>
          <small>${formatCurrency(product.price)} each</small>
        </div>
        <div class="quantity-control" aria-label="${product.name} quantity">
          <button type="button" data-action="remove" data-id="${product.id}" aria-label="Remove one ${product.name}">-</button>
          <strong>${product.quantity}</strong>
          <button type="button" data-action="add" data-id="${product.id}" aria-label="Add one ${product.name}">+</button>
        </div>
      </div>
    `).join("")
    : `<span class="muted">Add products to build your rental bundle.</span>`;

  itemCount.textContent = totals.items;
  discountLabel.textContent = `${Math.round(totals.discountRate * 100)}%`;
  monthlyTotal.textContent = formatCurrency(totals.monthly);
  depositTotal.textContent = formatCurrency(totals.deposit);
  checkoutButton.disabled = !totals.items;
  clearButton.disabled = !totals.items;
}

function renderCheckout() {
  const totals = getTotals();
  const names = totals.selectedProducts.map((product) => `${product.quantity} x ${product.name}`);

  checkoutTitle.textContent = totals.items
    ? `${totals.items} item bundle for ${formatCurrency(totals.monthly)}/month`
    : "Ready when your bundle is";
  checkoutCopy.textContent = totals.items
    ? `${state.duration}-month plan in ${state.location || "your location"} with ${formatCurrency(totals.deposit)} refundable deposit.`
    : "Your selected items, delivery location, duration, monthly rent, and deposit will be attached to the callback request.";
  checkoutPreview.innerHTML = totals.items
    ? names.map((name) => `<span>${name}</span>`).join("")
    : `<span>No items selected yet</span>`;
}

function syncControls() {
  durationSelect.value = String(state.duration);
  locationInput.value = state.location;
  sortSelect.value = state.sort;
  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.category === state.activeCategory);
  });
}

function changeQuantity(id, amount) {
  const current = state.bundle[id] || 0;
  const next = Math.max(0, Math.min(9, current + amount));

  if (next) {
    state.bundle[id] = next;
  } else {
    delete state.bundle[id];
  }

  saveState();
  render();
}

function render() {
  syncControls();
  renderProducts();
  renderSummary();
  renderCheckout();
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const amount = button.dataset.action === "add" ? 1 : -1;
  changeQuantity(button.dataset.id, amount);
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    state.activeCategory = tab.dataset.category;
    saveState();
    render();
  });
});

searchInput.addEventListener("input", renderProducts);

durationSelect.addEventListener("change", () => {
  state.duration = Number(durationSelect.value);
  saveState();
  render();
});

locationInput.addEventListener("input", () => {
  state.location = locationInput.value.trim();
  saveState();
  renderProducts();
  renderCheckout();
});

sortSelect.addEventListener("change", () => {
  state.sort = sortSelect.value;
  saveState();
  renderProducts();
});

checkoutButton.addEventListener("click", () => {
  document.querySelector("#plans").scrollIntoView({ behavior: "smooth" });
});

clearButton.addEventListener("click", () => {
  state.bundle = {};
  saveState();
  render();
});

leadForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const totals = getTotals();
  const button = leadForm.querySelector("button");

  if (!totals.items) {
    formStatus.textContent = "Add at least one rental item before requesting checkout.";
    return;
  }

  button.textContent = "Request received";
  formStatus.textContent = `Saved request for ${totals.items} item${totals.items === 1 ? "" : "s"} in ${state.location || "your location"}.`;

  window.setTimeout(() => {
    button.textContent = "Submit request";
    leadForm.reset();
  }, 1800);
});

render();
