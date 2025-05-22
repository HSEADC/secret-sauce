import './A_MenuPoint.scss'
import React from 'react'
import classNames from 'classnames'

export default class A_MenuPoint extends React.Component {
  render() {
    const { text, current, url, type } = this.props

    const classes = classNames({
      A_MenuPoint: true,
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
