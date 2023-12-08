//Welcome screen to WeatherSpan app
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HomeScreen from "./HomeScreen";

const MainScreen = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.navigate("Home");
  };

  return (
    <LinearGradient colors={["#000033", "#000080"]} style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../assets/images/cloud.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.text}>Welcome to WeatherSpan</Text>
        <TouchableOpacity onPress={handleButtonPress} style={styles.button}> 
          <Text style={styles.buttonText}>Press Me</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

//welcomescreen style
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: 50,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MainScreen;
