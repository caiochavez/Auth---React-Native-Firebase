import React, { Component } from 'react'
import firebase from 'react-native-firebase'
import { View } from 'react-native'
import Header from './components/common/Header'
import LoginForm from './components/LoginForm'
import Button from './components/common/Button';
import Spinner from './components/common/Spinner';

class App extends Component {

  state = { loggedIn: false }

  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) this.setState({ loggedIn: true })
      else this.setState({ loggedIn: false })
    })
  }

  renderContent () {
    switch (this.state.loggedIn) {
      case true:
        return <Button onPress={() => firebase.auth().signOut()} >Sair</Button>
      case false:
        return <LoginForm/>
      default:
        return <Spinner />
    }
  }

  render () {
    return (
      <View>
        <Header text={'Autenticação'}/>
        { this.renderContent() }
      </View>
    )
  }

}

export default App