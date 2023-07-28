let clBtn = document.querySelector(".dice");
let advice = document.getElementById("gnrtAd");
let numOfAdv = document.querySelector(".advice-id");


    clBtn.addEventListener("click", () => {
      fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        advice.innerHTML = data.slip.advice;
        numOfAdv.innerHTML = `#${data.slip.id}`;
      })
      .catch((error) => {
        console.log("Error fetching advice:", error);
      });
    });
