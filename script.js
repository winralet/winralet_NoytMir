function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(productName + ' добавлен в корзину!');
  }
  
  function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
  
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Корзина пуста</p>';
        return;
    }
  
    cart.forEach((item, index) => {
        cartItemsContainer.innerHTML += `
            <div>
                <span>${item.name} - ${item.price} руб.</span>
                <button class="ppp" onclick="removeFromCart (${index}) ">Удалить</button> 
            </div>
        `;
    });
  }
  
  function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }
  
  function placeOrder() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Ваша корзина пуста!');
        return;
    }
  
    let deliveryAddress = prompt('Куда доставить?');
    if (deliveryAddress) {
        alert('Заказ оформлен! Доставка на адрес: ' + deliveryAddress);
        localStorage.removeItem('cart'); // Очистим корзину после оформления заказа
        displayCart(); // Обновим корзину
    } else {
        alert('Адрес доставки не указан.');
    }
  }
  
  // Вызов функции для отображения корзины на странице корзины
  if (document.getElementById('cart-items')) {
    displayCart();
  }




const counterNode = document.querySelector('.js-counter');
const incBtnNode = document.querySelector('.js-inc-btn');
const clearBtnNode = document.querySelector('.js-clear-btn');

let counter = 0;

counterNode.innerText = counter;

incBtnNode.addEventListener('click', () => {
  counter += 1;
  counterNode.innerText = counter;
});

clearBtnNode.addEventListener('click', () => {
  counter = 0;
  counterNode.innerText = counter;
});





document.querySelectorAll('.block').forEach(button => {
  button.addEventListener('click', () => {
      alert('Вы находитесь на странице: ' + button.querySelector('p').textContent);
  });
});

// Функция для изменения цвета фона при наведении на кнопку "Посмотреть Ноутбуки"
const buyButton = document.querySelector('.buy-button');
buyButton.addEventListener('mouseover', () => {
  buyButton.style.backgroundColor = '#45A049';
});
buyButton.addEventListener('mouseout', () => {
  buyButton.style.backgroundColor = '#4CAF50';
});