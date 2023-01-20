import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'

export default function Starting(props) {
  return (
    <View style={styles.container}>
      <Button text='Sign up' border='true' color='blue' />
      <Card>
        <Text>Email address</Text>
        <TextInput />
        <Text>Phone number</Text>
        <TextInput />
        <View>
            <Button text='Reset' color='red' />
            <Button text='Sign up' />
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 50,
    }
})