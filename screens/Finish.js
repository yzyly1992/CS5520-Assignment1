import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { myColor } from '../components/Color'

export default function Finish(props) {
  let link = "https://picsum.photos/id/" + props.cell.slice(-1) + "/100/100";
  
  function StartOver() {
    props.setEmail();
    props.setCell();
    props.setFinish(false);
    props.setPage('Starting');
  }

  switch (props.finish) {
    case true:
      return (
        <SafeAreaView style={styles.container}>
          <Card>
          <View style={styles.col}>
            <Text style={styles.info}>Thank you for signing up. Here's a picture for you (based on the last digit of your phone number).</Text>
              <Image 
                style={styles.img}
                source={{uri: link}}
              />
          </View>
          </Card>
          <Button text="Start Again" onClick={StartOver} />
        </SafeAreaView>
      )
    case false:
      return (
        <SafeAreaView style={styles.container}>
          <Card>
            <View style={styles.col}>
              <Text style={styles.info}>Sorry to see you go.</Text>
              <Image
                style={styles.img}
                source={require('../assets/disappointed-face.png')}
              />
            </View>
          </Card>
          <Button text="Start Again" onClick={StartOver} />
        </SafeAreaView>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 50,
  },
  info: {
    color: myColor.select,
    fontSize: 16,
  },
  img: {
    width: 100,
    height: 100,
    marginTop: 30,
    marginBottom: 10,
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  }
})