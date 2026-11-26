// 1. Kategoriyalar va mahsulotlar bazasi (Har bir bo'limda 12 tadan mahsulot)
const categories = [
    { id: "chizzi", name: "🧀 Chizzi Chizz", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&q=80" },
    { id: "lavash", name: "🌯 Lavash", img: "https://images.unsplash.com/photo-1642783944285-b33b18ef6c3b?w=500&q=80" },
    { id: "shaurma", name: "🥙 Shaurma", img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&q=80" },
    { id: "trindwich", name: "🥪 Trindwich", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=80" },
    { id: "kartoshka", name: "🍟 Kartoshka & Sneklar", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80" },
    { id: "ichimliklar", name: "🥤 Ichimliklar", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80" }
];

const productTemplates = {
    chizzi: [
        { name: "Chizzi Mol go‘shtli combo", price: 82000, desc: "4x pishloqli mol go‘shtli lavash, kartoshka fri va Pepsi 0.5L." },
        { name: "Chizzi Tovuq go‘shtli combo", price: 79000, desc: "4x pishloqli tovuq go‘shtli lavash, kartoshka fri va Pepsi 0.5L." },
        { name: "Chizzi Mol go‘shtli lavash L", price: 56000, desc: "Yumshoq mol go‘shti va 4 xil eritilgan pishloq uyg‘unligi." },
        { name: "Chizzi Tovuq go‘shtli lavash L", price: 52000, desc: "Maxsus marinadlangan tovuq go‘shti va 4x pishloqli sous." },
        { name: "Chizzi Mol go‘shtli qalampirli lavash L", price: 56000, desc: "Achchiq xalapeno qalampiri va 4x pishloqli mol go‘shtli lavash." },
        { name: "Chizzi Tovuq go‘shtli qalampirli lavash L", price: 52000, desc: "Achchiq ta'mni sevuvchilar uchun 4x pishloqli tovuqli lavash." },
        { name: "Chizzi Mol go‘shtli lavash M", price: 48000, desc: "O‘rtacha o‘lchamdagi 4x pishloqli mol go‘shtli lavash." },
        { name: "Chizzi Tovuq go‘shtli lavash M", price: 44000, desc: "O‘rtacha o‘lchamdagi 4x pishloqli tovuq go‘shtli lavash." },
        { name: "Chizzi Kartoshka Fri", price: 24000, desc: "Qarsildoq kartoshka fri ustida issiq 4x pishloqli sous." },
        { name: "Chizzi Naggetslar (8 dona)", price: 32000, desc: "Tovuq filesidan tayyorlangan naggetslar pishloqli sous bilan." },
        { name: "Chizzi Set Ikki kishilik", price: 115000, desc: "2 ta Chizzi lavash, 2 ta fri va 2 ta salqin ichimlik." },
        { name: "Chizzi Mini Box", price: 39000, desc: "Yengil tamaddi uchun mini pishloqli roll va fri." }
    ],
    lavash: [
        { name: "Mol go‘shtli lavash - L", price: 42000, desc: "Yupqa xamir, barra sabzavotlar, maxsus sous va mol go‘shti." },
        { name: "Mol go‘shtli pishloqli lavash - L", price: 45000, desc: "Klassik mol go‘shtli lavashga qo‘shilgan mayin pishloq bo‘lagi." },
        { name: "Tovuq go‘shtli lavash - L", price: 37000, desc: "Shirali tovuq go‘shti, pomidor, bodring va sarimsoqli sous." },
        { name: "Tovuq go‘shtli pishloqli lavash - L", price: 40000, desc: "Tovuq go‘shti va pishloqning mukammal kombinatsiyasi." },
        { name: "Mol go‘shtli qalampirli lavash - L", price: 42000, desc: "Achchiq qalampir va mol go‘shtli katta lavash." },
        { name: "Tovuq go‘shtli qalampirli lavash - L", price: 37000, desc: "Achchiq qalampirli tovuq go‘shtli lavash." },
        { name: "Macho lavash", price: 63000, desc: "Ikki hissa ko‘p go‘sht, fri va maxsus sousli gigant lavash." },
        { name: "Fitter lavash", price: 36000, desc: "Ko‘katlar va tovuq go‘shtidan tayyorlangan yengil lavash." },
        { name: "Mol go‘shtli lavash - M", price: 35000, desc: "O‘rtacha o‘lchamdagi klassik mol go‘shtli lavash." },
        { name: "Mol go‘shtli pishloqli lavash - M", price: 38000, desc: "O‘rtacha o‘lchamdagi pishloqli mol go‘shtli lavash." },
        { name: "Tovuq go‘shtli lavash - M", price: 31000, desc: "O‘rtacha o‘lchamdagi tovuq go‘shtli lavash." },
        { name: "Mol go‘shtli lavash - S", price: 26000, desc: "Kichik o‘lchamdagi mazali mol go‘shtli lavash." }
    ],
    shaurma: [
        { name: "Mol go‘shtli shaurma L", price: 39000, desc: "Qarsildoq bulochka ichida mol go‘shti, tuzlangan bodring va sous." },
        { name: "Tovuq go‘shtli shaurma L", price: 34000, desc: "Yumshoq bulochkada tovuq go‘shti va barra sabzavotlar." },
        { name: "Mol go‘shtli pishloqli shaurma L", price: 42000, desc: "Pishloq qo‘shilgan katta mol go‘shtli shaurma." },
        { name: "Tovuq go‘shtli pishloqli shaurma L", price: 37000, desc: "Pishloq qo‘shilgan katta tovuq go‘shtli shaurma." },
        { name: "Mol go‘shtli qalampirli shaurma L", price: 39000, desc: "Achchiq xalapeno bilan boyitilgan mol go‘shtli shaurma." },
        { name: "Tovuq go‘shtli qalampirli shaurma L", price: 34000, desc: "Achchiq sousli tovuq go‘shtli shaurma." },
        { name: "Macho shaurma", price: 60000, desc: "Juda och qolganlar uchun ikki barobar go‘shtli shaurma." },
        { name: "Mol go‘shtli shaurma M", price: 33000, desc: "O‘rtacha porsiyadagi klassik mol go‘shtli shaurma." },
        { name: "Tovuq go‘shtli shaurma M", price: 30000, desc: "O‘rtacha porsiyadagi klassik tovuq go‘shtli shaurma." },
        { name: "Mol go‘shtli qalampirli shaurma M", price: 33000, desc: "O‘rtacha porsiyadagi achchiq mol go‘shtli shaurma." },
        { name: "Donar Roll", price: 19000, desc: "Yengil tamaddi uchun ixcham shaurma-roll." },
        { name: "Go‘sht Roll", price: 39000, desc: "Ko‘p go‘shtli maxsus o‘ralgan roll." }
    ],
    trindwich: [
        { name: "Trindwich mol go‘shtidan", price: 43000, desc: "Qovurilgan tost noni ichida mol go‘shti va pishloq." },
        { name: "Trindwich tovuq go‘shtidan", price: 38000, desc: "Qarsildoq tost nonida tovuq go‘shti va Sezar sousi." },
        { name: "Macho trindwich", price: 65000, desc: "Katta o‘lchamli, ikki qavat go‘shtli trindwich." },
        { name: "Sezar Roll", price: 27000, desc: "Tovuq go‘shti, aysberg salati, parmezan va Sezar sousi." },
        { name: "Sub mol go‘shtidan", price: 27000, desc: "Uzunchoq bulochkada mol go‘shti va sabzavotlar." },
        { name: "Sub tovuq go‘shtidan", price: 24000, desc: "Uzunchoq bulochkada tovuq go‘shti va mayin sous." },
        { name: "Sub mol go‘shtidan pishloqli", price: 30000, desc: "Pishloqli mol go‘shtli sub sendvich." },
        { name: "Sub tovuq go‘shtidan pishloqli", price: 27000, desc: "Pishloqli tovuq go‘shtli sub sendvich." },
        { name: "Trindwich Combo Mol go‘shtli", price: 68000, desc: "Mol go‘shtli trindwich, fri va ichimlik." },
        { name: "Trindwich Combo Tovuq go‘shtli", price: 63000, desc: "Tovuq go‘shtli trindwich, fri va ichimlik." },
        { name: "Double Sub Mol go‘shtli", price: 38000, desc: "Ikki hissa mol go‘shtli to‘yimli sub." },
        { name: "Club Sendvich EVOS", price: 41000, desc: "Uch qavatli qarsildoq sendvich." }
    ],
    kartoshka: [
        { name: "Kartoshka fri S", price: 13000, desc: "Oltinrang qovurilgan kichik kartoshka fri." },
        { name: "Kartoshka fri M", price: 20000, desc: "O‘rtacha porsiyadagi issiq kartoshka fri." },
        { name: "Kartoshka fri L", price: 26000, desc: "Katta kompaniya uchun katta kartoshka fri." },
        { name: "Jaydari kartoshka", price: 21000, desc: "Ziravorlar bilan pechda pishirilgan po‘stli kartoshka." },
        { name: "Naggetslar, 4 dona", price: 15000, desc: "Tovuq filesidan tayyorlangan 4 dona naggets." },
        { name: "Naggetslar, 8 dona", price: 26000, desc: "Tovuq filesidan tayyorlangan 8 dona naggets." },
        { name: "Strips S", price: 13000, desc: "Qarsildoq qobiqdagi tovuq bo‘lakchalari (kichik)." },
        { name: "Strips L", price: 26000, desc: "Qarsildoq qobiqdagi tovuq bo‘lakchalari (katta)." },
        { name: "Sneck box", price: 82000, desc: "Fri, naggetslar, strips va souslardan iborat katta to‘plam." },
        { name: "Pishloqli yostiqchalar (6 dona)", price: 22000, desc: "Ichi eritilgan pishloqqa to‘la qarsildoq yostiqchalar." },
        { name: "Kartoshka shariklari", price: 19000, desc: "Yengil va qarsildoq kartoshka kroketlari." },
        { name: "Combo Fri + Sous", price: 23000, desc: "O‘rtacha fri va tanlovingizga ko‘ra maxsus sous." }
    ],
    ichimliklar: [
        { name: "Pepsi 0,5 L", price: 12000, desc: "Muzdek gazlangan Pepsi ichimligi (0.5 litr)." },
        { name: "Pepsi 1,5 L", price: 24000, desc: "Oila va do‘stlar davrasi uchun Pepsi (1.5 litr)." },
        { name: "Pepsi razliv 0.4 L", price: 10000, desc: "Stakanda quyma muzdek Pepsi." },
        { name: "Pepsi Zero razliv 0.4 L", price: 10000, desc: "Shakarsiz quyma Pepsi Zero." },
        { name: "Mirinda razliv 0.4 L", price: 10000, desc: "Apelsin ta'mli salqin Mirinda." },
        { name: "7up razliv 0.4 L", price: 10000, desc: "Limon va laym ta'mli tetiklashtiruvchi 7up." },
        { name: "Moxito klassik", price: 18000, desc: "Yalpiz va laym qo‘shilgan salqin kokteyl." },
        { name: "Qulupnayli Moxito", price: 18000, desc: "Yangi qulupnay siropi va yalpizli moxito." },
        { name: "Gazlanmagan suv 0.5L", price: 6000, desc: "Toza ichimlik suvi (0.5 litr)." },
        { name: "Olchali sharbat 1 L", price: 25000, desc: "Tabiiy olcha sharbati (1 litr)." },
        { name: "Apelsinli sharbat 1 L", price: 25000, desc: "Vitaminlarga boy apelsin sharbati (1 litr)." },
        { name: "Limonli ko‘k choy", price: 7000, desc: "Issiq ko‘k choy yangi limon bo‘lagi bilan." }
    ]
};

let allProducts = [];
let cart = [];

const ORDER_HISTORY_KEY = "evos-order-history";
const LATEST_ORDER_KEY = "evos-latest-order";
const CUSTOM_PRODUCTS_KEY = "evos-custom-products";

function loadCustomProducts() {
    try {
        return JSON.parse(localStorage.getItem(CUSTOM_PRODUCTS_KEY) || "[]");
    } catch {
        return [];
    }
}

function loadStoredOrders() {
    try {
        return JSON.parse(localStorage.getItem(ORDER_HISTORY_KEY) || "[]");
    } catch {
        return [];
    }
}

let orderHistory = loadStoredOrders();
let latestOrder = null;

try {
    latestOrder = JSON.parse(localStorage.getItem(LATEST_ORDER_KEY) || "null");
} catch {
    latestOrder = null;
}

// 2. Sahifani generatsiya qilish
function initMenu() {
    const sidebarMenu = document.getElementById("sidebar-menu");
    const mainContent = document.getElementById("main-content");
    sidebarMenu.replaceChildren();
    mainContent.replaceChildren();
    allProducts = [];
    let idCounter = 1;
    const customProducts = loadCustomProducts();

    categories.forEach((cat, index) => {
        // Chap menyuga qo'shish
        const li = document.createElement("li");
        li.innerHTML = `<a href="#${cat.id}" class="${index === 0 ? 'active' : ''}" onclick="setActiveNav(this)">${cat.name}</a>`;
        sidebarMenu.appendChild(li);

        // Asosiy qismga bo'lim qo'shish
        const section = document.createElement("section");
        section.className = "category-section";
        section.id = cat.id;

        let cardsHTML = `<h2 class="category-title">${cat.name}</h2><div class="products-grid">`;

        productTemplates[cat.id].forEach((item) => {
            const prodId = idCounter++;
            const imgUrl = `${cat.img}&sig=${prodId}`;
            const productObj = {
                id: prodId,
                category: cat.name,
                name: item.name,
                price: item.price,
                desc: item.desc,
                img: imgUrl
            };
            allProducts.push(productObj);

            cardsHTML += `
                <div class="product-card" onclick="openDetail(${prodId})">
                    <div>
                        <img src="${imgUrl}" alt="${item.name}" class="product-img" loading="lazy">
                        <h3 class="product-name">${item.name}</h3>
                    </div>
                    <div>
                        <div class="product-price">${formatPrice(item.price)}</div>
                        <button class="add-btn" onclick="addToCart(event, ${prodId})">Savatga</button>
                    </div>
                </div>
            `;
        });

        customProducts
            .filter(item => item.categoryId === cat.id)
            .forEach((item) => {
                const prodId = Number(item.id) || idCounter++;
                if (prodId >= idCounter) idCounter = prodId + 1;
                const productObj = {
                    id: prodId,
                    category: cat.name,
                    name: item.name,
                    price: Number(item.price),
                    desc: item.desc || "Admin tomonidan qo‘shilgan mahsulot.",
                    img: item.image
                };
                allProducts.push(productObj);

                cardsHTML += `
                    <div class="product-card" onclick="openDetail(${prodId})">
                        <div>
                            <img src="${item.image}" alt="${item.name}" class="product-img" loading="lazy">
                            <h3 class="product-name">${item.name}</h3>
                        </div>
                        <div>
                            <div class="product-price">${formatPrice(Number(item.price))}</div>
                            <button class="add-btn" onclick="addToCart(event, ${prodId})">Savatga</button>
                        </div>
                    </div>
                `;
            });

        cardsHTML += `</div>`;
        section.innerHTML = cardsHTML;
        mainContent.appendChild(section);
    });
}

// Narxni chiroyli formatlash
function formatPrice(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
}

// Chap menyuda aktiv tugmani belgilash
function setActiveNav(element) {
    document.querySelectorAll(".sidebar a").forEach(a => a.classList.remove("active"));
    element.classList.add("active");
}

// 3. Mahsulot ustiga bosganda Detail modalni ochish
function openDetail(prodId) {
    const product = allProducts.find(p => p.id === prodId);
    if (!product) return;

    document.getElementById("detail-img").src = product.img;
    document.getElementById("detail-title").innerText = product.name;
    document.getElementById("detail-desc").innerText = product.desc;
    document.getElementById("detail-price").innerText = formatPrice(product.price);

    const addBtn = document.getElementById("detail-add-btn");
    addBtn.onclick = function(e) {
        addToCart(e, product.id);
        closeModal("detail-modal");
    };

    document.getElementById("detail-modal").classList.add("open");
}

// Modalni yopish
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove("open");
}

function closeModalOnBg(event, modalId) {
    if (event.target.id === modalId) {
        closeModal(modalId);
    }
}

// 4. Savatga qo'shish funksiyasi
function addToCart(event, prodId) {
    if (event) event.stopPropagation();

    const product = allProducts.find(p => p.id === prodId);
    const existing = cart.find(item => item.id === prodId);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    showToast(`"${product.name}" savatga qo‘shildi!`);
}

// Savat soni va ko'rinishini yangilash
function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById("cart-count").innerText = totalCount;

    const container = document.getElementById("cart-items-container");
    const totalPriceEl = document.getElementById("cart-total-price");
    const orderForm = document.getElementById("order-form");

    if (cart.length === 0) {
        container.innerHTML = `<p class="empty-cart-msg">Savatingiz hozircha bo‘sh.</p>`;
        totalPriceEl.innerText = "0 so'm";
        orderForm.style.display = "none";
        return;
    }

    orderForm.style.display = "flex";
    let html = "";
    let totalSum = 0;

    cart.forEach(item => {
        totalSum += item.price * item.qty;
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${formatPrice(item.price)} x ${item.qty}</div>
                </div>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
    totalPriceEl.innerText = formatPrice(totalSum);
}

function changeQty(prodId, delta) {
    const itemIndex = cart.findIndex(i => i.id === prodId);
    if (itemIndex === -1) return;

    cart[itemIndex].qty += delta;
    if (cart[itemIndex].qty <= 0) {
        cart.splice(itemIndex, 1);
    }
    updateCartUI();
}

function openCart() {
    updateCartUI();
    document.getElementById("cart-modal").classList.add("open");
}

function openLatestOrder() {
    const receipt = document.getElementById("order-receipt-content");
    receipt.replaceChildren();

    if (!latestOrder) {
        const message = document.createElement("p");
        message.className = "no-orders-msg";
        message.textContent = "Hozircha buyurtmangiz yo‘q.";
        receipt.appendChild(message);
    } else {
        renderOrderReceipt(latestOrder);
    }

    document.getElementById("order-modal").classList.add("open");
}

function renderOrderReceipt(order) {
    const receipt = document.getElementById("order-receipt-content");
    receipt.replaceChildren();

    const orderNumber = document.createElement("p");
    orderNumber.className = "order-number";
    orderNumber.textContent = `Buyurtma raqami: ${order.number}`;
    receipt.appendChild(orderNumber);

    const items = document.createElement("div");
    items.className = "receipt-items";

    order.items.forEach(item => {
        const row = document.createElement("div");
        row.className = "receipt-item";

        const info = document.createElement("div");
        info.className = "receipt-item-info";
        const name = document.createElement("p");
        name.className = "receipt-item-name";
        name.textContent = item.name;
        const code = document.createElement("p");
        code.className = "receipt-item-code";
        code.textContent = `Mahsulot kodi: EVOS-${String(item.id).padStart(4, "0")}`;
        const quantity = document.createElement("p");
        quantity.className = "receipt-item-qty";
        quantity.textContent = `${item.qty} dona × ${formatPrice(item.price)}`;
        info.append(name, code, quantity);

        const price = document.createElement("p");
        price.className = "receipt-item-price";
        price.textContent = formatPrice(item.price * item.qty);
        row.append(info, price);
        items.appendChild(row);
    });

    const total = document.createElement("div");
    total.className = "receipt-total";
    const totalLabel = document.createElement("span");
    totalLabel.textContent = "Jami summa:";
    const totalPrice = document.createElement("span");
    totalPrice.textContent = formatPrice(order.total);
    total.append(totalLabel, totalPrice);

    const qrSection = document.createElement("div");
    qrSection.className = "receipt-qr";
    const qrImage = document.createElement("img");
    qrImage.alt = `Buyurtma ${order.number} uchun QR-kod`;
    const qrMessage = document.createElement("p");
    qrMessage.textContent = "Buyurtma raqamini ko‘rsatish uchun QR-kodni skanerlang.";
    qrSection.append(qrImage, qrMessage);
    qrImage.addEventListener("error", () => {
        qrImage.hidden = true;
        qrMessage.textContent = "QR-kodni yuklash uchun internet aloqasini tekshiring.";
    }, { once: true });
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(order.number)}`;

    receipt.append(items, total, qrSection);
}

// 5. EVOS kompaniyasiga buyurtma berish
function submitOrder(event) {
    event.preventDefault();
    if (cart.length === 0) return;

    const totalSum = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    latestOrder = {
        number: `EV-${Date.now().toString(36).toUpperCase()}`,
        items: cart.map(item => ({ ...item })),
        total: totalSum,
        createdAt: new Date().toISOString()
    };

    orderHistory.push(latestOrder);
    localStorage.setItem(ORDER_HISTORY_KEY, JSON.stringify(orderHistory));
    localStorage.setItem(LATEST_ORDER_KEY, JSON.stringify(latestOrder));

    cart = [];
    document.getElementById("order-form").reset();
    updateCartUI();
    closeModal("cart-modal");
    renderOrderReceipt(latestOrder);
    document.getElementById("order-modal").classList.add("open");
}

// Qisqa xabarnoma (Toast)
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

function openLogin() {
    document.getElementById("login-error").textContent = "";
    document.getElementById("login-form").reset();
    document.getElementById("login-modal").classList.add("open");
    setTimeout(() => document.getElementById("admin-login").focus(), 50);
}

function submitLogin(event) {
    event.preventDefault();
    const login = document.getElementById("admin-login").value.trim();
    const password = document.getElementById("admin-password").value;

    if (login !== "evos" || password !== "admini") {
        document.getElementById("login-error").textContent = "Login yoki parol noto‘g‘ri.";
        return;
    }

    closeModal("login-modal");
    renderAdminDashboard();
    document.getElementById("main-app").hidden = true;
    const adminPage = document.getElementById("admin-modal");
    adminPage.hidden = false;
    adminPage.classList.remove("opening");
    void adminPage.offsetWidth;
    adminPage.classList.add("opening");
}

function logoutAdmin() {
    document.getElementById("admin-modal").hidden = true;
    document.getElementById("main-app").hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleEditMenu(forceState) {
    const menu = document.getElementById("edit-menu");
    const shouldOpen = typeof forceState === "boolean" ? forceState : menu.hidden;

    menu.hidden = !shouldOpen;
    if (!shouldOpen) {
        closeAddProductForm();
        return;
    }

    const categoryList = document.getElementById("edit-category-list");
    const categorySelect = document.getElementById("new-product-category");
    categoryList.replaceChildren();
    categorySelect.replaceChildren();

    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "Bo‘limni tanlang";
    categorySelect.appendChild(emptyOption);

    categories.forEach(category => {
        const row = document.createElement("div");
        row.className = "edit-category-row";

        const name = document.createElement("span");
        name.className = "edit-category-name";
        name.textContent = category.name;

        const addButton = document.createElement("button");
        addButton.type = "button";
        addButton.className = "add-category-product";
        addButton.textContent = "+";
        addButton.setAttribute("aria-label", `${category.name} bo‘limiga mahsulot qo‘shish`);
        addButton.addEventListener("click", () => openAddProductForm(category.id));

        row.append(name, addButton);
        categoryList.appendChild(row);

        const option = document.createElement("option");
        option.value = category.id;
        option.textContent = category.name;
        categorySelect.appendChild(option);
    });
}

function openAddProductForm(categoryId) {
    const form = document.getElementById("add-product-form");
    form.hidden = false;
    document.getElementById("new-product-category").value = categoryId || "";
    form.scrollIntoView({ behavior: "smooth", block: "nearest" });
    setTimeout(() => document.getElementById("new-product-name").focus(), 100);
}

function closeAddProductForm() {
    const form = document.getElementById("add-product-form");
    form.hidden = true;
    form.reset();
}

function submitNewProduct(event) {
    event.preventDefault();
    const name = document.getElementById("new-product-name").value.trim();
    const image = document.getElementById("new-product-image").value.trim();
    const categoryId = document.getElementById("new-product-category").value;
    const price = Number(document.getElementById("new-product-price").value);
    const category = categories.find(item => item.id === categoryId);

    if (!name || !image || !category || !Number.isFinite(price) || price <= 0) {
        showToast("Barcha maydonlarni to‘ldiring!");
        return;
    }

    const customProducts = loadCustomProducts();
    const newProduct = {
        id: Date.now(),
        name,
        image,
        categoryId,
        categoryName: category.name,
        price,
        desc: "Admin tomonidan qo‘shilgan mahsulot."
    };
    customProducts.push(newProduct);
    localStorage.setItem(CUSTOM_PRODUCTS_KEY, JSON.stringify(customProducts));

    closeAddProductForm();
    initMenu();
    toggleEditMenu(true);
    showToast(`"${name}" mahsuloti qo‘shildi!`);
}

function renderAdminDashboard() {
    orderHistory = loadStoredOrders();

    const totalRevenue = orderHistory.reduce((sum, order) => sum + Number(order.total || 0), 0);
    const productCount = orderHistory.reduce((sum, order) =>
        sum + (order.items || []).reduce((itemSum, item) => itemSum + Number(item.qty || 0), 0), 0);

    const now = new Date();
    const todayKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    const yesterdayKey = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, "0")}-${String(yesterday.getDate()).padStart(2, "0")}`;

    const todayRevenue = orderHistory
        .filter(order => order.createdAt && order.createdAt.slice(0, 10) === todayKey)
        .reduce((sum, order) => sum + Number(order.total || 0), 0);
    const yesterdayRevenue = orderHistory
        .filter(order => order.createdAt && order.createdAt.slice(0, 10) === yesterdayKey)
        .reduce((sum, order) => sum + Number(order.total || 0), 0);

    let growth = 0;
    if (yesterdayRevenue > 0) {
        growth = ((todayRevenue - yesterdayRevenue) / yesterdayRevenue) * 100;
    } else if (todayRevenue > 0) {
        growth = 100;
    }

    const stats = [
        { label: "Buyurtmalar soni", value: String(orderHistory.length) },
        { label: "Umumiy narx", value: formatPrice(totalRevenue) },
        { label: "Mahsulotlar soni", value: String(productCount) },
        { label: "Haridlar o‘sishi", value: `${growth >= 0 ? "+" : ""}${growth.toFixed(1)}%`, growth }
    ];

    const statsContainer = document.getElementById("admin-stats");
    statsContainer.replaceChildren();
    stats.forEach(stat => {
        const card = document.createElement("div");
        card.className = "admin-stat";
        if (stat.growth !== undefined) {
            card.classList.add(stat.growth >= 0 ? "growth-positive" : "growth-negative");
        }
        const label = document.createElement("span");
        label.className = "admin-stat-label";
        label.textContent = stat.label;
        const value = document.createElement("span");
        value.className = "admin-stat-value";
        value.textContent = stat.value;
        card.append(label, value);
        statsContainer.appendChild(card);
    });

    const hourCounts = {};
    const dayCounts = {};
    orderHistory.forEach(order => {
        if (!order.createdAt) return;
        const date = new Date(order.createdAt);
        if (Number.isNaN(date.getTime())) return;
        const hour = date.getHours();
        const uzbekDays = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"];
        const day = uzbekDays[date.getDay()];
        hourCounts[hour] = (hourCounts[hour] || 0) + 1;
        dayCounts[day] = (dayCounts[day] || 0) + 1;
    });

    const peakHour = getPeakLabel(hourCounts);
    const peakDay = getPeakLabel(dayCounts);
    document.getElementById("peak-hour-card").textContent =
        peakHour ? `Eng ko‘p harid soati: ${peakHour.key}:00 (${peakHour.count} ta)` : "Eng ko‘p harid soati: ma’lumot yo‘q";
    document.getElementById("peak-day-card").textContent =
        peakDay ? `Eng ko‘p harid kuni: ${peakDay.key} (${peakDay.count} ta)` : "Eng ko‘p harid kuni: ma’lumot yo‘q";

    const history = document.getElementById("admin-history");
    history.replaceChildren();

    const header = document.createElement("div");
    header.className = "history-row header";
    ["Buyurtma", "Sana va soat", "Mahsulotlar", "Narx"].forEach(text => {
        const cell = document.createElement("div");
        cell.textContent = text;
        header.appendChild(cell);
    });
    history.appendChild(header);

    if (orderHistory.length === 0) {
        const empty = document.createElement("div");
        empty.className = "history-row";
        empty.textContent = "Hali buyurtmalar yo‘q.";
        history.appendChild(empty);
        return;
    }

    [...orderHistory].reverse().forEach(order => {
        const row = document.createElement("div");
        row.className = "history-row";

        const number = document.createElement("div");
        number.textContent = order.number;

        const date = document.createElement("div");
        const orderDate = order.createdAt ? new Date(order.createdAt) : null;
        date.textContent = orderDate && !Number.isNaN(orderDate.getTime())
            ? `${orderDate.toLocaleDateString("uz-UZ")} / ${orderDate.toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" })}`
            : "—";

        const itemCount = document.createElement("div");
        itemCount.className = "history-items";
        itemCount.textContent = String((order.items || []).reduce((sum, item) => sum + Number(item.qty || 0), 0));

        const price = document.createElement("div");
        price.textContent = formatPrice(Number(order.total || 0));
        row.append(number, date, itemCount, price);
        history.appendChild(row);
    });
}

function getPeakLabel(counts) {
    const entries = Object.entries(counts);
    if (entries.length === 0) return null;
    entries.sort((a, b) => Number(b[1]) - Number(a[1]));
    return { key: entries[0][0], count: entries[0][1] };
}

function initProductSearch() {
    const toggle = document.getElementById("search-toggle");
    const panel = document.getElementById("search-panel");
    const input = document.getElementById("product-search");
    const results = document.getElementById("search-results");

    function normalizeSearchText(value) {
        return value
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLocaleLowerCase()
            .replace(/[\s'‘’ʻ`-]/g, "");
    }

    function renderResults() {
        const query = normalizeSearchText(input.value.trim());
        results.replaceChildren();

        if (!query) return;

        const matches = allProducts.filter(product =>
            normalizeSearchText(product.name).includes(query)
        );

        if (matches.length === 0) {
            const emptyMessage = document.createElement("p");
            emptyMessage.className = "search-empty";
            emptyMessage.textContent = "Mahsulot topilmadi.";
            results.appendChild(emptyMessage);
            return;
        }

        matches.forEach(product => {
            const result = document.createElement("button");
            result.type = "button";
            result.className = "search-result";
            result.setAttribute("role", "option");

            const name = document.createElement("span");
            name.textContent = product.name;
            const price = document.createElement("span");
            price.className = "search-result-price";
            price.textContent = formatPrice(product.price);

            result.append(name, price);
            result.addEventListener("click", () => {
                closeSearch();
                openDetail(product.id);
            });
            results.appendChild(result);
        });
    }

    function closeSearch() {
        panel.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
    }

    toggle.addEventListener("click", () => {
        const isOpen = !panel.hidden;
        panel.hidden = isOpen;
        toggle.setAttribute("aria-expanded", String(!isOpen));
        if (!isOpen) input.focus();
    });

    input.addEventListener("input", renderResults);
    document.addEventListener("click", event => {
        if (!panel.hidden && !event.target.closest(".search-container")) {
            panel.hidden = true;
            toggle.setAttribute("aria-expanded", "false");
        }
    });
    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && !panel.hidden) closeSearch();
    });
}

// Sahifa yuklanganda ishga tushirish
initMenu();
initProductSearch();


