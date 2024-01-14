// const { predictDay } = require("./utils");

const daysInMonth = [
  {
    name: "January",
    short: "Jan",

    days: 31,
    totalDays: 31,
  },
  {
    name: "February",
    short: "Feb",

    days: 28,
    totalDays: 59,
  },
  {
    name: "March",
    short: "Mar",

    days: 31,
    totalDays: 90,
  },
  {
    name: "April",
    short: "Apr",

    days: 30,
    totalDays: 120,
  },
  {
    name: "May",
    short: "May",

    days: 31,
    totalDays: 151,
  },
  {
    name: "June",
    short: "Jun",

    days: 30,
    totalDays: 181,
  },
  {
    name: "July",
    short: "Jul",

    days: 31,
    totalDays: 212,
  },
  {
    name: "August",
    short: "Aug",

    days: 31,
    totalDays: 243,
  },
  {
    name: "September",
    short: "Sep",
    days: 30,
    totalDays: 273,
  },
  {
    name: "October",
    short: "Oct",
    days: 31,
    totalDays: 304,
  },
  {
    name: "November",
    short: "Nov",

    days: 30,
    totalDays: 334,
  },
  {
    name: "December",
    short: "Dec",

    days: 31,
    totalDays: 365,
  },
];

// give total no of fays till month 'n'

const LEAP_YEAR_DAYS = 366;

const ORDINARY_YEAR_DAYS = 365;

const NUM = 400;

const ODD_DAYS_IN_A_CENTURY = 5;

// program to check leap year
function isLeapYear(year) {
  console.log(
    "leap year",
    Boolean(!(year % 400) || (!(year % 4) && year % 100))
  );

  //three conditions to find out the leap year
  return Boolean(!(year % 400) || (!(year % 4) && year % 100));
}

function getTotalNoOfDays(month, year) {
  if (month - 2 < 0) {
    return 0;
  }
  return isLeapYear(year) && month > 2
    ? daysInMonth[month - 2].totalDays + 1
    : daysInMonth[month - 2].totalDays;
}

function predictDay(date, month, year) {
  const oddYearsLeft = (year - 1) % NUM;

  const noOfCenturies = Math.floor(oddYearsLeft / 100);

  const noOfYearsLeft = oddYearsLeft - noOfCenturies * 100;

  const leapyears = Math.floor(noOfYearsLeft / 4);

  const ordinaryYears = noOfYearsLeft - leapyears;

  const oddDaysInCenturies = noOfCenturies * ODD_DAYS_IN_A_CENTURY;

  const totalDays =
    leapyears * LEAP_YEAR_DAYS +
    ordinaryYears * ORDINARY_YEAR_DAYS +
    getTotalNoOfDays(month, year) +
    date +
    oddDaysInCenturies;

  const dayPredicted = totalDays % 7;
  return dayPredicted ? dayPredicted : 7;
}

const date = 1;
const month = 7;
const year = 2020;

console.log("ans", predictDay(date, month, year));

// 10011111110
