//Pobieranie elementów do zmiennych
const btnRandom = document.querySelector(".btn-random");
const btnAgain = document.querySelector(".btn-again");
const drawn = document.querySelector(".drawn");

var v = [...document.querySelectorAll(".inputs")];

var isWon = false;

btnRandom.addEventListener("click", function() {
  if (!isWon) {
    var random = [];
    var inputs = [];

    const getRandom = () => {
      var rand = Math.round(Math.random() * 44) + 1;
      if (random.indexOf(rand) == -1) {
        random.push(rand);
      } else {
        var rand = Math.round(Math.random() * 44) + 1;
        random.push(rand);
      }
    };

    const changeToGreen = () => {
      for (var i = 0; i < v.length; i++) {
        for (var j = 0; j < v.length; j++) {
          if (inputs[j] == random[i]) {
            v[j].style.backgroundColor = "green";
          }
        }
      }
    };

    const changeDisplay = () => {
      btnRandom.style.display = "none";
      for (var i = 0; i < v.length; i++) {
        v[i].disabled = true;
      }
    };

    for (var i = 0; i < v.length; i++) {
      inputs.push(v[i].value);
      getRandom();
    }

    drawn.innerHTML = "Wylosowane liczby: " + random;

    changeToGreen();
    changeDisplay();

    isWon = true;
  }
});
btnAgain.addEventListener("click", function() {
  isWon = false;
  for (var i = 0; i < v.length; i++) {
    v[i].disabled = false;
  }
  btnRandom.style.display = "block";
  for (var i = 0; i < v.length; i++) {
    v[i].style.backgroundColor = "white";
  }
  drawn.innerHTML = "Wylosowane liczby: ";
  for (var i = 0; i < v.length; i++) {
    v[i].value = "";
  }
});
