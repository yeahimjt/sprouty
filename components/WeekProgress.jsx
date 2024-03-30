import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const WeekProgress = () => {
  const weekFormat = ["S", "M", "T", "W", "T", "F", "S"];
  function getWeekDaysOfMonth(date) {
    const days = [];
    const currentMonth = date.getMonth();
    let currentDate = date.getDate();
    let currentDay = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    // Move to the first day of the week
    date.setDate(currentDate - currentDay);

    // Add the day of the month for each day of the week
    for (let i = 0; i < 7; i++) {
      if (date.getMonth() !== currentMonth) {
        // If the month has changed, use the appropriate day of the month
        days.push(1);
      } else {
        days.push(date.getDate());
      }
      date.setDate(date.getDate() + 1);
    }

    return days;
  }

  const currentDate = new Date();
  const weekDays = getWeekDaysOfMonth(currentDate);

  const currDate = new Date(); // Have to create seperate current date to accurately get current day?

  return (
    <View>
      <View
        style={{
          marginTop: 32,
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        {weekDays.map((day, index) => (
          <View
            key={index}
            style={[
              styles.other,
              currDate.getDate() === day ? styles.curr : styles.notCurr,
            ]}
          >
            <Text style={{ textAlign: "center" }}>{weekFormat[index]}</Text>
            <Text style={{ fontSize: 14, fontWeight: "600" }}>{day}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  other: {
    flexDirection: "column",
    gap: 2,
    padding: 4,
    color: "#354F52",
  },
  curr: {
    backgroundColor: "#B1F6D4",
    borderRadius: 5,
  },
  notCurr: {
    backgroundColor: "transparent",
  },
});

export default WeekProgress;
