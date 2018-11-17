function scuberGreetingForFeet(someValue){

  let rideCost;
  if (someValue > 2500) {
    return rideCost = 'No can do.';
  } else if (someValue >= 2000) {
    return rideCost = "I will gladly take your thirty bucks.";
  } else if (someValue <= 400) {
    return rideCost = "This one is on me!";
  }
}

function ternaryCheckCity(city) {
  return city === "NYC"? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  let response;
  switch(tip){
    case "generous":
    response = "Thank you so much."
    break;
      case "not as generous":
        response = "Thank you."
        break;
      default:
        response = "Bye."
        break;
      }
      return response
    }
