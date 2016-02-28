'use strict'

import React, {
  Component,
  View,
  Text
} from 'react-native'

import RNFS from 'react-native-fs'
import Sound from 'react-native-sound'
import Button from '../../components/Button/Button'

export default class Player extends Component {
  constructor (props) {
    super(props)

    this.state = {
      file: '',
      loaded: false,
      track: null
    }

    this._play = this._play.bind(this)
    this._pause = this._pause.bind(this)
    this._stop = this._stop.bind(this)
  }

  componentDidMount () {
    let localSong = RNFS.CachesDirectoryPath + '/5627234.mp3';
    RNFS.downloadFile('http://sverigesradio.se/topsy/ljudfil/5627234.mp3', localSong)
      .then((result) => {
        if (result.statusCode === 200) {
          this.setState({
            file: localSong,
            loaded: true,
            track: new Sound(localSong, '')
          })
        }
        // song = new Sound(localSong, '', (error) =>  {
        //   //song.play();
        // });
    });
  }

  _play () {
    this.state.track.play()
  }

  _pause () {
    this.state.track.pause()
  }

  _stop () {
    this.state.track.stop()
  }

  _currentTrackTime () {
    this.state.track.getCurrentTime(result => {
      console.log(result)
    });
  }

  render () {
    if (!this.state.loaded) { return <Text>Loading...</Text>}

    return (
      <View>
        <Text>Now playing: Palmemordet</Text>
        <Text>Duration: {this._currentTrackTime()}</Text>
        <Button onPress={this._pause} text="Pause" />
        <Button onPress={this._play} text="Play" />
        <Button onPress={this._stop} text="Stop" />
      </View>
    )
  }
}
