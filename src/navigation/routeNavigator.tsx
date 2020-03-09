import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function RouteNavigator() {
    return (
        <View style={styles.screen}>
          <Text>Hello from  the route side</Text>
        </View>
      );
}


const styles  = StyleSheet.create({
  screen: {
      padding: 90,
  }
})