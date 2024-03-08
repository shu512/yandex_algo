const { readFileSync, writeFileSync } = require("fs");
const lines = readFileSync("i.txt", "utf8").toString().trim().split('\n');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const year = Number(lines[1].trim());
const daysInMonth = {
  January: 31,
  February: getLeapYear(year) ? 29 : 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
};
const startWithWeekDay = lines[lines.length - 1].trim();
const startWithWeekDayIndex = weekDays.findIndex((val) => val === startWithWeekDay);

const dayWeeksAmount = getDayWeeksAmount(year);
const holidays = [];
for (let i = 2; i < lines.length - 1; i++) {
  holidays.push(lines[i].trim().split(' '));
}
const dayWeeksAmountWithHolidays = subtractHolidays(dayWeeksAmount, holidays);
const best = findBestDay(dayWeeksAmountWithHolidays);
const worse = findWorseDay(dayWeeksAmountWithHolidays);
const result = best + ' ' + worse;
console.log(`result = ${result}`);
// writeFileSync("output.txt", result.toString());

function findBestDay(dayWeeksAmount) {
  let maxDay = 'Monday';
  Object.keys(dayWeeksAmount).forEach(day => {
    if (dayWeeksAmount[day] > dayWeeksAmount[maxDay]) {
      maxDay = day;
    }
  });

  return maxDay;
}

function findWorseDay(dayWeeksAmount) {
  let minDay = 'Monday';
  Object.keys(dayWeeksAmount).forEach(day => {
    if (dayWeeksAmount[day] < dayWeeksAmount[minDay]) {
      minDay = day;
    }
  });

  return minDay;
}

function subtractHolidays(dayWeeksAmount, holidays) {
  holidays.forEach(([holidayDay, holidayMonth]) => {
    const numberOfDay = getNumberOfDay(holidayDay, holidayMonth);
    const leftDays = (numberOfDay - 1) % 7;
  
    const index = (startWithWeekDayIndex + leftDays) % 7;
    dayWeeksAmount[weekDays[index]]--;
  });
  return dayWeeksAmount;
}

function getNumberOfDay(holidayDay, holidayMonth) {
  const day = Number(holidayDay);
  const index = months.findIndex(val => val === holidayMonth);
  let sum = 0;
  for(let i = 0; i < index; i++) {
    sum += daysInMonth[months[i]];
  }
  return sum + day;
}

function getLeapYear(year){
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function getDayWeeksAmount() {
  const daysInYear = Object.values(daysInMonth).reduce((prev, cur) => prev + cur);
  const dayWeeksAmount = {
    Monday: Math.trunc(daysInYear / 7),
    Tuesday: Math.trunc(daysInYear / 7),
    Wednesday: Math.trunc(daysInYear / 7),
    Thursday: Math.trunc(daysInYear / 7),
    Friday: Math.trunc(daysInYear / 7),
    Saturday: Math.trunc(daysInYear / 7),
    Sunday: Math.trunc(daysInYear / 7),
  };
  const leftDays = daysInYear % 7;
  
  for(let i = 0; i < leftDays; i++) {
    const index = (startWithWeekDayIndex + i) % 7;
    dayWeeksAmount[weekDays[index]]++;
  }

  return dayWeeksAmount;
}