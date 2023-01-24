import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

export default function Confirm(props) {
  return (
    <View style={styles.container}>
      <Card>
        <View>
          <Text style={styles.info}>You have entered:</Text>
          <Text style={styles.info}>{props.email}</Text>
          <Text style={styles.info}>{props.cell}</Text>
          <Text style={styles.info}>Please confirm they are correct.</Text>
        </View>
        <View style={styles.col}>
          <Button text='Go back' onClick={()=>props.setPage('Startinig')} color='red' />
          <Button text='Confirm' onClick={()=>props.setFinish(true)} />
          <Button text='Finish Later' onClick={()=>props.setPage('Finish')} />
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
    justifyContent: 'center',
    margin: 50,
  },
  info: {
    color: 'purple',
    fontSize: 16,
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
  }
})