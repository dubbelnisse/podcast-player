import alt from '../alt'
import SearchActions from '../actions/SearchActions'

class SearchStore {
  constructor() {
    this.bindListeners({
      update: SearchActions.update
    })

    this.searchResult = []
  }

  update (searchResult) {
    this.searchResult = searchResult
  }
}

export default alt.createStore(SearchStore, 'SearchStore')
