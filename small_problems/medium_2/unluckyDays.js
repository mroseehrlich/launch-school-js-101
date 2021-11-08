const fridayThe13ths = (year) => {
  let fridays = 0;

  for (let month = 0; month < 12; month++) {
    let date = new Date(`${month} 13 ${year}`);

    if (date.getDay() === 5) {
      fridays += 1;
    }
  }

  console.log(fridays);
};

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2