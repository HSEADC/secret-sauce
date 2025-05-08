import React from 'react'

const M_PostTeaser = ({ title, description, url, tags, images }) => (
  <div className="M_PostTeaser">
    {images && images.length > 0 && <img src={images[0].url} alt={title} />}
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={url}>Читать</a>
    <div className="tags">{tags?.join(', ')}</div>
  </div>
)

export default M_PostTeaser
