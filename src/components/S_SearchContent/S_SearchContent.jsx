import './S_SearchContent.scss'
import React from 'react'
import { getPostTeasers } from '../../javascript/Search-data.js'
import O_MediumCard from '../O_MediumCard/O_MediumCard.jsx'

export default class S_SearchContent extends React.Component {
  constructor(props) {
    super(props)

    const { searchInputValue } = this.props

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

  renderPostTeasers = () => {
    const { postTeasers } = this.state
    let posts = []
    const searchInputValue = (this.state.searchInputValue || '').toLowerCase()
    // postTeasers.forEach((teaser) => {
    //   posts.push(teaser.title)
    // })

    postTeasers.forEach((teaser) => {
      const nbspRegex = /[\u202F\u00A0]/gm
      const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/gm

      const title = teaser.title
        .replaceAll(nbspRegex, ' ')
        .replaceAll(punctuationRegex, '')
        .toLowerCase()

      const description = teaser.description
        .replaceAll(nbspRegex, ' ')
        .replaceAll(punctuationRegex, '')
        .toLowerCase()

      if (
        title.includes(searchInputValue) ||
        description.includes(searchInputValue)
      ) {
        posts.push(
          <O_MediumCard
            title={title}
            description={description}
            key={teaser.id}
            url={teaser.url}
            tags={teaser.tags}
            images={teaser.images}
          />
        )
      }
    })

    return posts
  }
  render() {
    return <div className="S_SearchContent">{this.renderPostTeasers()}</div>
  }
}
