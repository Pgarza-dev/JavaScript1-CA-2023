const url = "http://universities.hipolabs.com/search?country=United+States";

const schoolName = document.querySelector(".university");
// const schoolWebsite = document.querySelector(".website");

const info = document.querySelector(".info");

async function makeApiCall() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    console.log(results);

    schoolName.innerHTML = "";
    // my api doesnt have id's so I am trying to addeventlistner to help target them
    document.addEventListener("click", (e) => {
      if (e.target.dataset.id) {
        console.log(e.target.dataset.id);

        console.log(results[e.target.dataset.id].web_pages);
      }
    });

    for (let i = 0; i < results.length; i++) {
      if (i === 25) {
        break;
      }

      schoolName.innerHTML += `<div class="university" data-id=${i}>
                                  <a href="details.html" data-id=${i}> ${results[i].name}</a>
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
