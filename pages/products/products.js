const tabs = [
  {
    name: "الكل",
    category: "all",
  },
  {
    name: "حلويات غربية",
    category: "western",
  },
  {
    name: "حلويات شرقية",
    category: "eastern",
  },
  {
    name: "كيك",
    category: "cakes",
  },
  {
    name: "مناسبات",
    category: "occasions",
  },
  {
    name: "مخبوزات",
    category: "bakery",
  },
  {
    name: "فطائر",
    category: "pies",
  },
  {
    name: "شيكولاتة",
    category: "chocolate",
  },
  {
    name: "تشكيلات",
    category: "assortments",
  },
  {
    name: "متنوع",
    category: "misc",
  },
];


const products = [
  {
    name: "تورتة",
    price: "280 ج.م",
    image: "./../../hero/tart.png",
    category: "western",
  },
  {
    name: "ايس كان",
    price: "20 ج.م",
    image: "./../../../../hero/ice-can.png",
    category: "misc",
  },
  {
    name: "شيكولاتة",
    price: "20 ج.م",
    image: "./../../hero/image-removebg-preview1.png",
    category: "chocolate",
  },
  {
    name: "كوراسون",
    price: "20 ج.م",
    image: "./../../../../hero/croissant-removebg-preview.png",
    category: "bakery",
  },
];

const navTabs = document.querySelector("#pills-tab");

tabs.forEach((el, index) => {
  navTabs.innerHTML += `
      <li class="nav-item" role="presentation">
        <button
          class="nav-link ${index === 0 ? "active" : ""}"
          id="${el.category}-tab"
          data-bs-toggle="pill"
          data-bs-target="#${el.category}"
          type="button"
          role="tab"
          aria-controls="${el.category}"
          aria-selected="false"
        >
          ${el.name}
        </button>
      </li>
    `;
});


const navItems = document.querySelectorAll("#pills-tab li");


navItems.forEach((el,index) => {

    el.addEventListener("click", () => {
        navItems.forEach((el) => {
            el.classList.remove("active");
        });
        el.classList.add("active");
    })
})


const tabContent = document.querySelector("#pills-tabContent");