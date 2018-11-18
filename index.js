// Write your code in this file!
function scuberGreetingForFeet(ride) {
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!
  let greeting
  if (ride > 2500){
    greeting = "No can do."
  }
  else if (ride >= 2000) {
    greeting = "I will gladly take your thirty bucks."
  }
  else if (ride <= 400) {
    greeting = "This one is on me!";
  }
   return greeting
}; //end of function

function ternaryCheckCity(city) {
  return city === 'NYC' ? "Ok, sounds good." : "No go.";
  } //end of function

function switchOnCharmFromTip(tip) {

  switch(tip) {
    case 'generous' :
    return "Thank you so much.";
    break;
    case 'not as generous' :
    return "Thank you.";
    break;
    default:
    return "Bye.";
  }
}//end of function
