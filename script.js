const bestSellerProducts = [
  {
    name: "تورتة",
    image: "./hero/tart.png",
    price: 280,
  },
  {
    name: "ايس كان",
    image: "./hero/ice-can.png",
    price: 20,
  },
  {
    name: "شيكولاتة",
    image: "./hero/image-removebg-preview1.png",
    price: 20,
  },
  {
    name: "كوراسون",
    image: "./hero/croissant-removebg-preview.png",
    price: 20,
  },
];

const bestSellerContainer = document.querySelector(".best-seller-products");

bestSellerProducts.forEach((el, index) => {
  bestSellerContainer.innerHTML += `
      <div class="col-12 col-md-6 col-lg-3">
          <div class="card position-relative">
            <img src=${el.image} class="" alt="" />
            <div
              class="p-4 w-100 product-details d-flex flex-column align-items-center justify-content-center"
            >
              <h3>${el.name}</h3>
              <h3>${el.price} ج.م</h3>
            </div>
            <div class="orange-rect"></div>
            <div class="addToCart" onclick="addToCart(${index})">
              <i class="fa-solid fa-cart-shopping cardCart"></i>
              <!-- <i class="fa-solid fa-plus"></i> -->
            </div>
          </div>
        </div>
    `;
});

const cart = [
  // {
  //   name: "تورتة",
  //   image: "./hero/tart.png",
  //   price: 280,
  //   qty: 2,
  // },
  // {
  //   name: "ايس كان",
  //   image: "./hero/ice-can.png",
  //   price: 20,
  //   qty: 3,
  // },
];

const cartBody = document.querySelector(".cart-body");

const showCart = () => {
  cart.forEach((el, index) => {
    cartBody.innerHTML += `
     <div class="card mb-3 bg-transparent text-white">
                <div class="row g-0">
                  <div class="col-md-3 d-flex align-items-center justify-content-center">
                    <img
                      src="${el.image}"
                      class="rounded-start w-75"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-9">
                    <div class="card-body ">
                    <div class="d-flex justify-content-between align-items-center">
                      <h5 class="card-title">${el.name}</h5>
                      <button class="btn border-0 bg-transparent text-white" onclick="deleteItem(${index})">
                      <i class="fa-solid fa-trash-can text-danger "></i>
                      </button>
                      </div>
                    <div class="d-flex justify-content-between align-items-center">
                      <div>
                        <p class="card-text mb-0">${el.price} ج.م</p>
                      </div>

                      <div class="d-flex gap-2 align-items-center">
                        <button
                          class="border-0 bg-transparent text-white rounded-xl p-0 lh-0 fs-3 decrease"
                          onclick="decreaseQty(${index})"
                        >
                          -
                        </button>
                        <span>${el.qty}</span>
                        <button
                          class="border-0 bg-transparent text-white rounded-xl p-0 lh-0 fs-3 incearse"
                          onclick="increaseQty(${index})"
                        >
                          +
                        </button>
                      </div>
                      <div>
                      <span class="px-1">${el.price * el.qty} ج.م</span>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
  `;
  });
};

showCart();

const addToCart = (index) => {
  cart.push(bestSellerProducts[index]);

  cartBody.innerHTML = "";
  showCart();
  calcTotal();
  showCartCount();
};

//increase qty
const increaseQty = (cartIndex) => {
  cart[cartIndex].qty++;
  cartBody.innerHTML = "";
  showCart();
  calcTotal();
};

//decrease qty
const decreaseQty = (cartIndex) => {
  if (cart[cartIndex].qty <= 0) {
    cart[cartIndex].qty = 0;
  } else {
    cart[cartIndex].qty--;
  }
  cartBody.innerHTML = "";
  showCart();
  calcTotal();
};

//delete item from cart
const deleteItem = (cartIndex) => {
  cart.splice(cartIndex, 1);
  cartBody.innerHTML = "";
  showCart();
  showCartCount();
  calcTotal();
};

//cart count number
const cartCount = document.querySelector(".cart-count");
const showCartCount = () => {
  if (cart.length === 0) {
    cartCount.innerHTML = 0;
  } else {
    cartCount.innerHTML = cart.length;
  }
};
showCartCount();

//total cart price

const totalPrice = document.querySelector(".total-price");
const calcTotal = () => {
  let total = 0;
  cart.forEach((el, index) => {
    total += el.price * el.qty;
  });
  totalPrice.innerHTML = total;
};

calcTotal();
