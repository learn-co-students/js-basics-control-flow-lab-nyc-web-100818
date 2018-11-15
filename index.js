// Write your code in this file!

//function 1
function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return 'This one is on me!'
  } else if (someValue > 2000  && someValue < 2500) {
  return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
}

//function 2
function ternaryCheckCity(someCity){

  return someCity === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

//function 3
function switchOnCharmFromTip(charm){
  switch (charm) {
    case 'generous':
        return 'Thank you so much.'
    case 'not as generous':
        return 'Thank you.'
    case 'thanks for everything':
        return 'Bye.'
    }
}
