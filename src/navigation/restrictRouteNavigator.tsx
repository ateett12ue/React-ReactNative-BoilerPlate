import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
export default function RestrictRouteNavigator() {
    return (
        <View style={styles.screen}>
            <Text>Hello from the restricted Route</Text>
        </View>
    )
}

const styles  = StyleSheet.create({
    screen: {
        padding: 90,
    }
})