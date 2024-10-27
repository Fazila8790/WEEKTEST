const products = [
    { id: 1, name: 'Product1', price: 100 },
    { id: 2, name: 'Product2', price: 200 },
    { id: 3, name: 'Product3', price: 300 },
];

const cart = {};

function renderProducts() {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = ''; 

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-item';

        productDiv.innerHTML = `
            <span>${product.name} - ${product.price}</span>
            <div class="product-controls">
                <button onclick="removeFromCart(${product.id})">-</button>
                <span>${cart[product.id]?.quantity || 0}</span>
                <button onclick="addToCart(${product.id})">+</button>
            </div>
        `;

        productsDiv.appendChild(productDiv);
    });
}

function renderCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceDiv = document.getElementById('total-price');

    cartItemsDiv.innerHTML = ''; 
    let total = 0;

    const cartItems = Object.values(cart);
    if (cartItems.length === 0) {
        cartItemsDiv.innerHTML = '<p>No Product added to the cart</p>';
    } else {
        cartItems.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';

            const itemTotal = item.price * item.quantity;
            cartItemDiv.innerHTML = `
                <span>${item.name} - Qty: ${item.quantity} x ${item.price} = ${itemTotal}</span>
            `;

            cartItemsDiv.appendChild(cartItemDiv);
            total += itemTotal;
        });
    }

    totalPriceDiv.textContent = `Total: ${total}`;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (cart[productId]) {
        cart[productId].quantity += 1;
    } else {
        cart[productId] = { ...product, quantity: 1 };
    }
    renderProducts();
    renderCart();
}

function removeFromCart(productId) {
    if (cart[productId]) {
        cart[productId].quantity -= 1;
        if (cart[productId].quantity <= 0) {
            delete cart[productId];
        }
    }
    renderProducts();
    renderCart();
}

renderProducts();
renderCart();
