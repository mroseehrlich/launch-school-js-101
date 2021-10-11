const isLeapYear = (year) => {
  if (year > 1752) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    } else {
      return year % 4 === 0;
    }
  } else {
    return year % 4 === 0;
  }
};

isLeapYear(2016);
isLeapYear(2015);
isLeapYear(2100);
isLeapYear(2400);
isLeapYear(240000);
isLeapYear(240001);
isLeapYear(2000);
isLeapYear(1900);
isLeapYear(1752);
isLeapYear(1700);
isLeapYear(1);
isLeapYear(100);
isLeapYear(400);

