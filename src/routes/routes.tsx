import { NavigationContainer } from "@react-navigation/native";

import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import { Text, StyleSheet, SafeAreaView } from "react-native";

import { Button } from "@components/global/button/buton.screen";

export default function App() {
  // let [fontsLoaded, fontError] = useFonts({
  //   Montserrat_100Thin,
  //   Montserrat_700Bold,
  // });

  // if (!fontsLoaded && !fontError) {
  //   return null;
  // }

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <Button />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3232323",
  },
});
