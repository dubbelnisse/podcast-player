import alt from '../alt'
import { get } from '../helpers/httpClient'

class SearchActions {
  constructor () {
    this.generateActions('update')
  }

  search (searchTerm) {
    searchTerm = searchTerm.replace(/ /g,"+")

    return (dispatch) => {
      dispatch()

      get(`https://itunes.apple.com/search?term=${searchTerm}&country=se&entity=podcast`)
        .then(result => {
          this.update(result.results)
        })
        .catch(err => console.log('error', err))
    }
  }
}

export default alt.createActions(SearchActions)
