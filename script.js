// ─── DATA PRODUK ───
    const products = [
      {
        id: 1, stock: 24, name: "Jardin Nocturne", house: "SILLAGE Collection Noire", category: "floral",
        price: 850000, badge: "new", badgeLabel: "Baru",
        desc: "Taman malam yang mekar dalam gelap. Komposisi bunga jasmin Sambac dari Jawa berpadu dengan mawar Turki dan iris biru — dibalut misteri cendana hangat.",
        notes: { top: "Jasmin, Bergamot", heart: "Mawar, Iris", base: "Cendana, Musk" },
        volumes: ["30ml", "50ml", "100ml"],
        img: "https://i.pinimg.com/736x/34/91/14/349114f6dbe2d32a6ff452624f487583.jpg"
      },
      {
        id: 2, stock: 8, name: "Cedar Amber", house: "SILLAGE Bois Précieux", category: "woody",
        price: 1200000, badge: "ltd", badgeLabel: "Terbatas",
        desc: "Kedalaman kayu cendana Mysore yang langka, diintensifkan oleh vetiver Haiti dan ambre keemasan. Wewangian untuk mereka yang menghargai kesunyian.",
        notes: { top: "Cedarwood, Leather", heart: "Cedar, Amber, Vanilla", base: "Vetiver, Ambre" },
        volumes: ["30ml", "50ml", "100ml"],
        img: "https://i.pinimg.com/736x/df/7f/52/df7f52d00c7100458d60aa622398296e.jpg"
      },
      {
        id: 3, stock: 0, name: "Eau de Paradis", house: "SILLAGE Lumière", category: "fresh",
        price: 650000, oldPrice: 780000, badge: "sale", badgeLabel: "Sale",
        desc: "Percikan segar citrus Mediterania yang dibawa angin laut. Neroli Italia berpadu dengan petitgrain dan ujung ambre putih yang hangat.",
        notes: { top: "Bergamot, Neroli", heart: "Petitgrain, Bunga Lemon", base: "Ambre Putih, Musk" },
        volumes: ["30ml", "50ml", "100ml"],
        img: "https://i.pinimg.com/736x/1f/5d/b2/1f5db21565ab082f6b388945d58444a9.jpg"
      },
      {
        id: 4, stock: 32, name: "Rose de Minuit", house: "SILLAGE Collection Noire", category: "floral",
        price: 950000, badge: null,
        desc: "Mawar tengah malam yang intens dan sensual. Mawar Bulgaria kualitas absolut berpadu dengan patchouli gelap dan labdanum — sebuah romansa dalam botol.",
        notes: { top: "Aldehyde, Bergamot", heart: "Mawar Bulgaria, Peony", base: "Patchouli, Labdanum" },
        volumes: ["30ml", "50ml", "100ml"],
        img: "https://i.pinimg.com/1200x/b8/96/51/b896511e23459cf8c707ca5b08378cd8.jpg"
      },
      {
        id: 5, stock: 5, name: "Oud Impérial", house: "SILLAGE Mystique Orient", category: "oriental",
        price: 1650000, badge: "ltd", badgeLabel: "Terbatas",
        desc: "Oud Laos grade premium dipadukan dengan bunga melati dan rempah saffron Iran. Keanggunan Timur yang mewah dan membekas lama di kulit.",
        notes: { top: "Saffron, Kayu Manis", heart: "Oud, Melati", base: "Ambre, Musk Putih" },
        volumes: ["30ml", "50ml", "100ml"],
        img: "https://i.pinimg.com/736x/be/51/be/be51be1aa3c7f9795e6e5fc033423530.jpg"
      },
      {
        id: 6, stock: 40, name: "Vétiver Atlantique", house: "SILLAGE Terroir", category: "woody",
        price: 780000, badge: "new", badgeLabel: "Baru",
        desc: "Vetiver Haiti yang berasap dan earthy, disinari oleh grapefruit segar dan petisi cedar. Maskulin, elemental, dan tak lekang oleh waktu.",
        notes: { top: "Grapefruit, Teh Hijau", heart: "Vetiver, Cedar", base: "Rokok, Kulit" },
        volumes: ["30ml", "50ml", "100ml"],
        img: "https://i.pinimg.com/736x/83/75/08/83750865e24b72482bf97587590521f5.jpg"
      },
      {
        id: 7, stock: 0, name: "Ambre Solaire", house: "SILLAGE Mystique Orient", category: "oriental",
        price: 720000, oldPrice: 850000, badge: "sale", badgeLabel: "Sale",
        desc: "Kehangatan matahari terakhir musim panas. Vanila Tahiti, benzoin resin, dan labdanum krem menciptakan wewangian yang memanjakan dan adiktif.",
        notes: { top: "Jeruk Darah, Kardamom", heart: "Benzoin, Iris", base: "Vanila, Labdanum, Ambre" },
        volumes: ["30ml", "50ml", "100ml"],
        img: "https://i.pinimg.com/736x/24/10/c2/2410c2b382a8b86971460971cb4a9e05.jpg"
      },
      {
        id: 8, stock: 18, name: "Muguet Dew", house: "SILLAGE Lumière", category: "floral",
        price: 580000, badge: null,
        desc: "Bunga lili lembah di pagi yang basah embun. Kesederhanaan yang sangat indah — bersih, feminin, dan menyegarkan jiwa dengan cara yang paling lembut.",
        notes: { top: "Embun Pagi, Pir", heart: "Lili Lembah, Magnolia", base: "Musk Bersih, Kayu Cedar" },
        volumes: ["30ml", "50ml", "100ml"],
        img: "https://i.pinimg.com/1200x/8c/bc/45/8cbc45b0f74244f053afcd59abc223ee.jpg"
      },
      {
        id: 9, stock: 27, name: "Café Noir", house: "SILLAGE Gourmand", category: "oriental",
        price: 890000, badge: null,
        desc: "Biji kopi Ethiopia single-origin bertemu dengan coklat gelap dan tonka. Wewangian yang mengundang dan menggoda — seperti espresso pertama di pagi hari.",
        notes: { top: "Kopi, Kakao", heart: "Tonka, Vanilla", base: "Kayu Hitam, Musk" },
        volumes: ["30ml", "50ml", "100ml"],
        img: "https://i.pinimg.com/736x/ff/7f/45/ff7f45951d908355ccbf95acb88c65db.jpg"
      },
      {
        id: 10, stock: 15, name: "Aqua Celeste", house: "SILLAGE Lumière", category: "fresh",
        price: 620000, badge: "new", badgeLabel: "Baru",
        desc: "Langit terbuka dan angin laut. Ozonic notes yang bersih, rumput laut, dan ambre abu-abu menciptakan wewangian yang bebas dan tanpa batas.",
        notes: { top: "Ozonic, Grapefruit", heart: "Rumput Laut, Angin Laut", base: "Ambre Abu, Musk" },
        volumes: ["30ml", "50ml", "100ml"],
        img: "https://i.pinimg.com/736x/2c/15/b1/2c15b1877c5087ce36438842b73ca690.jpg"
      }
    ];

    // ─── STOCK OVERRIDES (persisted admin edits) ───
    (function applyStoredStock() {
      try {
        const saved = JSON.parse(localStorage.getItem('sillage_stock') || '{}');
        products.forEach(p => {
          if (Object.prototype.hasOwnProperty.call(saved, p.id)) {
            p.stock = saved[p.id];
          }
        });
      } catch (e) { /* abaikan data stok tersimpan yang rusak */ }
    })();

    // ─── STATE ───
    let cart = JSON.parse(localStorage.getItem('sillage_cart') || '[]');
    let currentFilter = 'all';
    let currentProduct = null;
    let currentVolume = '';

    // ─── BOTTLE SVG ───
    function bottleSVG(p, size = "100%") {
      return `<svg width="${size}" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg${p.id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${p.color1}"/>
        <stop offset="100%" stop-color="${p.color2}"/>
      </linearGradient>
      <linearGradient id="bottle${p.id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${p.accentColor}" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="${p.accentColor}" stop-opacity="0.08"/>
      </linearGradient>
    </defs>
    <rect x="35" y="55" width="50" height="120" rx="3" fill="url(#bottle${p.id})" stroke="${p.accentColor}" stroke-width="0.7" stroke-opacity="0.5"/>
    <rect x="38" y="58" width="44" height="112" rx="2" fill="none" stroke="${p.accentColor}" stroke-width="0.3" stroke-opacity="0.2"/>
    <rect x="42" y="35" width="36" height="22" rx="2" fill="${p.accentColor}" fill-opacity="0.15" stroke="${p.accentColor}" stroke-width="0.6" stroke-opacity="0.6"/>
    <rect x="50" y="20" width="20" height="16" rx="1.5" fill="${p.accentColor}" fill-opacity="0.2" stroke="${p.accentColor}" stroke-width="0.7"/>
    <rect x="54" y="12" width="12" height="9" rx="1" fill="${p.accentColor}" fill-opacity="0.4"/>
    <circle cx="60" cy="10" r="4" fill="${p.accentColor}" fill-opacity="0.5"/>
    <text x="60" y="125" text-anchor="middle" fill="${p.accentColor}" font-family="serif" font-size="5" opacity="0.7" letter-spacing="2">SILLAGE</text>
    <text x="60" y="135" text-anchor="middle" fill="${p.accentColor}" font-family="serif" font-size="3.5" opacity="0.5" letter-spacing="1">${p.name.toUpperCase()}</text>
    <rect x="42" y="142" width="36" height="18" rx="1" fill="${p.accentColor}" fill-opacity="0.08" stroke="${p.accentColor}" stroke-width="0.4" stroke-opacity="0.3"/>
  </svg>`;
    }

    // ─── STOCK DISPLAY HELPER ───
    function stockBadgeHTML(stock) {
      if (stock <= 0) return `<div class="stock-badge out">Stok Habis</div>`;
      if (stock <= 5) return `<div class="stock-badge low">Sisa ${stock} — stok terbatas</div>`;
      return `<div class="stock-badge">Stok tersedia: ${stock}</div>`;
    }

    // ─── RENDER PRODUCTS ───
    function renderProducts(list) {
      const grid = document.getElementById('productGrid');
      if (!list.length) {
        grid.innerHTML = `<div class="no-results">Tidak ada parfum yang sesuai dengan filter Anda.</div>`;
        return;
      }
      grid.innerHTML = list.map(p => `
    <div class="product-card" onclick="openModal(${p.id})">
      <div class="card-image">
        <img class="product-photo" src="${p.img}" alt="${p.name}" loading="lazy">
        ${bottleSVG(p, '55%')}
        ${p.badge ? `<span class="card-badge badge-${p.badge}">${p.badgeLabel}</span>` : ''}
        <div class="card-overlay">
          <button class="quick-view-btn" onclick="event.stopPropagation(); openModal(${p.id})">Detail Produk</button>
        </div>
      </div>
      <div class="card-body">
        <div class="card-category">${p.category}</div>
        <div class="card-name">${p.name}</div>
        <div class="card-notes">${p.notes.top} · ${p.notes.heart}</div>
        ${stockBadgeHTML(p.stock)}
        <div class="card-footer">
          <div class="card-price">
            ${p.oldPrice ? `<span class="old-price">${formatRp(p.oldPrice)}</span>` : ''}
            ${formatRp(p.price)}
          </div>
          <button class="add-btn" onclick="event.stopPropagation(); quickAdd(${p.id})" title="Tambah ke Keranjang" ${p.stock <= 0 ? 'disabled' : ''}>+</button>
        </div>
      </div>
    </div>
  `).join('');
    }

    function filterProducts() {
      const q = document.getElementById('searchInput').value.toLowerCase();
      const price = document.getElementById('priceFilter').value;
      let list = products.filter(p => {
        const matchCat = currentFilter === 'all' || p.category === currentFilter;
        const matchSearch = p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.notes.top.toLowerCase().includes(q) ||
          p.notes.heart.toLowerCase().includes(q);
        let matchPrice = true;
        if (price === 'low') matchPrice = p.price < 500000;
        else if (price === 'mid') matchPrice = p.price >= 500000 && p.price <= 1000000;
        else if (price === 'high') matchPrice = p.price > 1000000;
        return matchCat && matchSearch && matchPrice;
      });
      renderProducts(list);
      // GA event
      if (q) gtag('event', 'search', { search_term: q });
    }

    function setCategory(el, cat) {
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      el.classList.add('active');
      currentFilter = cat;
      filterProducts();
    }

    // ─── MODAL ───
    function openModal(id) {
      const p = products.find(x => x.id === id);
      currentProduct = p;
      document.getElementById('modalImage').innerHTML =
        `<img class="product-photo" src="${p.img}" alt="${p.name}" loading="lazy">` + bottleSVG(p, '65%');
      document.getElementById('modalCategory').textContent = p.category.toUpperCase();
      document.getElementById('modalName').textContent = p.name;
      document.getElementById('modalHouse').textContent = p.house;
      document.getElementById('modalPrice').textContent = formatRp(p.price);
      document.getElementById('modalOldPrice').textContent = p.oldPrice ? formatRp(p.oldPrice) : '';
      document.getElementById('modalDesc').textContent = p.desc;
      document.getElementById('noteTop').textContent = p.notes.top;
      document.getElementById('noteHeart').textContent = p.notes.heart;
      document.getElementById('noteBase').textContent = p.notes.base;
      document.getElementById('modalQty').value = 1;
      const volOpts = p.volumes.map((v, i) =>
        `<button class="vol-btn ${i === 0 ? 'active' : ''}" onclick="selectVolume(this,'${v}')">${v}</button>`
      ).join('');
      document.getElementById('volumeOptions').innerHTML = volOpts;
      currentVolume = p.volumes[0];
      const modalStockEl = document.getElementById('modalStock');
      if (modalStockEl) modalStockEl.innerHTML = stockBadgeHTML(p.stock);
      const addBtn = document.querySelector('.modal-add-btn');
      if (addBtn) {
        addBtn.disabled = p.stock <= 0;
        addBtn.textContent = p.stock <= 0 ? 'Stok Habis' : 'Tambah ke Keranjang';
      }
      document.getElementById('productModal').classList.add('open');
      document.body.style.overflow = 'hidden';
      // GA event
      gtag('event', 'view_item', { item_id: p.id, item_name: p.name, price: p.price });
    }

    function closeModal(e) {
      if (e.target === document.getElementById('productModal')) closeModalDirect();
    }
    function closeModalDirect() {
      document.getElementById('productModal').classList.remove('open');
      document.body.style.overflow = '';
    }

    function selectVolume(el, v) {
      document.querySelectorAll('.vol-btn').forEach(b => b.classList.remove('active'));
      el.classList.add('active');
      currentVolume = v;
    }

    function changeQty(d) {
      const inp = document.getElementById('modalQty');
      const val = Math.max(1, parseInt(inp.value) + d);
      inp.value = val;
    }

    function addFromModal() {
      const qty = parseInt(document.getElementById('modalQty').value);
      addToCart(currentProduct, currentVolume, qty);
      closeModalDirect();
    }

    // ─── CART ───
    function quickAdd(id) {
      const p = products.find(x => x.id === id);
      if (p.stock <= 0) { showToast('Maaf, stok produk ini sedang habis.'); return; }
      addToCart(p, p.volumes[0], 1);
    }

    function addToCart(p, vol, qty = 1) {
      if (p.stock <= 0) { showToast('Maaf, stok produk ini sedang habis.'); return; }
      const key = `${p.id}-${vol}`;
      const existing = cart.find(x => x.key === key);
      const alreadyInCart = existing ? existing.qty : 0;
      if (alreadyInCart + qty > p.stock) {
        showToast(`Stok tidak mencukupi. Sisa stok: ${p.stock}.`);
        qty = Math.max(0, p.stock - alreadyInCart);
        if (qty <= 0) return;
      }
      if (existing) {
        existing.qty += qty;
      } else {
        cart.push({ key, id: p.id, name: p.name, vol, price: p.price, qty });
      }
      saveCart();
      updateCartUI();
      showToast(`${p.name} ditambahkan ke keranjang`);
      // GA event
      gtag('event', 'add_to_cart', { item_id: p.id, item_name: p.name, price: p.price, quantity: qty });
    }

    function removeFromCart(key) {
      cart = cart.filter(x => x.key !== key);
      saveCart();
      updateCartUI();
    }

    function updateItemQty(key, d) {
      const item = cart.find(x => x.key === key);
      if (!item) return;
      item.qty = Math.max(1, item.qty + d);
      saveCart();
      updateCartUI();
    }

    function saveCart() {
      localStorage.setItem('sillage_cart', JSON.stringify(cart));
    }

    function getTotal() {
      return cart.reduce((s, x) => s + x.price * x.qty, 0);
    }

    function updateCartUI() {
      const count = cart.reduce((s, x) => s + x.qty, 0);
      const countEl = document.getElementById('cartCount');
      countEl.textContent = count;
      countEl.classList.toggle('visible', count > 0);

      const total = getTotal();
      document.getElementById('cartTotal').textContent = formatRp(total);

      const itemsEl = document.getElementById('cartItems');
      if (!cart.length) {
        itemsEl.innerHTML = `<div class="cart-empty">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
      Keranjang Anda masih kosong
    </div>`;
      } else {
        itemsEl.innerHTML = cart.map(item => {
          const p = products.find(x => x.id === item.id);
          return `<div class="cart-item">
        <div class="cart-item-img"><img class="product-photo" src="${p.img}" alt="${item.name}" loading="lazy">${bottleSVG(p, '50px')}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-vol">${item.vol}</div>
          <div class="cart-item-price">${formatRp(item.price * item.qty)}</div>
          <div class="item-qty-row">
            <button class="item-qty-btn" onclick="updateItemQty('${item.key}', -1)">−</button>
            <span class="item-qty-num">${item.qty}</span>
            <button class="item-qty-btn" onclick="updateItemQty('${item.key}', 1)">+</button>
            <button class="item-remove" onclick="removeFromCart('${item.key}')">Hapus</button>
          </div>
        </div>
      </div>`;
        }).join('');
      }
    }

    function openCart() {
      document.getElementById('cartDrawer').classList.add('open');
      document.getElementById('overlayTint').classList.add('visible');
      document.body.style.overflow = 'hidden';
    }
    function closeCart() {
      document.getElementById('cartDrawer').classList.remove('open');
      document.getElementById('overlayTint').classList.remove('visible');
      document.body.style.overflow = '';
    }

    // ─── CHECKOUT ───
    function openCheckout() {
      smoothScrollTo('#checkout');
    }

    function goCheckout() {
      closeCart();
      document.getElementById('checkout').style.display = 'block';
      document.getElementById('checkout').classList.add('visible');
      updateSummary();
      setTimeout(() => smoothScrollTo('#checkout'), 100);
      gtag('event', 'begin_checkout', { value: getTotal(), currency: 'IDR' });
    }

    function updateSummary() {
      const summaryItems = document.getElementById('summaryItems');
      summaryItems.innerHTML = cart.map(item => `
    <div class="summary-item">
      <div>
        <div class="summary-item-name">${item.name}</div>
        <div class="summary-item-qty">${item.vol} × ${item.qty}</div>
      </div>
      <div class="summary-item-price">${formatRp(item.price * item.qty)}</div>
    </div>
  `).join('');
      const sub = getTotal();
      const tax = Math.round(sub * 0.11);
      const total = sub + 25000 + tax;
      document.getElementById('summarySubtotal').textContent = formatRp(sub);
      document.getElementById('summaryTax').textContent = formatRp(tax);
      document.getElementById('summaryTotal').textContent = formatRp(total);
    }

    function selectPayment(el) {
      document.querySelectorAll('.pay-option').forEach(x => x.classList.remove('selected'));
      el.classList.add('selected');
      const val = el.querySelector('input').value;
      document.getElementById('cardFields').style.display = val === 'card' ? 'block' : 'none';
    }

    function formatCard(inp) {
      let v = inp.value.replace(/\D/g, '').substring(0, 16);
      inp.value = v.replace(/(.{4})/g, '$1 ').trim();
    }
    function formatExpiry(inp) {
      let v = inp.value.replace(/\D/g, '').substring(0, 4);
      if (v.length > 2) v = v.substring(0, 2) + '/' + v.substring(2);
      inp.value = v;
    }

    function validateCheckout() {
      const fields = [
        { id: 'firstName', label: 'Nama depan' },
        { id: 'lastName', label: 'Nama belakang' },
        { id: 'email', label: 'Email', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
        { id: 'phone', label: 'Nomor telepon' },
        { id: 'address', label: 'Alamat' },
        { id: 'city', label: 'Kota' },
        { id: 'postal', label: 'Kode pos' },
        { id: 'province', label: 'Provinsi' },
      ];
      let valid = true;
      fields.forEach(f => {
        const el = document.getElementById(f.id);
        const val = el.value.trim();
        if (!val || (f.pattern && !f.pattern.test(val))) {
          el.classList.add('error');
          valid = false;
          el.addEventListener('input', () => el.classList.remove('error'), { once: true });
        }
      });
      const payType = document.querySelector('input[name="payment"]:checked').value;
      if (payType === 'card') {
        const cardEl = document.getElementById('cardNum');
        if (cardEl.value.replace(/\s/g, '').length < 16) {
          cardEl.classList.add('error'); valid = false;
          cardEl.addEventListener('input', () => cardEl.classList.remove('error'), { once: true });
        }
      }
      return valid;
    }

    function submitOrder() {
      if (!cart.length) { showToast('Keranjang Anda kosong!'); return; }
      if (!validateCheckout()) { showToast('Mohon lengkapi semua data yang diperlukan.'); return; }

      const orderId = 'SLG-' + Date.now().toString(36).toUpperCase();
      document.getElementById('orderId').textContent = `Order #${orderId}`;
      document.getElementById('successModal').classList.add('open');
      document.body.style.overflow = 'hidden';
      // GA purchase event
      gtag('event', 'purchase', {
        transaction_id: orderId, value: getTotal(), currency: 'IDR',
        items: cart.map(x => ({ item_id: x.id, item_name: x.name, price: x.price, quantity: x.qty }))
      });
      // Kurangi stok sesuai jumlah yang dibeli
      const savedStock = JSON.parse(localStorage.getItem('sillage_stock') || '{}');
      cart.forEach(item => {
        const p = products.find(x => x.id === item.id);
        if (p) {
          p.stock = Math.max(0, p.stock - item.qty);
          savedStock[p.id] = p.stock;
        }
      });
      localStorage.setItem('sillage_stock', JSON.stringify(savedStock));

      cart = []; saveCart(); updateCartUI();
      filterProducts();
    }

    function closeSuccess() {
      document.getElementById('successModal').classList.remove('open');
      document.getElementById('checkout').style.display = 'none';
      document.body.style.overflow = '';
      smoothScrollTo('#home');
    }

    // ─── ADMIN ───
    function openAdminEntry() {
      openAdminPanel();
    }

    function openAdminPanel() {
      renderStockTable();
      document.getElementById('adminPanelModal').classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeAdminPanel() {
      document.getElementById('adminPanelModal').classList.remove('open');
      document.body.style.overflow = '';
    }

    function closeAdminPanelOverlay(e) {
      if (e.target === document.getElementById('adminPanelModal')) closeAdminPanel();
    }

    function persistStock(id, newStock) {
      const saved = JSON.parse(localStorage.getItem('sillage_stock') || '{}');
      saved[id] = newStock;
      localStorage.setItem('sillage_stock', JSON.stringify(saved));
    }

    function refreshStockEverywhere(id) {
      filterProducts();
      if (currentProduct && currentProduct.id === id) openModal(id);
    }

    function renderStockTable() {
      const table = document.getElementById('stockTable');
      table.innerHTML = products.map(p => `
    <div class="stock-row" id="stockRow-${p.id}">
      <div class="stock-row-top">
        <div class="stock-thumb"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
        <div class="stock-row-info">
          <div class="stock-name">${p.name}</div>
          <div class="stock-house">${p.house}</div>
        </div>
        <div class="stock-current-wrap">
          <span class="stock-current-label">Stok saat ini</span>
          <span class="stock-current" id="stockCurrent-${p.id}">${p.stock}</span>
        </div>
      </div>
      <div class="stock-row-actions">
        <div class="stock-action-group">
          <label>Tambah Stok</label>
          <div class="stock-action-controls">
            <input class="stock-input" type="number" min="1" step="1" placeholder="Jumlah" id="stockAddInput-${p.id}">
            <button class="stock-save-btn" onclick="addStock(${p.id})">+ Tambah</button>
          </div>
        </div>
        <div class="stock-action-group">
          <label>Atur Stok Manual</label>
          <div class="stock-action-controls">
            <input class="stock-input" type="number" min="0" step="1" value="${p.stock}" id="stockSetInput-${p.id}"
              onkeydown="if(event.key==='Enter') setStock(${p.id})">
            <button class="stock-save-btn" onclick="setStock(${p.id})">Simpan</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
    }

    function addStock(id) {
      const input = document.getElementById(`stockAddInput-${id}`);
      const amount = parseInt(input.value, 10);
      if (isNaN(amount) || amount <= 0) {
        showToast('Masukkan jumlah stok yang valid untuk ditambahkan.');
        return;
      }
      const p = products.find(x => x.id === id);
      p.stock += amount;
      persistStock(id, p.stock);

      input.value = '';
      document.getElementById(`stockCurrent-${id}`).textContent = p.stock;
      document.getElementById(`stockSetInput-${id}`).value = p.stock;
      refreshStockEverywhere(id);
      showToast(`Berhasil menambahkan ${amount} stok "${p.name}". Total stok: ${p.stock}`);
    }

    function setStock(id) {
      const input = document.getElementById(`stockSetInput-${id}`);
      let newStock = parseInt(input.value, 10);
      if (isNaN(newStock) || newStock < 0) newStock = 0;
      input.value = newStock;

      const p = products.find(x => x.id === id);
      p.stock = newStock;
      persistStock(id, newStock);

      document.getElementById(`stockCurrent-${id}`).textContent = newStock;
      refreshStockEverywhere(id);
      showToast(`Stok "${p.name}" diatur menjadi ${newStock}`);
    }

    // ─── UTILS ───
    function formatRp(n) {
      return 'Rp ' + n.toLocaleString('id-ID');
    }

    function showToast(msg) {
      const t = document.getElementById('toast');
      t.textContent = msg;
      t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 3000);
    }

    function smoothScrollTo(sel) {
      const el = document.querySelector(sel);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function toggleMenu() {
      document.getElementById('mobileMenu').classList.toggle('open');
    }
    function closeMenu() {
      document.getElementById('mobileMenu').classList.remove('open');
    }

    // ─── NAVBAR SCROLL ───
    window.addEventListener('scroll', () => {
      document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
    });

    // ─── SCROLL REVEAL ───
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // ─── SMOKE CANVAS ───
    (function () {
      const canvas = document.getElementById('smokeCanvas');
      const ctx = canvas.getContext('2d');
      let W, H, particles = [];

      function resize() {
        W = canvas.width = canvas.offsetWidth;
        H = canvas.height = canvas.offsetHeight;
      }

      class Particle {
        constructor() { this.reset(); }
        reset() {
          this.x = W * 0.5 + (Math.random() - 0.5) * W * 0.3;
          this.y = H * 0.65 + Math.random() * H * 0.15;
          this.vx = (Math.random() - 0.5) * 0.4;
          this.vy = -(0.4 + Math.random() * 0.6);
          this.life = 0;
          this.maxLife = 200 + Math.random() * 150;
          this.size = 3 + Math.random() * 12;
          this.color = Math.random() > 0.5 ? '201,145,122' : '232,213,176';
        }
        update() {
          this.life++;
          this.x += this.vx + Math.sin(this.life * 0.03) * 0.3;
          this.y += this.vy;
          this.size += 0.08;
          if (this.life >= this.maxLife) this.reset();
        }
        draw() {
          const t = this.life / this.maxLife;
          const alpha = t < 0.1 ? t * 10 * 0.15 : t > 0.7 ? (1 - t) / 0.3 * 0.15 : 0.15;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${this.color},${alpha})`;
          ctx.fill();
        }
      }

      resize();
      window.addEventListener('resize', resize);
      for (let i = 0; i < 40; i++) {
        const p = new Particle();
        p.life = Math.random() * p.maxLife;
        particles.push(p);
      }

      function animate() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
      }
      animate();
    })();

    // ─── INIT ───
    renderProducts(products);
    updateCartUI();
