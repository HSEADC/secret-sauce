import { TextEncoder, TextDecoder } from 'util'
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import W_Header from './components/W_Header/W_Header.jsx'
import { homeURL, menu } from './menubar-data.js'

const props = {
  prerender: true,
  homeURL,
  menu
}

const menubar = ReactDOMServer.renderToString(
  React.createElement(W_Header, props)
)

export { menubar }
