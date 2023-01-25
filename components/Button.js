import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { myColor } from './Color'

export default function Button(props) {
    let border = 0;
    let color = myColor.default;
    const onClick = props.onClick;
    if (props.color == 'danger') {
        color = myColor.danger;
    }
    if (props.border == 'true') {
        border = 1;
    }
  return (
    <TouchableOpacity  style={{
        padding:10,
        borderWidth: border,
        borderColor: color,
    }} 
    onPress={onClick}>
        <Text style={{color: color, fontSize: 16}}>{props.text}</Text>
    </TouchableOpacity>
    
  )
}