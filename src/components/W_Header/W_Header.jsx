import './W_Header.scss'
import React from 'react'
import { getPostTeasers } from '../../javascript/Search-data.js'

import A_MenuPoint from '../A_MenuPoint/A_MenuPoint.jsx'
import O_SearchBar from '../O_SearchBar/O_SearchBar.jsx'

export default class W_Header extends React.Component {
  constructor(props) {
    super(props)

    const searchInputValue = props.prerender ? '' : props.searchInputValue

    this.state = {
      isSearchButtonDisabled: true,
      postTeasers: [],
      searchInputValue
    }
  }

  componentDidMount() {
    getPostTeasers().then((data) => {
      this.setState({
        postTeasers: data
      })
    })
  }

  handleSearchInput = (searchInputValue) => {
    let isSearchButtonDisabled = true

    if (searchInputValue.length >= 3) {
      isSearchButtonDisabled = false
    }

    this.setState({
      isSearchButtonDisabled,
      searchInputValue
    })
  }

  handleSearchSubmit = () => {
    const { prerender, homeURL } = this.props
    const { searchInputValue } = this.state

    if (prerender == undefined) {
      if (searchInputValue.length >= 3) {
        window.location.href =
          homeURL + 'search.html?request=' + searchInputValue
      }
    }
  }

  render() {
    const { prerender, homeURL, menu } = this.props
    const { isSearchButtonDisabled, searchInputValue, postTeasers } = this.state
    const currentURL = prerender == undefined ? window.location.href : ''
    const menuElements = []

    menu.forEach((menuItem, i) => {
      const { text, url } = menuItem
      const linkURL = homeURL + url

      menuElements.push(
        <A_MenuPoint
          text={text}
          type="mainMenuItem"
          current={linkURL == currentURL}
          url={linkURL}
          key={i}
        />
      )
    })

    return (
      <>
        <div className="M_HeaderCategories">{menuElements}</div>
        <A_MenuPoint text="" type="menubarLogo" url={homeURL} current={false} />

        <O_SearchBar
          isSearchButtonDisabled={isSearchButtonDisabled}
          searchInputValue={searchInputValue}
          postTeasers={postTeasers}
          handleSearchInput={this.handleSearchInput}
          handleSearchSubmit={this.handleSearchSubmit}
        />
      </>
    )
  }
}
