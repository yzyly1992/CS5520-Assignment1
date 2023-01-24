import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import Button from '../components/Button'
import Card from '../components/Card'

export default function Starting(props) {
  const [emailValidInfo, setEmailValidInfo] = useState(0);
  const [cellValidInfo, setCellValidInfo] = useState(0);

  function Reset() {
    props.setEmail();
    props.setCell();
    setEmailValidInfo(1);
    setCellValidInfo(1);
  }

  function SignUp() {
    if (emailValidInfo === 0 && cellValidInfo === 0) {
      props.setEmail(props.email);
      props.setCell(props.cell);
      props.setPage('Confirm');
    }
  }

  function ValidEmail(changedText) {
    props.setEmail(changedText);
    let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (validRegex.test(changedText) === false) {
      setEmailValidInfo(1);
    } else {
      setEmailValidInfo(0);
    }
  }

  function ValidCell(changedText) {
    props.setCell(changedText);
    let validRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (validRegex.test(changedText) === false) {
      setCellValidInfo(1);
    } else {
      setCellValidInfo(0);
    }
  }

  return (
    <View style={styles.container}>
      <Button text='Sign up' border='true' color='blue' />
      <Card>
        <Text style={styles.title}>Email address</Text>
        <TextInput
          style={styles.input}
          value={props.email}
          autoCapitalize={'none'}
          keyboardType={'default'}
          onChangeText={ValidEmail}
           />
        <Text style={[styles.warning, {opacity:emailValidInfo}]}>Please enter a valid email</Text>
        <Text style={styles.title}>Phone number</Text>
        <TextInput
          style={styles.input}
          value={props.cell}
          autoCapitalize={'none'}
          onChangeText={ValidCell} />
        <Text style={[styles.warning, {opacity:cellValidInfo}]}>Please enter a valid phone number</Text>
        <View style={styles.inline}>
            <Button text='Reset' color='red' onClick={Reset} />
            <Button text='Sign up' onClick={SignUp} />
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
    },
    input: {
      width: '100%',
      borderBottomWidth: 1,
      fontWeight: 'bold',
      padding: 10,
      textAlign: 'center',
      color: 'blue',
      borderBottomColor: 'blue',
    },
    warning: {
      fontSize: 14,
      marginBottom: 15,
    },
    title: {
      fontSize: 16,
      color: 'blue',
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