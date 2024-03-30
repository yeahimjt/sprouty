import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack, useRouter } from "expo-router";
import { AlarmBtn, WeekProgress, Welcome } from "../components";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#FFFFFF" },
          headerShadowVisible: false,
          animation: "flip",
          headerShown: false,
        }}
      />
      <ScrollView
        style={{ height: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Welcome />
          <WeekProgress />
          <AlarmBtn />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
