const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = SECONDS_PER_MINUTE * MINUTES_PER_DEGREE;

const dms = angleFloat => {
  let intDegrees = Math.floor(angleFloat);
  let minutes = Math.floor((angleFloat - intDegrees) * MINUTES_PER_DEGREE);
  let seconds = Math.floor((angleFloat - intDegrees -
    (minutes / MINUTES_PER_DEGREE)) * SECONDS_PER_DEGREE);

  return `${intDegrees}${DEGREE}${minutes < 10 ? '0' + minutes : minutes}'${seconds < 10 ? '0' + seconds : seconds}`;
};

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"