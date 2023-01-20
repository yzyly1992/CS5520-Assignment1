import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Card(props) {
  return (
    <View style={styles.container}>
        {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#D3D3D3',
        padding: 15,
        borderRadius: 10,
        marginVertical: 30,
    },
  });