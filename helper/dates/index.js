// Get Hours and Minutes From Users Selected Time
export function calculateAlarmTime(currentTime, alarmTime) {
  const current = new Date(currentTime);
  const alarm = new Date(alarmTime);

  let hoursDiff = alarm.getHours() - current.getHours();
  let minutesDiff = alarm.getMinutes() - current.getMinutes();

  if (hoursDiff < 0 || (hoursDiff === 0 && minutesDiff <= 0)) {
    hoursDiff += 24; // Add 24 hours to get the correct time for the next day
  }

  if (minutesDiff < 0) {
    minutesDiff += 60; // Add 60 minutes to get the correct minutes
    hoursDiff--; // Subtract 1 hour since we added 60 minutes
  }

  return { hours: hoursDiff, minutes: minutesDiff };
}

// Simplify Time Til Alarm Rings From Users Selected Time
export function calculateTimeTilRing(timeNow, ring, closest) {
  const cur = new Date();
  const time = calculateAlarmTime(timeNow, ring);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  console.log(closest, daysOfWeek[cur.getDay()]);
  if (closest !== daysOfWeek[cur.getDay()] && closest) {
    return `Ringing in ${daysUntil(cur.getDay(), closest)} days`;
  } else {
    return time.hours !== 24 || time.minutes !== 0
      ? `Ringing in ${time.hours !== 24 ? time.hours + " hrs " : ""}` +
          `${time.minutes !== 0 ? time.minutes + " mins" : ""}`
      : "No Time Set";
  }
}

// Given User Has Selected A Day For Alarm To Repeat, Find The Closest Day To Let Them Know How Many Days Til Their Alarm Will Ring
export function findNextSelectedDay(daySelected) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date().getDay(); // Get the current day index (0-6)

  for (let i = today + 1; i < today + 8; i++) {
    const dayIndex = i % 7; // Ensure the index wraps around to stay within 0-6
    const day = daySelected.find((day) => day.title === daysOfWeek[dayIndex]);
    if (day && day.selected) {
      return day.title; // Return the title of the next selected day
    }
  }

  return null; // Return null if no selected day is found
}

// With User Selecting A Day For Alarm To Repeat Return Number Of Days Til Alarm Rings
export function daysUntil(currentDay, targetDay) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayNum = currentDay;
  const targetDayNum = daysOfWeek.indexOf(targetDay);

  let daysUntil = targetDayNum - currentDayNum;
  if (daysUntil <= 0) {
    daysUntil += 7;
  }

  return daysUntil;
}
