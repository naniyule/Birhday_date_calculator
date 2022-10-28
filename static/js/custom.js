var validMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var monthCodeArray = [
  "0",
  "3",
  "3",
  "6",
  "1",
  "4",
  "6",
  "2",
  "5",
  "0",
  "3",
  "5",
];

function compareDate(birthDate) {
  // determine if the date is not in the future
  var time1 = new Date(birthDate);
  var today = new Date();
  var diff = today - time1;

  if (diff > 0) {
    return (valid = false);
  } else if (diff < 0) {
    return (valid = true);
  } else {
    return (valid = false);
  }
}

function checkLeapYear(year) {
  valid = false;
  // is number evenly divisible by 4
  divisibleBy4 = year % 4;
  // is number evenly divisible by 100
  divisibleBy100 = year % 100;
  // is number evenly divisible by 400
  divisibleBy400 = year % 400;

  if (divisibleBy4 != 0) {
    // not a leap year
    return (valid = false);
  } else if (divisibleBy100 != 0) {
    //Is a Leap year
    return (valid = true);
  } else if (divisibleBy400 != 0) {
    //Is not Leap year.
    return (valid = false);
  } else {
    //Not a leap year
    return (valid = true);
  }
}
