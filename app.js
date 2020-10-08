// VARIABLES

const output = document.querySelector("#output");
const title = document.querySelector(".title");
const tag = document.querySelector("#tag");
const form = document.querySelector("form");
const input = document.querySelector("input");
const container = document.querySelector(".form-container");
const btn = document.querySelector("button");
const label = document.querySelector("label");

// const key = "cc2b94a38fbb7211a8a5c51847ff9146c013a33908621b0701c7f79698ff734a";
const key = "5GNS9N_2lVdSzRYSlbE-LZHJiVQB03lBY-iph01RNA";

// FUNCTIONS
const searchPhoto = (event) => {
  event.preventDefault();
  const query = input.value;
  const endpoint = `https://api.unsplash.com/search/photos?client_id=${key}&query=${query}`;
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

// EVENTS

form.addEventListener("submit", searchPhoto);

// https://api.unsplash.com/search/photos?client_id=cc2b94a38fb…8a5c51847ff9146c013a33908621b0701c7f79698ff734a&query=office

// fetch(url).then().then().catch()
