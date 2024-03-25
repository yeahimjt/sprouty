import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#FFFFFF" },
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text>Hey</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
