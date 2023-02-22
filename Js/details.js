const url = "http://universities.hipolabs.com/search?country=United+States";
const details = document.querySelector(".details");

async function makeApiCall() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    console.log(results);

    details.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      if (i === 25) {
        break;
      }

      details.innerHTML += `<ul>
                                    <li>
                                    ${results[i].web_pages}
                                    </li>
                                    <li>
                                    ${results[i].domains}
                                    </li>
                                  </ul>`;
    }
  } catch (error) {
    console.log(error);
    details.innerHTML = alert("error", error);
  }
}

makeApiCall();
