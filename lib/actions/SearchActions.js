import alt from '../alt'
import { get } from '../helpers/httpClient'

class SearchActions {
  constructor () {
    this.generateActions('update')
  }

  search (searchTerm) {
    console.log('before', searchTerm)
    searchTerm = searchTerm.replace(/ /g,"+")
    console.log('after', searchTerm)
    return (dispatch) => {
      dispatch()

      get(`https://itunes.apple.com/search?term=${searchTerm}&country=se`)
        .then(result => {
          this.update(result.results)
        })
        .catch(err => console.log('error', err))
    }
  }
}

export default alt.createActions(SearchActions)
