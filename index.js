// Write your code in this file!

function scuberGreetingForFeet(feet){
  if (feet > 2500){
    return "No can do."
  }else if (feet > 2000){
    return "I will gladly take your thirty bucks."
  }else if (feet <= 400) {
    return "This one is on me!"
  }else {
    return "Something went wrong"
  }
}

function ternaryCheckCity(dest){
  return dest === "NYC" ? "Ok, sounds good." : "No go."
}


function switchOnCharmFromTip(tip){
  if (tip === 'generous'){
    return "Thank you so much."
  }else if (tip === 'not as generous') {
    return "Thank you."
  }else {
    return "Bye."
  }
}
