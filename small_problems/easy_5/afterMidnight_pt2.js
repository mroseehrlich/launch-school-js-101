const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

const afterMidnight = time => {
  let [hours, minutes] = time.split(":").map(num => Number(num));

  return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
};

const beforeMidnight = time => {
  let minutes =  MINUTES_PER_DAY - afterMidnight(time);

  return minutes === MINUTES_PER_DAY ? 0 : minutes;
};

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);