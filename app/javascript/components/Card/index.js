import React from 'react'

const Card = ({ title, body, id, removeIdea }) => {
  return(
    <article>
      <p className='idea-title'>{ title }</p>
      <p className='idea-body'> { body }</p>
      <button onClick={ () => removeIdea(id)}> remove me </button>
    </article>
  )
}

export default Card;
