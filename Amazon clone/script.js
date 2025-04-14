const products = [
    {
      name: "Echo Dot (4th Gen)",
      price: "$49.99",
      image: "https://m.media-amazon.com/images/I/61MbLLagiVL._AC_SL1000_.jpg"
    },
    {
      name: "Wireless Mouse",
      price: "$25.99",
      image: "https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_SL1500_.jpg"
    },
    {
      name: "Noise Cancelling Headphones",
      price: "$89.99",
      image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg"
    },
    {
      name: "Smart LED TV",
      price: "$399.99",
      image: "https://m.media-amazon.com/images/I/81k5fA2FtuL._AC_SL1500_.jpg"
    },
    {
      name: "Gaming Keyboard RGB",
      price: "$59.99",
      image: "https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_SL1500_.jpg"
    },
    {
      name: "iPhone 14 Pro",
      price: "$999.00",
      image: "https://m.media-amazon.com/images/I/61nzPMNY8zL._AC_SL1500_.jpg"
    },
    {
      name: "Bluetooth Speaker",
      price: "$34.99",
      image: "https://m.media-amazon.com/images/I/71r-GRImi6L._AC_SL1500_.jpg"
    },
    {
      name: "Laptop Backpack",
      price: "$45.99",
      image: "https://m.media-amazon.com/images/I/81+4u+fYfOL._AC_SL1500_.jpg"
    },
    {
      name: "Air Fryer Oven",
      price: "$129.99",
      image: "https://m.media-amazon.com/images/I/81lWEu8E+vL._AC_SL1500_.jpg"
    },
    {
      name: "Canon DSLR Camera",
      price: "$549.99",
      image: "https://m.media-amazon.com/images/I/81L-JX3mzAL._AC_SL1500_.jpg"
    },
    {
      name: "Smart Watch",
      price: "$199.99",
      image: "https://m.media-amazon.com/images/I/71wYi2Y3mvL._AC_SL1500_.jpg"
    },
    {
      name: "Fitness Tracker Band",
      price: "$29.99",
      image: "https://m.media-amazon.com/images/I/61-7BzvKk0L._AC_SL1500_.jpg"
    }
  ];
  
  const productGrid = document.getElementById("productGrid");
  
  products.forEach(product => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4 col-xl-3 mb-4";
  
    const card = document.createElement("div");
    card.className = "product-card";
    card.style.cursor = "pointer";
  
    card.innerHTML = `
      <img src="${product.image}" class="img-fluid w-100" alt="${product.name}">
      <h5>${product.name}</h5>
      <p>${product.price}</p>
    `;
  
    // Show redirecting message on click
    card.onclick = () => {
      alert("Redirecting to product page...");
      // You can replace the alert with a real link later like: window.location.href = "product.html";
    };
  
    col.appendChild(card);
    productGrid.appendChild(col);
  });
  
