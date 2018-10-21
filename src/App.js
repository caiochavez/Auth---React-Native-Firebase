import React, { Component } from 'react'
import { View } from 'react-native'
import Header from './components/common/Header'
import LoginForm from './components/LoginForm'

class App extends Component {

  render () {
    return (
      <View>
        <Header text={'Autenticação'}/>
        <LoginForm/>
      </View>
    )
  }

}

export default App