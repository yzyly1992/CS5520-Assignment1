import { View, StyleSheet } from 'react-native'
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
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginVertical: 30,
        shadowOffset:  {
          width: 10,
          height: 10,
        },
        shadowColor: 'black',
        shadowOpacity: '0.2',
        shadowRadius: 15,
        elevation: 20,
    },
  });