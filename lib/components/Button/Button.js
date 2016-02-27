'use strict'

import React, {
  Component,
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

export default class Button extends Component {
  render () {
    return (
      <TouchableOpacity
      activeOpacity={0.85}
      onPress={this.props.onPress}
      style={styles.button}>
      <Text style={styles.text}>{this.props.text}</Text>
    </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    marginTop: 20,
    width: 320
  },
  text: {
    color: '#fff',
    fontWeight: '700'
  }
})
