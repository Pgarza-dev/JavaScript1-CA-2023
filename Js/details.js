// const details = document.querySelector(".details");

// const queryString = document.location.search;

// const params = new URLSearchParams(queryString);

// const id = params.get("id");

// console.log(id);

// const url = "http://universities.hipolabs.com/search?country=United+States";

// async function makeApiCall() {
//   try {
//     const response = await fetch(url);

//     const results = await response.json();

//     console.log(results);

//     details.innerHTML = "";

//     for (let i = 0; i < results.length; i++) {
//       if (i === 25) {
//         break;
//       }

//       details.innerHTML += `<div class="university" data-id=${i}>
//                                   <ul>
//                                     <li>
//                                     ${results[i].country}
//                                     </li>
//                                     <li>
//                                     ${results[i].web_pages}
//                                     </li>
//                                     <li>
//                                     ${results[i].domains}
//                                     </li>
//                                   </ul>
//                               </div>`;
//     }
//   } catch (error) {
//     console.log(error);
//     details.innerHTML = alert("error", error);
//   }
// }

// makeApiCall();

const details = document.querySelector(".details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url =
  "http://universities.hipolabs.com/search?name=marywood+university" + id;

async function makeApiCall() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    console.log(results);

    details.innerHTML = "";
  } catch (error) {
    console.log(error);
    details.innerHTML = alert("error", error);
  }
}

makeApiCall();
