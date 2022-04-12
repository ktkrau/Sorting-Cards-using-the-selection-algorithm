/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let suits = ["spades", "heart", "diamond", "clubs"];
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  let objCards = [];

  let drawButton = document.querySelector(".draw-button");
  drawButton.addEventListener("click", myFunctionCards);

  function myFunctionCards() {
    objCards = [];
    let myCard = document.querySelector(".origin-container");
    if (myCard.childNodes.length !== 0) {
      myCard.innerHTML = "";
    }
    let inputCards = parseInt(document.getElementById("numbCards").value);
    if (inputCards === 0) {
      alert("El numero debe ser mayor a 0");
    } else if (inputCards !== 0) {
      for (let i = 0; i < inputCards; i++) {
        let objElementsCard = {
          suits: suits[Math.floor(Math.random() * suits.length)],
          numbers: numbers[Math.floor(Math.random() * numbers.length)]
        };
        objCards.push(objElementsCard);
      }

      if (myCard.childNodes.length === 0) {
        for (let element of objCards) {
          if (element.numbers === 1) {
            element.numbers = "A";
          }
          if (element.numbers === 11) {
            element.numbers = "J";
          }
          if (element.numbers === 12) {
            element.numbers = "Q";
          }
          if (element.numbers === 13) {
            element.numbers = "K";
          }
          let myDiv = document.createElement("div");
          let contentDiv = document.createTextNode(`${element.numbers}`);
          myDiv.className = `card ${element.suits}`;
          myDiv.appendChild(contentDiv);
          myCard.appendChild(myDiv);
        }
      }
    }
  }

  const selectSort = () => {
    let myContainerDiv = document.querySelector(".select-sort-container");
    if (myContainerDiv.childNodes.length !== 0) {
      myContainerDiv.innerHTML = "";
    }
    let min = 0;
    while (min < objCards.length - 1) {
      if (objCards[min].numbers === "A") {
        objCards[min].numbers = 1;
      }
      if (objCards[min].numbers === "J") {
        objCards[min].numbers = 11;
      }
      if (objCards[min].numbers === "Q") {
        objCards[min].numbers = 12;
      }
      if (objCards[min].numbers === "K") {
        objCards[min].numbers = 13;
      }
      for (let i = min + 1; i < objCards.length; i++) {
        if (objCards[i].numbers === "A") {
          objCards[i].numbers = 1;
        }
        if (objCards[i].numbers === "J") {
          objCards[i].numbers = 11;
        }
        if (objCards[i].numbers === "Q") {
          objCards[i].numbers = 12;
        }
        if (objCards[i].numbers === "K") {
          objCards[i].numbers = 13;
        }
        if (objCards[min].numbers > objCards[i].numbers) {
          let aux = objCards[min].numbers;
          objCards[min].numbers = objCards[i].numbers;
          objCards[i].numbers = aux;
        }
      }
      min++;

      let myUl = document.createElement("ul");
      let liNumber = document.createElement("li");
      liNumber.innerHTML = `${min - 1}:`;
      myUl.appendChild(liNumber);
      myUl.className = "cards-sort-container";
      myContainerDiv.appendChild(myUl);
      // Este for itera cada elemento del objeto para imprimir la carta en el html
      for (let element of objCards) {
        if (element.numbers === 1) {
          element.numbers = "A";
        }
        if (element.numbers === 11) {
          element.numbers = "J";
        }
        if (element.numbers === 12) {
          element.numbers = "Q";
        }
        if (element.numbers === 13) {
          element.numbers = "K";
        }
        let myLi = document.createElement("li");
        let contentLi = document.createTextNode(`${element.numbers}`);
        myLi.className = `card ${element.suits}`;
        myLi.appendChild(contentLi);
        myUl.appendChild(myLi);
      }
    }
    return objCards;
  };

  let sortButton = document.querySelector(".sort-button");
  sortButton.addEventListener("click", selectSort);
};
