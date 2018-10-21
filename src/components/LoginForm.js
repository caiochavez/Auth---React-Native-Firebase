import React, { Component } from 'react'
import firebase from 'react-native-firebase'
import { Text } from 'react-native'
import Button from './common/Button'
import Card from './common/Card'
import CardSection from './common/CardSection'
import Input from './common/Input'
import Spinner from './common/Spinner'

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false }

  onButtonPress () {
    const { email, password } = this.state
    this.setState({ error: '' , loading: true})
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this))
    })
  }

  onLoginFail () {
    this.setState({ error: 'Erro de autenticação', loading: false })
  }

  onLoginSuccess () {
    this.setState({ email: '', password: '', loading: false, error: '' })
  }

  renderButton () {
    if (this.state.loading) return <Spinner size={'small'}/>
    else return <Button onPress={this.onButtonPress.bind(this)} flex={1}>Login</Button>
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
          placeholder='Ex: usuario@gmail.com'
          label='Email'
          onChangeText={email => this.setState({email})}
          value={this.state.email}
          />
        </CardSection>
        <CardSection>
          <Input
          secureTextEntry
          placeholder='Digite sua senha'
          label='Senha'
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          />
        </CardSection>
        <Text style={style.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          { this.renderButton() }
        </CardSection>
      </Card>
    )
  }
}

const style = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm