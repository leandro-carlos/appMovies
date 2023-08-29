import { NavigationContainer } from "@react-navigation/native";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

import { Button } from "@components/global/button/buton.screen";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Text> app</Text>
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
