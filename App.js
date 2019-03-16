import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

import Logo from './components/Logo';
import Loader from './components/Loader';
import ReadWords from './components/ReadWords';
import TimeCounter from './components/TimeCounter';
import InputWords from './components/InputWords';
import Results from './components/Results';

import { If } from './components/If';

export default class App extends React.Component {

  // Tem que ser state
  state = {
    minutesToWait: 0, // tempo ate o usuario informar as palavras
    minutesToShow: 0, // representa quanto tempo falta para exibir as palavras
    showLogo: true,
    showLoader: true,
    showReadWords: false,
    showTimeCounter: false,
    showInputWords: false,
    showResults: false,
    palavra1: '',
    palavra2: '',
    palavra3: '',
    results: ''
  }

  changeState = (newState) => this.setState(newState);

  storeData = async (data) => {
    try {
      await AsyncStorage.setItem('ALICEWORDS', JSON.stringify(data));
    } catch (error) {
      console.error("Erro de storeData", error);
    }
  }

  getData = async () => {
    try {
      let value = await AsyncStorage.getItem('ALICEWORDS');
      return (value != null) ? JSON.parse(value) : false;
    } catch (error) {
      console.error("Erro get Storage", error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <If test={this.state.showLogo}>
          <Logo />
        </If>
        <If test={this.state.showLoader}>
          <Loader />
        </If>
        <If test={this.state.showReadWords}>
          <ReadWords />
        </If>
        <If test={this.state.showTimeCounter}>
          <TimeCounter />
        </If>
        <If test={this.state.showInputWords}>
          <InputWords />
        </If>
        <If test={this.state.showResults}>
          <Results />
        </If>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
