import React from 'react'

const Card = ({ name, email, id }) => {
  return (
    <div>
      <img src={`https://robohash.org/${id}?200x200`} alt="Robot Photo" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card
