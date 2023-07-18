function scuberGreetingForFeet(rideLength) {
  let message;
  if (rideLength <= 400) {
    message = "This one is on me!";
  } else if (400 < rideLength && rideLength < 2000) {
    message = "That will be twenty bucks.";
  } else if (2000 < rideLength && rideLength < 2500) {
    message = "I will gladly take your thirty bucks.";
  } else if (rideLength > 2500) {
    message = "No can do.";
  }
  return message;
}

scuberGreetingForFeet();

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

ternaryCheckCity();

function switchOnCharmFromTip(tip) {
  let response;
  switch (tip) {
    case "generous":
      response = "Thank you so much.";
      return response;
      break;
    case "not as generous":
      response = "Thank you.";
      return response;
      break;
    default:
      response = "Bye.";
      return response;
      break;
  }
}
