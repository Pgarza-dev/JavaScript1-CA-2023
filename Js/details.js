const details = document.querySelector(".details");

// const queryString = document.location.search;

// const params = new URLSearchParams(queryString);

// const id = params.get("id");

// console.log(id);

const url = "https://dummyjson.com/products/1";

async function fetchProduct() {
  try {
    // get the query string
    const queryString = document.location.search;

    // create an object that will allows us to access all the query string parameters
    const params = new URLSearchParams(queryString);

    // get the id parameter from the query string
    const id = params.get("id");
    console.log({ id });

    document.title = id;

    const response = await fetch(url);

    const results = await response.json();

    console.log(results);

    details.innerHTML = "";

    details.innerHTML += `<div class="details" >
                                  <h1> ${results.title}</h1>
                                  <img class="img" src=${results.images[1]} width="300px"/> 
                                  <h2> ${results.description}</h2>
                                  <h3> ${results.price}</h3>
                                  <h3> ${results.rating} star rating</h3>
                                  </div>
                                `;

    // details.innerHTML += `<div class="university">${name}
    //                         <ul>

    //                           <li>${name.country}</li>
    //                           <li>${name.web_pages}</li>
    //                           <li>${name.domains}</li>
    //                         </ul>
    //                       </div>`;

    // for (let i = 0; i < results.length; i++) {
    //   if (i === 25) {
    //     break;
    //   }

    //   details.innerHTML += `<div class="university" data-id=${i}>
    //                               <ul>
    //                                 <li>
    //                                 ${results[i].country}
    //                                 </li>
    //                                 <li>
    //                                 ${results[i].web_pages}
    //                                 </li>
    //                                 <li>
    //                                 ${results[i].domains}
    //                                 </li>
    //                               </ul>
    //                           </div>`;
    // }
  } catch (error) {
    console.log(error);
    details.innerHTML = alert("error", error);
  }
}

fetchProduct();

// const details = document.querySelector(".details");

// const queryString = document.location.search;

// const params = new URLSearchParams(queryString);

// const id = params.get("id");

// console.log(id);

// const url =
//   "http://universities.hipolabs.com/search?name=marywood+university" + id;

// async function makeApiCall() {
//   try {
//     const response = await fetch(url);

//     const results = await response.json();

//     console.log(results);

//     details.innerHTML = "";
//   } catch (error) {
//     console.log(error);
//     details.innerHTML = alert("error", error);
//   }
// }

// makeApiCall();
