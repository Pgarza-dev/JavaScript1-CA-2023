const ourProducts = document.querySelector(".productContainer");

const url = "https://dummyjson.com/products";

async function makeApiCall() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    const items = results.products;

    console.log(items);

    ourProducts.innerHTML = "";

    for (let i = 0; i < items.length; i++) {
      console.log(items[i].title);

      if (!items[i].images[1]) {
        continue;
      }

      ourProducts.innerHTML += `<div class="product-card"  >
                                  <a href="details.html?id=${items[i].id}" ><h1> ${items[i].title}</h1></a>
                                  <a href="details.html?id=${items[i].id}"> <img class="img" src=${items[i].images[1]} width="300px"/> </a>
                                  <a href="details.html?id=${items[i].id}"><h2>$${items[i].price} </h2></a>
                                  </div>
                                `;
    }
  } catch (error) {
    console.log(error);
    ourProducts.innerHTML = alert("error", error);
  }
}

makeApiCall();
