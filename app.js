//Pobieranie elementów do zmiennych
const btn = document.querySelector(".btn");
const drawn = document.querySelector(".drawn");
const result = document.querySelector(".result");

btn.addEventListener("click", function() {
  var random = [];
  var inputs = [];

  var v = [...document.querySelectorAll(".inputs")];
  for (var i = 0; i < v.length; i++) {
    inputs.push(v[i].value);

    var rand = Math.round(Math.random() * 44) + 1;
    console.log(rand);
    if (random.indexOf(rand) == -1) {
      random.push(rand);
    } else {
      var rand = Math.round(Math.random() * 44) + 1;
      random.push(rand);
    }
  }
  drawn.innerHTML = "Wylosowane liczby: " + random;

  for (var i = 0; i < v.length; i++) {
    v[i].style.backgroundColor = "white";
  }

  for (var i = 0; i < v.length; i++) {
    for (var j = 0; j < v.length; j++) {
      if (inputs[j] == random[i]) {
        v[j].style.backgroundColor = "green";
      }
    }
  }
  console.log(v);

  // console.log(inputs);
  // console.log(random);
});
