'use strict'

import React, {
  AppRegistry,
  Component
} from 'react-native'

import App from './App'

class podcastPlayer extends Component {
  render() {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('podcastPlayer', () => podcastPlayer);
