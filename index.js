// Write your code in this file!
function scuberGreetingForFeet(value) {
  let result = "";
  if (value <= 400) {
    result = 'This one is on me!';
  } else if (value > 2000 && value < 2500){
    result = 'I will gladly take your thirty bucks.';
  } else if (value > 2500) {
    result = 'No can do.'
  }
  return result;
}

function ternaryCheckCity(city) {
  return ( city == "NYC" ? "Ok, sounds good." : "No go.")
}

function switchOnCharmFromTip(Tip) {
  switch(Tip) {
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    case 'thanks for everything':
      return "Bye.";
      break;

  }
}
