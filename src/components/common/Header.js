import React from 'react'
import { Text, View } from 'react-native'

const Header = (props) => {
  const { textStyle, viewStyle } = style
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.text}</Text>
    </View>
  )
}

const style = {
  viewStyle: {
    backgroundColor: '#dfdfdf',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.2,
    elevation: 15,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
}

export default Header