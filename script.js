// Data Menu Lengkap Sesuai Foto
const menuData = [
    // Seri Original[cite: 1]
    { id: 1, name: 'Original Tea', category: 'original', priceM: 5000, priceL: 7000, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80' },
    { id: 2, name: 'Hijau Tea', category: 'original', priceM: 5000, priceL: 7000, img: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=500&q=80' },
    { id: 3, name: 'Bunga Rosella', category: 'original', priceM: 5000, priceL: 7000, img: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=500&q=80' },
    { id: 4, name: 'Bunga Telang', category: 'original', priceM: 5000, priceL: 7000, img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=500&q=80' },
    { id: 5, name: 'Lemon Tea', category: 'original', priceM: 5000, priceL: 7000, img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80' },
    { id: 6, name: 'Jasmine Tea', category: 'original', priceM: 5000, priceL: 7000, img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=80' },
    { id: 7, name: 'Lychee Tea', category: 'original', priceM: 5000, priceL: 7000, img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80' },

    // Seri Squash Tea[cite: 1]
    { id: 8, name: 'Mojito Tea', category: 'squash', priceM: 7000, priceL: 10000, img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80' },
    { id: 9, name: 'Melon Squash Tea', category: 'squash', priceM: 7000, priceL: 10000, img: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=500&q=80' },
    { id: 10, name: 'Cocopandan Squash Tea', category: 'squash', priceM: 7000, priceL: 10000, img: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=500&q=80' },
    { id: 11, name: 'Lychee Squash Tea', category: 'squash', priceM: 7000, priceL: 10000, img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80' },
    { id: 12, name: 'Strawberry Squash Tea', category: 'squash', priceM: 7000, priceL: 10000, img: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=500&q=80' },
    { id: 13, name: 'Orange Squash Tea', category: 'squash', priceM: 7000, priceL: 10000, img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=500&q=80' },
    { id: 14, name: 'Mango Squash Tea', category: 'squash', priceM: 7000, priceL: 10000, img: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=500&q=80' },

    // Seri Milk[cite: 1]
    { id: 15, name: 'Vanilla Blue Milk', category: 'milk', priceM: 8000, priceL: 10000, img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80' },
    { id: 16, name: 'Cappucino Milk', category: 'milk', priceM: 8000, priceL: 10000, img: 'https://images.unsplash.com/photo-1572442388796-11668ba67e53?auto=format&fit=crop&w=500&q=80' },
    { id: 17, name: 'Thai Tea Milk', category: 'milk', priceM: 8000, priceL: 10000, img: 'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=500&q=80' },
    { id: 18, name: 'Green Tea Milk', category: 'milk', priceM: 8000, priceL: 10000, img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80' },
    { id: 19, name: 'Coklat Milk', category: 'milk', priceM: 8000, priceL: 10000, img: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=500&q=80' },
    { id: 20, name: 'Pink Lava Milk', category: 'milk', priceM: 8000, priceL: 10000, img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80' },
    { id: 21, name: 'Mango Lava Milk', category: 'milk', priceM: 8000, priceL: 10000, img: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=500&q=80' },
    { id: 22, name: 'Vanilla Milk', category: 'milk', priceM: 8000, priceL: 10000, img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=500&q=80' },
    { id: 23, name: 'Choco Oreo Milk', category: 'milk', priceM: 8000, priceL: 10000, img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80' },

    // Seri Yakult[cite: 1]
    { id: 24, name: 'Yakult Tea', category: 'yakult', priceM: 7000, priceL: 10000, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80' },
    { id: 25, name: 'Cocopandan Yakult', category: 'yakult', priceM: 7000, priceL: 10000, img: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=500&q=80' },
    { id: 26, name: 'Greentea Yakult', category: 'yakult', priceM: 7000, priceL: 10000, img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80' },
    { id: 27, name: 'Orange Yakult', category: 'yakult', priceM: 7000, priceL: 10000, img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=500&q=80' },
    { id: 28, name: 'Telang Yakult', category: 'yakult', priceM: 7000, priceL: 10000, img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=500&q=80' },
    { id: 29, name: 'Rosella Yakult', category: 'yakult', priceM: 7000, priceL: 10000, img: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=500&q=80' },
    { id: 30, name: 'Melon Yakult', category: 'yakult', priceM: 7000, priceL: 10000, img: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=500&q=80' },
    { id: 31, name: 'Lychee Yakult', category: 'yakult', priceM: 7000, priceL: 10000, img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80' },
    { id: 32, name: 'Mangga Yakult', category: 'yakult', priceM: 7000, priceL: 10000, img: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=500&q=80' },

    // Ice Coffee[cite: 2]
    { id: 33, name: 'Es Kopi Chococino', category: 'coffee', priceM: 8000, priceL: 10000, img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=500&q=80' },
    { id: 34, name: 'Es Kopi Aren', category: 'coffee', priceM: 8000, priceL: 10000, img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80' },
    { id: 35, name: 'Es Kopi Moccacino', category: 'coffee', priceM: 8000, priceL: 10000, img: 'https://images.unsplash.com/photo-1572442388796-11668ba67e53?auto=format&fit=crop&w=500&q=80' },
    { id: 36, name: 'Es Kopi Vanilla Latte', category: 'coffee', priceM: 8000, priceL: 10000, img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80' },
    { id: 37, name: 'Es Kopi Carrebian', category: 'coffee', priceM: 8000, priceL: 10000, img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80' },
    { id: 38, name: 'Es Kopi Coolin', category: 'coffee', priceM: 8000, priceL: 10000, img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=500&q=80' },
];

let cart = [];

// Helper Format Rupiah
function formatRupiah(number) {
    return 'Rp ' + number.toLocaleString('id-ID');
}

// Render Menu Cards
function renderMenu() {
    const categories = ['original', 'squash', 'milk', 'yakult', 'coffee'];

    categories.forEach(cat => {
        const grid = document.getElementById(`${cat}-grid`);
        const items = menuData.filter(item => item.category === cat);

        grid.innerHTML = items.map(item => `
            <div class="card">
                <img src="${item.img}" alt="${item.name}" class="card-img">
                <div class="card-body">
                    <div class="card-title">${item.name}</div>
                    
                    <div class="size-selector" id="size-group-${item.id}">
                        <label class="size-option selected" onclick="selectSize(${item.id}, 'Medium')">
                            <input type="radio" name="size-${item.id}" value="Medium" checked>
                            Medium<br><strong>${formatRupiah(item.priceM)}</strong>
                        </label>
                        <label class="size-option" onclick="selectSize(${item.id}, 'Large')">
                            <input type="radio" name="size-${item.id}" value="Large">
                            Large<br><strong>${formatRupiah(item.priceL)}</strong>
                        </label>
                    </div>

                    <button class="add-btn" onclick="addToCart(${item.id})">
                        <i class="fas fa-plus"></i> Tambah
                    </button>
                </div>
            </div>
        `).join('');
    });
}

// Handling Pilihan Ukuran
function selectSize(menuId, size) {
    const container = document.getElementById(`size-group-${menuId}`);
    const labels = container.querySelectorAll('.size-option');
    
    labels.forEach(label => {
        const input = label.querySelector('input');
        if (input.value === size) {
            label.classList.add('selected');
            input.checked = true;
        } else {
            label.classList.remove('selected');
        }
    });
}

// Tambah ke Keranjang
function addToCart(menuId) {
    const menu = menuData.find(m => m.id === menuId);
    const container = document.getElementById(`size-group-${menuId}`);
    const selectedSize = container.querySelector('input:checked').value;
    const price = selectedSize === 'Medium' ? menu.priceM : menu.priceL;

    const cartItemId = `${menuId}-${selectedSize}`;
    const existingItem = cart.find(item => item.cartItemId === cartItemId);

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({
            cartItemId,
            id: menu.id,
            name: menu.name,
            size: selectedSize,
            price: price,
            qty: 1
        });
    }

    updateCartUI();
}

// Update UI Keranjang
function updateCartUI() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartBadge = document.getElementById('cartBadge');
    const cartTotal = document.getElementById('cartTotal');

    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    cartBadge.textContent = totalItems;
    cartTotal.textContent = formatRupiah(totalPrice);

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-text">Keranjang masih kosong.</p>';
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-sub">Gelas: ${item.size} (${formatRupiah(item.price)})</div>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="changeQty('${item.cartItemId}', -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="changeQty('${item.cartItemId}', 1)">+</button>
                </div>
            </div>
            <strong>${formatRupiah(item.price * item.qty)}</strong>
        </div>
    `).join('');
}

// Ubah Jumlah Item
function changeQty(cartItemId, delta) {
    const item = cart.find(i => i.cartItemId === cartItemId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.cartItemId !== cartItemId);
    }
    updateCartUI();
}

// Toggle Drawer Keranjang
function toggleCart() {
    document.getElementById('cartModal').classList.toggle('open');
}

// Kirim Pesanan ke WhatsApp
function sendToWhatsApp(e) {
    e.preventDefault();
    if (cart.length === 0) {
        alert('Keranjang belanja Anda masih kosong!');
        return;
    }

    const name = document.getElementById('custName').value;
    const address = document.getElementById('custAddress').value;
    const phoneNo = '6281232296966';

    let message = `Halo TEATITO, saya mau pesan minuman:\n\n`;
    message += `*Detail Pesanan:*\n`;

    let total = 0;
    cart.forEach((item, index) => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        message += `${index + 1}. ${item.name} (${item.size}) x${item.qty} = ${formatRupiah(subtotal)}\n`;
    });

    message += `\n*Total Pembayaran:* ${formatRupiah(total)}\n\n`;
    message += `*Data Pemesan:*\n`;
    message += `Nama: ${name}\n`;
    message += `Alamat: ${address}\n\n`;
    message += `Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNo}?text=${encodedMessage}`, '_blank');
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', renderMenu);
