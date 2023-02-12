// Buisness UI//
function beepBoop(numbr) {
  let result = [];
  if (numbr.constructor !== Number) {
    return result = "You've made this day a special day, by just your being you. There's no person in the whole world like you, and I like you just the way you are... however... " + numbr + " is not a number."
  }

  if (numbr > 143) {
    return "'We get so wrapped up in numbers in our society. The most important thing is that we are able to be one-to-one, you and I with each other at the moment. If we can be present to the moment with the person that we happen to be with, that's what's important.'"
  }

  if (numbr === 143) {
    return "I love you!!!  https://www.youtube.com/watch?v=X9sr1sAmvLY"
  }

  for (let i = 0; i <= numbr; i++) {
    if (i.toString().includes("3")) {
      result.push("Won't you be my neighbor?");
    } else if (i.toString().includes("2")) {
      result.push("Boop");
    } else if (i.toString().includes("1")) {
      result.push("Beep");
    } else {
    result.push(i);
    } 
  }
  return result;
}

// User Interface//
document.querySelector("input[type=button]").addEventListener("click", roboRogers);

function roboRogers() {
  let numbr = document.getElementById("number").value;
  numbr = parseInt(numbr);
  document.getElementById("result").innerHTML = beepBoop(numbr);
  console.log(document.getElementById("result").innerHTML);
}