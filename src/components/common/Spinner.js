import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const Spinner = ({ size, color }) => {
  const { spinnerStyle } = style
  return (
    <View style={spinnerStyle}>
      <ActivityIndicator size={size || 'large'} color={color || '#0000ff'}/>
    </View>
  )
}

const style = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default Spinner