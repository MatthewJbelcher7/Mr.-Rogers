// Buisness UI//

function beepBoop(numbr) {
  let result = [];
  if (numbr.constructor !== Number) {
    return "What are you doing Neighbor... " + numbr + " is not a number."
  }

  for (let i = 0; i <= numbr; i++) {
    if (i.toString().includes("3")) {
      result.push("Won't you be my neighbor?");
    } else if (i.toString().includes("2")) {
      result.push("Boop");
    } else if (i.toString().includes("1")) {
      result.push("Beep");
      console.log(result)
    } else {
    result.push(i);
    } 
  }
  return result;
}
