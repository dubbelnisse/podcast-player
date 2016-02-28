'use strict'

import React, {
  Component,
  View,
  Text
} from 'react-native'

import SearchInput from './SearchInput'
import SearchResult from './SearchResult'

export default class Search extends Component {
  render () {
    return (
      <View>
        <SearchInput />
        <SearchResult />
      </View>
    )
  }
}
