import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({card, feedback}) => (
  <div classname={`card ${feedback}`}>
    <span className="symbole">
      {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
    </span>
  </div>
)

export default Card
