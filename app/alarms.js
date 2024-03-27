import { useEffect, useState } from "react";
import { Text, View, ScrollView, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack, useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native";
import {
  calculateAlarmTime,
  calculateTimeTilRing,
  findNextSelectedDay,
} from "../helper/dates";

const Alarms = () => {
  const router = useRouter(); // Router For Back Header Button
  const [daySelected, setDaySelected] = useState([
    {
      title: "Sunday",
      selected: false,
    },
    {
      title: "Monday",
      selected: false,
    },
    {
      title: "Tuesday",
      selected: false,
    },
    {
      title: "Wednesday",
      selected: false,
    },
    {
      title: "Thursday",
      selected: false,
    },
    {
      title: "Friday",
      selected: false,
    },
    {
      title: "Saturday",
      selected: false,
    },
  ]); // Days Users Wants Alarm To Repeat

  const [timeNow, setTimeNow] = useState(new Date()); // Fixed Time Since User Opened Alarm Page (Does not alter)
  const [ring, setRing] = useState(new Date()); // Time User Selects For Alarm To Ring
  const [closest, setClosest] = useState(null); // Closet Upcoming Day From Today That User Has Selected To Have Alarm Repeat

  // Each Time User Selects A Day For Alarm To Repeat, Check And Update Closest Day From Today
  useEffect(() => {
    let nextDay = findNextSelectedDay(daySelected);
    setClosest(nextDay);
  }, [daySelected]);

  const onChange = ({ type }, selectedTime) => {
    if (type === "set") {
      setRing(selectedTime);
    }
  };

  const handleAlarm = () => {
    // if (time)
  };
  console.log(closest);
  return (
    <SafeAreaView
      style={{
        marginHorizontal: 20,
        backgroundColor: "#FFFFFF",
        height: "100%",
      }}
    >
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerShown: true,
          headerTitle: () => (
            <View
              style={{
                marginTop: 16,
                // backgroundColor: "#EFF3F2",
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  paddingVertical: 11,
                  paddingHorizontal: 20,
                }}
              >
                Set An Alarm
              </Text>
            </View>
          ),
          animation: "flip",
          headerLeft: () => (
            <TouchableOpacity
              style={{
                marginTop: 16,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#EFF3F2",
                borderRadius: 5,
              }}
              onPress={() => router.back()}
            >
              <AntDesign
                style={{
                  marginVertical: 11,
                  marginHorizontal: 13,
                }}
                name="arrowleft"
                size={18}
              />
            </TouchableOpacity>
          ),
        }}
      />
      {/* <ScrollView */}
      {/*   style={{ height: "100%" }} */}
      {/*   showsVerticalScrollIndicator={false} */}
      {/* > */}
      <View style={[styles.header]}>
        <DateTimePicker
          mode="time"
          display="spinner"
          value={timeNow}
          onChange={onChange}
          style={{
            marginTop: 10,
            height: 140,
            borderColor: "#EFF3F2",
            borderStyle: "solid",
            borderWidth: 1,
            borderRadius: 10,
          }}
        />
        <Text style={{ marginTop: 32, fontSize: 14, fontWeight: "600" }}>
          Repeat
        </Text>
        <View
          style={{
            flexDirection: "row",
            rowGap: 6,
            columnGap: 15,
            flexWrap: "wrap",
            marginTop: 16,
          }}
        >
          {daySelected.map((day, index) => (
            <Pressable
              key={index}
              style={[
                styles.btnDefault,
                day.selected ? styles.btnSelected : styles.btnNotSelected,
              ]}
              onPress={() => {
                const updatedDaySelected = [...daySelected]; // Create a copy of the array
                updatedDaySelected[index] = {
                  ...updatedDaySelected[index], // Copy the existing object
                  selected: !updatedDaySelected[index].selected, // Update the selected property
                };
                setDaySelected(updatedDaySelected); // Update the state
              }}
            >
              <Text
                style={[
                  styles.txtDefault,
                  day.selected ? styles.txtSelected : styles.txtNotSelected,
                ]}
              >
                {day.title}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          gap: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "#EFF3F2",
            paddingVertical: 14,
            borderRadius: 5,
            flex: 1,
          }}
        >
          <Text style={{ textAlign: "center" }}>
            {calculateTimeTilRing(timeNow, ring, closest)}
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.setDefault,
            timeNow.getTime() === ring.getTime() && closest === null
              ? styles.setDisabled
              : styles.setEnabled,
          ]}
          disabled={
            timeNow.getTime() === ring.getTime() && closest === null
              ? true
              : false
          }
          onPress={handleAlarm}
        >
          <Text
            style={{
              color: "white",
              width: "100%",
              textAlign: "center",
            }}
          >
            Set Alarm
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {},
  btnDefault: {
    width: 93,
    height: 32,
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: "solid",
  },
  btnSelected: {
    backgroundColor: "#15BA5A",
    borderColor: "#11A44E",
  },
  btnNotSelected: {
    borderColor: "#EFF3F2",
  },
  txtDefault: {
    textAlign: "center",
    fontSize: 12,
  },
  txtSelected: {
    color: "white",
  },
  txtNotSelected: {
    color: "black",
  },
  setDefault: {
    borderColor: "#11A44E",
    flex: 0.5,
    justifyContent: "center",
    borderRadius: 5,
  },
  setEnabled: {
    backgroundColor: "#15BA5A",
  },
  setDisabled: {
    backgroundColor: "#8ACDA6",
  },
});
export default Alarms;
