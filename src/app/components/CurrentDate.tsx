// code to check if current year is a leap year

const daysInMonth = (month: string, year: number) => {
  const monthIndex = new Date(Date.parse(`${month} 1, ${year}`)).getMonth();
  return new Date(year, monthIndex + 1, 0).getDate();
};

const getCurrentDate = () => {
  const months = [
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

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const now = new Date();
  const currentDate = {
    year: now.getFullYear(),
    month: months[now.getMonth()],
    dayOfWeek: daysOfWeek[now.getDay()],
    date: now.getDate(),
    hour: now.getHours(),
    minute: now.getMinutes(),
    daysInMonth: daysInMonth(months[now.getMonth()], now.getFullYear()),
  };

  return currentDate;
};

export default getCurrentDate;
