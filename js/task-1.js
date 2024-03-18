"use strict";

const categoriesList = document.querySelectorAll("#categories .item");

console.log("Categories quantity:", categoriesList.length);

categoriesList.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  console.log("Category:", categoryName);
  const itemsList = item.querySelectorAll("ul li");
  console.log("Elements:", itemsList.length);
});
