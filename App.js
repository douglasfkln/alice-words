import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

  }

  render() {
    return (
      <View style={styles.container}>
        <If test={false}>
          <Logo />
        </If>
        <If test={false}>
          <Loader />
        </If>
        <If test={false}>
          <ReadWords />
        </If>
        <If test={false}>
          <TimeCounter />
        </If>
        <If test={false}>
          <InputWords />
        </If>
        <If test={false}>
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
