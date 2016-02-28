'use strict'

import React, {
  Component,
  StyleSheet,
  View,
  ScrollView
} from 'react-native'

import Player from './lib/components/Player/Player'
import Search from './lib/components/Search/Search'

import Dimensions from 'Dimensions'
const { width, height } = Dimensions.get('window')

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Player />
        <Search />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: height,
    padding: 40,
    width: width,
  }
})
