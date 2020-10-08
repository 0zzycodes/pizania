let output = document.querySelector("#output");
const title = document.querySelector(".title");
const tag = document.querySelector("#tag");
const form = document.querySelector("form");
const input = document.querySelector("input");
const container = document.querySelector(".form-container");
const btn = document.querySelector("button");
const label = document.querySelector("label");
const key = "cc2b94a38fbb7211a8a5c51847ff9146c013a33908621b0701c7f79698ff734a";
const tags = ["car", "house", "office", "food", "sport", "bike"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = input.value;
  const endpoint = `https://api.unsplash.com/search/photos?client_id=${key}&query=${query}`;
  fetchData(endpoint);
  form.reset();
});
const fetchData = (endpoint) => {
  output.innerHTML = "";
  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      tag.style.display = "none";
      title.classList.add("special");
      title.classList.remove("title");
      btn.classList.add("button");
      input.style.fontSize = "1.1em";
      container.style.width = "40%";
      container.style.margin = "0";
      label.style.display = "none";
      const { results } = data;
      results.forEach((item) => {
        const { alt_description, id, links, urls, user } = item;
        const { full, raw, regular, small, thumb } = urls;
        const { name, profile_image } = user;
        let download = `https://api.unsplash.com/photos?${id}&client_id=${key}`;
        output.innerHTML += `<div class="block main">
          <img onclick="showPhotoDetails('${id}')" src=${regular}>
          <div class="image-overlay">
              <h5> 
                <img src=${profile_image.large}></img>
                ${name}
              </h5>
              <a href=${download} target="_blank">Download</a>
              </div>
          <div id="Modal" data-id="${id}">
            <div class="modal-content">
            <div class="block">
              <div className="image">
              <img class="special" src=${regular}>
              </div>
              <div class="detail">
              <h5> 
                <img src=${profile_image.large}></img>
                ${name}
              </h5>
              </div>
            </div>
            </div>
          </div>
        </div>
        `;
      });
    });
};

const showPhotoDetails = (id) => {
  const modal = document.querySelectorAll("#Modal");
  for (let i = 0; i < modal.length; i++) {
    if (modal[i].getAttribute("data-id") === id) {
      modal[i].style.display = "block";

      window.onclick = function (event) {
        if (event.target === modal[i]) {
          modal[i].style.display = "none";
        }
      };
    }
  }
};
