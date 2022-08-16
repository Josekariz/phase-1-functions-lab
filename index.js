// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
  const scuberHq = 42;
  return Math.abs(scuberHq - pickup);
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(pickup) {
  const scuberHq = 42 * 264;
  return Math.abs(scuberHq - pickup * 264);
}
distanceFromHqInFeet();

function distanceTravelledInFeet(start, destination) {
  return Math.abs((destination - start) * 264);
}
distanceTravelledInFeet(34, 38);

function calculatesFarePrice(start, destination) {
  if (Math.abs((destination - start) * 264) <= 400) {
    return 0;
  } else if (
    Math.abs((destination - start) * 264) > 400 &&
    Math.abs((destination - start) * 264) <= 2000
  ) {
    return ((Math.abs((destination - start) * 264) - 400) * 2) / 100;
  } else if (Math.abs((destination - start) * 264) > 2000 && Math.abs((destination - start) * 264) <= 2500) {
    return 25;
  } else if (Math.abs((destination - start) * 264) >= 2500) {
    return "cannot travel that far";
  }
}
calculatesFarePrice(34, 24);
