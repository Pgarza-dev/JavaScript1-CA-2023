const details = document.querySelector(".details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

document.title = id;

const url = "https://dummyjson.com/products/" + id;

console.log(url);

async function fetchProduct() {
  try {
    // //get the query string
    // const queryString = document.location.search;

    // // create an object that will allows us to access all the query string parameters
    // const params = new URLSearchParams(queryString);

    // // get the id parameter from the query string
    // const id = params.get("id");
    // console.log({ id });

    // document.title = id;

    const response = await fetch(url);

    const results = await response.json();

    console.log(results);

    details.innerHTML = "";

    details.innerHTML += `<div class="details" >
                                  <h1> ${results.title}</h1>
                                  <img class="img" src=${results.images[1]} width="300px"/> 
                                  <p> ${results.description}</p>
                                  <p> ${results.price}</p>
                                  <p> ${results.rating} Star Rating</p>
                                  </div>
                                `;
  } catch (error) {
    console.log(error);
    details.innerHTML = alert("error", error);
  }
}

fetchProduct();
