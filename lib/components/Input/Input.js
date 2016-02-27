'use strict'

import React, {
  Component,
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'

export default class Input extends Component {
  constructor(props) {
    super(props)

    this._handleChange = this._handleChange.bind(this)
  }

  _handleChange(value) {
    if (this.props.onChange) {
      this.props.onChange(this.props.name, value)
    }
  }

  render () {
    return (
      <View>
        <View style={styles.inputWrap}>
          <TextInput
            {...this.props}
            autoCapitalize="none"
            onChangeText={this._handleChange}
            style={styles.input} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputWrap: {
    backgroundColor: '#ccc',
    padding: 10
  },
  input: {
    color: '#000',
    height: 30,
    width: 300,
    flex: 1
  }
})
