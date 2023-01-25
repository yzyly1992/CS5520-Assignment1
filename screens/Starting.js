import { View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import { myColor } from '../components/Color'

export default function Starting(props) {

  function Reset() {
    props.setEmail();
    props.setCell();
    props.setEmailValidInfo(0);
    props.setCellValidInfo(0);
  }

  function SignUp() {
    let boolEmail = ValidEmail();
    let boolCell = ValidCell();
    if (boolEmail && boolCell) {
      props.setPage('Confirm');
    } 
  }

  function ValidEmail() {
    let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (validRegex.test(props.email) === false) {
      props.setEmailValidInfo(1);
      return false;
    } else {
      props.setEmailValidInfo(0);
      return true;
    }
  }

  function ValidCell() {
    let validRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (validRegex.test(props.cell) === false) {
      props.setCellValidInfo(1);
      return false;
    } else {
      props.setCellValidInfo(0);
      return true;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button text='Sign up' border='true' />
      <Card>
        <Text style={styles.title}>Email address</Text>
        <TextInput
          style={styles.input}
          value={props.email}
          autoCapitalize={'none'}
          keyboardType={'default'}
          onChangeText={(changedText)=>{
            props.setEmail(changedText);
            props.setEmailValidInfo(0);
            props.setCellValidInfo(0);
          }}
           />
        <Text style={[styles.warning, {opacity:props.emailValidInfo}]}>Please enter a valid email</Text>
        <Text style={styles.title}>Phone number</Text>
        <TextInput
          style={styles.input}
          value={props.cell}
          autoCapitalize={'none'}
          onChangeText={(changedText)=>{
            props.setCell(changedText);
            props.setEmailValidInfo(0);
            props.setCellValidInfo(0);
          }} />
        <Text style={[styles.warning, {opacity:props.cellValidInfo}]}>Please enter a valid phone number</Text>
        <View style={styles.inline}>
            <Button text='Reset' color='danger' onClick={Reset} />
            <Button text='Sign up' onClick={SignUp} />
        </View>
      </Card>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      margin: 50,
    },
    input: {
      width: '100%',
      borderBottomWidth: 1,
      fontWeight: 'bold',
      padding: 10,
      textAlign: 'center',
      color: myColor.default,
      borderBottomColor: myColor.default,
    },
    warning: {
      fontSize: 14,
      marginBottom: 15,
      color: myColor.silent,
    },
    title: {
      fontSize: 16,
      color: myColor.default,
      marginVertical: 5,
    },
    inline: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      margin: 10,
    }
})