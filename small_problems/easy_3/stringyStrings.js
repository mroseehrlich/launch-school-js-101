const stringy = (int) => {
  let string = "";


  for ( let index = 0; index < int; index += 1) {
    if (index % 2 === 0) {
      string += "1";
    } else {
      string += "0";
    }
  }

  return string;
};

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"