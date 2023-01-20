import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button(props) {
    let border = 0;
    let color = 'blue';
    const onClick = props.onClick;
    if (props.color == 'red') {
        color = 'red'
    }
    if (props.border == 'true') {
        border = 1;
    }
  return (
    <TouchableOpacity  style={{
        padding: 7,
        borderWidth: border,
        borderColor: color,
    }} 
    onPress={onClick}>
        <Text style={{color: color}}>{props.text}</Text>
    </TouchableOpacity>
    
  )
}