'use strict'

import React, {
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native'

import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import SearchActions from '../../actions/SearchActions'

export default class SearchInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: ''
    }

    this._search = this._search.bind(this)
    this._searchValue = this._searchValue.bind(this)
  }

  _searchValue(name, value) {
    this.setState({
      searchTerm: value
    })
  }

  _search () {
    SearchActions.search(this.state.searchTerm)
  }

  render () {
    return (
      <View>
        <Input
          onChange={this._searchValue} />
        <Button
          onPress={this._search}
          text="search" />
      </View>
    )
  }
}
