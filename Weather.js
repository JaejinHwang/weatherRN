import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Clouds: {
        iconName: "ios-cloud-outline",
        gradient: ["#C9D6FF", "#E2E2E2"]
    },
    Rain: {
        iconName: "ios-rainy-outline",
        gradient: ["#373B44", "#4286f4"]
    },
    Thunderstorm: {
        iconName: "ios-thunderstorm-outline",
        gradient: ["#0F2027", "#203A43", "#2C5364"]
    },
    Drizzle: {
        iconName: "ios-cloud-outline",
        gradient: ["#C9D6FF", "#E2E2E2"]
    },
    Snow: {
        iconName: "ios-snow-outline",
        gradient: ["#7F7FD5", "#86A8E7","#91EAE4"],
    },
    Clear: {
        iconName: "ios-sunny-outline",
        gradient: ["#C6FFDD", "#FBD786", "#F7797D"]
    },
    // Mist: {
    //     iconName: "ios-cloud-outline",
    //     gradient: ["#C9D6FF", "#E2E2E2"]
    // },
    // Smoke: {
    //     iconName: "ios-cloud-outline",
    //     gradient: ["#C9D6FF", "#E2E2E2"]
    // },
    // Haze: {
    //     iconName: "ios-cloud-outline",
    //     gradient: ["#C9D6FF", "#E2E2E2"]
    // },
    // Dust: {
    //     iconName: "ios-cloud-outline",
    //     gradient: ["#C9D6FF", "#E2E2E2"]
    // },
    // Fog: {
    //     iconName: "ios-cloud-outline",
    //     gradient: ["#C9D6FF", "#E2E2E2"]
    // },
    // Sand: {
    //     iconName: "ios-cloud-outline",
    //     gradient: ["#C9D6FF", "#E2E2E2"]
    // },
    // Ash: {
    //     iconName: "ios-cloud-outline",
    //     gradient: ["#C9D6FF", "#E2E2E2"]
    // },
    // Squall: {
    //     iconName: "ios-cloud-outline",
    //     gradient: ["#C9D6FF", "#E2E2E2"]
    // },
    // Tornado: {
    //     iconName: "ios-cloud-outline",
    //     gradient: ["#C9D6FF", "#E2E2E2"]
    // }
};

export default function Weather ({ temp, condition }) {
    return(
        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
            <View style={styles.topContainer}>
                <Ionicons name={weatherOptions[condition].iconName} size={60} color="#ffffff" />
                <Text style={styles.weatherText}>{ temp }°C</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.weatherText}>{ condition }</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 24,
      paddingBottom: 34,
      paddingTop: 44,
    },
    weatherText: {
      color: "#ffffff",
      fontSize: 30,
      fontWeight: "bold",
    },
    topContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    bottomContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
  });