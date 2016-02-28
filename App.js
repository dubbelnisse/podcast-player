'use strict'

import React, {
  Component,
  StyleSheet,
  View
} from 'react-native'

import Search from './lib/components/Search/Search'

import Dimensions from 'Dimensions'
const { width, height } = Dimensions.get('window')

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Search />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: height,
    justifyContent: 'center',
    padding: 40,
    width: width,
  }
})
