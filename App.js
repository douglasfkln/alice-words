import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Logo from './components/Logo';
import Loader from './components/Loader';
import ReadWords from './components/ReadWords';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Loader />
        <ReadWords />
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
