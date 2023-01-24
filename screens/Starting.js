import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import Button from '../components/Button'
import Card from '../components/Card'

export default function Starting(props) {
  const [tempEmail, setTempEmail] = useState();
  const [tempCell, setTempCell] = useState();
  const [emailValidInfo, setEmailValidInfo] = useState(0);
  const [cellValidInfo, setCellValidInfo] = useState(0);

  function Reset() {
    setTempEmail();
    setTempCell();
  }

  function SignUp() {
    props.setPage('Confirm');
  }

  function ValidEmail(changedText) {
    setTempEmail(changedText);
    if (changedText == "Hello") {
      setEmailValidInfo(0);
    } else {
      setEmailValidInfo(1);
    }
  }

  function ValidCell(changedText) {
    setTempCell(changedText);
    if (changedText == "1234") {
      setCellValidInfo(0);
    } else {
      setCellValidInfo(1);
    }
  }

  return (
    <View style={styles.container}>
      <Button text='Sign up' border='true' color='blue' />
      <Card>
        <Text style={styles.title}>Email address</Text>
        <TextInput
          style={styles.input}
          value={tempEmail}
          onChangeText={ValidEmail}
           />
        <Text style={[styles.warning, {opacity:emailValidInfo}]}>Please enter a valid email</Text>
        <Text style={styles.title}>Phone number</Text>
        <TextInput
          style={styles.input}
          value={tempCell}
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
      borderBottomWidth: 1.5,
      fontWeight: 'bold',
      padding: 5,
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