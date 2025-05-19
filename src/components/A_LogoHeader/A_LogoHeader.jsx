// import './A_MainMenu.scss'
import React from 'react'
import classNames from 'classnames'

export default class A_LogoHeader extends React.Component {
  render() {
    const { text, current, url, type } = this.props

    const classes = classNames({
      A_LogoHeader: true,
      current: current,
      [`${type}`]: true
    })

    return (
      <a className={classes} href={url}>
        {text}
      </a>
    )
  }
}
