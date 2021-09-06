import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.loadingText}>Loading</Text>
      <Text style={styles.loadingText}>the Weather 🇰🇷</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingBottom: 34+50,
    paddingTop: 44,
    backgroundColor: "#121212",
  },
  loadingText: {
    color: "#eeeeee",
    fontSize: 30,
    fontWeight: "bold",
  }
});
