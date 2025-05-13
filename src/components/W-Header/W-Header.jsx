import React from 'react'
import { getPostTeasers } from '../../Search-data.js'

import A_MainMenu from '../A_MainMenu/A_MainMenu.jsx'
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
      this.setState({ postTeasers: data })
    })
  }

  handleSearchInput = (searchInputValue) => {
    const isSearchButtonDisabled = searchInputValue.length < 3

    this.setState({
      isSearchButtonDisabled,
      searchInputValue
    })
  }

  handleSearchSubmit = () => {
    const { prerender, homeURL } = this.props
    const { searchInputValue } = this.state

    if (prerender === undefined && searchInputValue.length >= 3) {
      window.location.href =
        homeURL + 'search.html?request=' + encodeURIComponent(searchInputValue)
    }
  }

  render() {
    const { prerender, homeURL, menu } = this.props
    const { isSearchButtonDisabled, searchInputValue, postTeasers } = this.state
    const currentURL = prerender === undefined ? window.location.href : ''
    const menuElements = []

    menu.forEach((menuItem, i) => {
      const { text, url } = menuItem
      const linkURL = homeURL + url

      menuElements.push(
        <A_MainMenu
          text={text}
          type="mainMenuItem"
          current={linkURL === currentURL}
          url={linkURL}
          key={i}
        />
      )
    })

    return (
      <>
        <A_MainMenu text="" type="menubarLogo" url={homeURL} current={false} />

        <div className="M-HeaderCategories">{menuElements}</div>

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
