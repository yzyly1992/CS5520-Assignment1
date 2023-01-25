import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { myColor } from '../components/Color'

export default function Confirm(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <View>
          <Text style={styles.info}>You have entered:</Text>
          <Text style={styles.info}>{props.email}</Text>
          <Text style={styles.info}>{props.cell}</Text>
          <Text style={styles.info}>Please confirm they are correct.</Text>
        </View>
        <View style={styles.col}>
          <Button text='Go back' onClick={()=>props.setPage('Startinig')} color='danger' />
          <Button text='Confirm' onClick={()=> {
            props.setFinish(true);
            props.setPage('Finish');
          }} />
          <Button text='Finish Later' onClick={()=>props.setPage('Finish')} />
        </View>
      </Card>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50,
  },
  info: {
    color: myColor.select,
    fontSize: 16,
    margin: 2,
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
  }
})