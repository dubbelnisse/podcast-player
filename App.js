'use strict'

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native'

import Input from './lib/components/Input/Input'
import Button from './lib/components/Button/Button'
import SearchStore from './lib/stores/SearchStore'
import SearchActions from './lib/actions/SearchActions'
import connectToStores from 'alt-utils/lib/connectToStores'

import Dimensions from 'Dimensions'
const { width, height } = Dimensions.get('window')

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: ''
    }

    this._search = this._search.bind(this)
    this._searchValue = this._searchValue.bind(this)
  }

  static getStores () {
    return [SearchStore]
  }

  static getPropsFromStores () {
    return SearchStore.getState()
  }

  _searchValue(name, value) {
    this.setState({
      searchTerm: value
    })
  }

  _search () {
    SearchActions.search(this.state.searchTerm)
  }

  _renderResult () {
    if (this.props.searchResult.length === 0) { return null }

    return this.props.searchResult.splice(0, 10).map((result, i) => {
      console.log(result)
      return (
        <View
          style={styles.podcast}
          key={i}>
          <Image
            style={styles.image}
            source={{uri: `${result.artworkUrl60}`}} />
          <Text>{result.artistName}</Text>
        </View>
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          onChange={this._searchValue} />
        <Button
          onPress={this._search}
          text="search" />
        <ScrollView style={styles.searchResult}>
          {this._renderResult()}
        </ScrollView>
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
  },
  searchResult: {
    padding: 20
  },
  podcast: {
    flexDirection: 'row',
    marginBottom: 10
  },
  image: {
    width: 60,
    height: 60
  }
})

export default connectToStores(App)
