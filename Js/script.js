const schoolName = document.querySelector(".university");
// const schoolWebsite = document.querySelector(".website");

const url = "http://universities.hipolabs.com/search?country=United+States";

const search = document.querySelector("#search");

async function makeApiCall() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    console.log(results);

    schoolName.innerHTML = "";

    document.addEventListener("click", (e) => {
      if (e.target.dataset.id) {
        console.log(e.target.dataset.id);

        console.log(results[e.target.dataset.id]);
      }
    });

    //? I would replace this with a forEach loop
    //? see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    for (let i = 0; i < results.length; i++) {
      //! not sure break will work in an if statement? Return would be better
      if (i === 25) {
        break;
      }

      //? consider using document.createElement here
      //? see https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
      //? Noroff how to render HTML safely: https://www.loom.com/share/5d0bff43baff456a8aa76d639d7ded62

      schoolName.innerHTML += `<div class="university" data-id=${i}>
                                  <a href="details.html?data-id=${i}" > ${results[i].name}</a>
                                  <ul>
                                    <li>
                                    ${results[i].web_pages}
                                    </li>
                                    <li>
                                    ${results[i].domains}
                                    </li>
                                  </ul>
                                </div>                              
                                `;
    }
  } catch (error) {
    console.log(error);
    schoolName.innerHTML = alert("error", error);
  }
}

makeApiCall();

// search.onkeyup = function () {
//   const searchValue = event.target.value.trim().toLowerCase();

//   const filterSchools = universityName.filter(function (uni) {
//     if (uni.full_name.toLowerCase().startsWith(searchValue)) return true;
//   });
// };
