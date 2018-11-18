// Write your code in this file!
function scuberGreetingForFeet(distance) {
    if (distance > 2500) {
      return 'No can do.'
    } else if (distance > 2000) {
      return 'I will gladly take your thirty bucks.'
    } else if (distance <= 400) {
      return 'This one is on me!'
    }
};

function ternaryCheckCity(city) {
  city === 'NYC' ? message = 'Ok, sounds good.' : message = 'No go.';
  return message;
};

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
        return response = 'Thank you so much.';
        break;
    case 'not as generous':
        return response = 'Thank you.';
        break;
    default:
        return response = 'Bye.';
        break;
  };
};
