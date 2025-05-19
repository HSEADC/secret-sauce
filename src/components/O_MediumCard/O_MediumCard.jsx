import './O_MediumCard.scss'
import React from 'react'
import A_Text from '../A_Text/A_Text.jsx'

export default class O_MediumCard extends React.Component {
  render() {
    const { title, description, url, images, tags } = this.props

    console.log('images:', images) // <-- теперь images уже определена

    const tagElements = tags.map((tag, i) => {
      const type = i === 0 ? 'type1' : 'type2' // первый тег — type1, остальные — type2
      return <A_Text type={type} text={tag} key={i} />
    })

    const imageUrl = typeof images === 'string' ? images : null

    return (
      <a className="O_MediumCard" href={url}>
        {imageUrl && (
          <img src={imageUrl} alt={title} className="O_MediumCardImage" />
        )}
        <A_Text type="h4" text={title} />
        <div className="M_TagLineArticles">{tagElements}</div>
      </a>
    )
  }
}
