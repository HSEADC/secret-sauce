import React from 'react'
import { getPostTeasers } from '../../Search-data.js'
import M_PostTeaser from '../M_PostTeaser/M_PostTeaser.jsx'

export default class S_SearchContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postTeasers: [],
      searchInputValue: props.searchInputValue || ''
    }
  }

  componentDidMount() {
    getPostTeasers().then((data) => {
      this.setState({ postTeasers: data })
    })
  }

  renderPostTeasers = () => {
    const { postTeasers, searchInputValue } = this.state
    const value = searchInputValue.toLowerCase()

    return postTeasers
      .filter(({ title = '', description = '' }) => {
        const clean = (str) =>
          str
            .toLowerCase()
            .replace(/[\u202F\u00A0]/g, ' ')
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        return (
          clean(title).includes(value) || clean(description).includes(value)
        )
      })
      .map((teaser) => (
        <M_PostTeaser
          key={teaser.id}
          title={teaser.title}
          description={teaser.description}
          url={teaser.url}
          tags={teaser.tags}
          images={teaser.images}
        />
      ))
  }

  render() {
    return <div className="S_SearchContent">{this.renderPostTeasers()}</div>
  }
}
