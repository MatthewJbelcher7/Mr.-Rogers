// Buisness UI//
function beepBoop(numbr) {
  let result = [];
  if (numbr.constructor !== Number) {
    return "You've made this day a special day, by just your being you. There's no person in the whole world like you, and I like you just the way you are... however... " + numbr + " is not a number."
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