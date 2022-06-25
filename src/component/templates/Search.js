import React, { Component } from 'react'
import AutocompleteSearch from '../utils/Search/AutoCompleteSearch'
import {autoCompleteData} from '../../component/data/searcdataTemp'
  class Search extends Component {
  render() {
    return (
      <div>Search
            
      <AutocompleteSearch data={autoCompleteData} />
      
    
      </div>
    )
  }
}

export default Search