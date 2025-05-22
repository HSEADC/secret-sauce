import './M_SearchForm.scss'
import React from 'react'

import A_Input from '../A_Input/A_Input.jsx'
import A_Button from '../A_Button/A_Button.jsx'

export default class M_SearchForm extends React.Component {
  constructor(props) {
    super(props)
  }

  renderResetButton = () => {
    const { handleSearchInput } = this.props
    return (
      <A_Button
        text="✕"
        type="resetField"
        disabled={false}
        handleClick={() => handleSearchInput('')}
      />
    )
  }

  render() {
    const {
      searchInputValue,
      isSearchButtonDisabled,
      handleSearchInput,
      handleSearchSubmit
    } = this.props

    return (
      <div className="M_SearchForm">
        <A_Button
          text=""
          type="primary"
          disabled={isSearchButtonDisabled}
          handleClick={handleSearchSubmit}
        />
        <A_Input
          value={searchInputValue}
          placeholder="Найти"
          handleInput={handleSearchInput}
          handleSubmit={handleSearchSubmit}
        />
        {searchInputValue != '' && this.renderResetButton()}
      </div>
    )
  }
}
