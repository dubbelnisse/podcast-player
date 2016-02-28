'use strict'

import React, {
  Component,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native'

import SearchStore from '../../stores/SearchStore'
import connectToStores from 'alt-utils/lib/connectToStores'

class SearchResult extends Component {
  static getStores () {
    return [SearchStore]
  }

  static getPropsFromStores () {
    return SearchStore.getState()
  }

  _renderResult () {
    if (this.props.searchResult.length === 0) { return null }

    return this.props.searchResult.splice(0, 10).map((result, i) => {
      return (
        <View
          style={styles.podcast}
          key={i}>
          <Image
            style={styles.image}
            source={{uri: `${result.artworkUrl60}`}} />
          <Text>{result.collectionName}</Text>
        </View>
      )
    })
  }

  render () {
    return (
      <ScrollView style={styles.searchResult}>
        {this._renderResult()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
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

export default connectToStores(SearchResult)
