// import './menubar.scss'
import React from 'react'
import { createRoot } from 'react-dom/client'
import * as ReactDOM from 'react-dom/client'

import W_Header from '../components/W_Header/W_Header.jsx'
import { homeURL, menu } from './menubar-data.js'

console.clear()

function getSearchRequest() {
  const url = new URL(window.location.href)
  const searchParams = new URLSearchParams(url.search)

  if (searchParams.has('request')) {
    return searchParams.get('request')
  } else {
    return ''
  }
}

const props = {
  homeURL,
  menu
}
const root = ReactDOM.createRoot(document.querySelector('.W_Header '))
root.render(<W_Header searchInputValue={getSearchRequest()} {...props} />)
