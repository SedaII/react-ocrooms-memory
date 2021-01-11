import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({card, feedback, onClick}) => (
  <div classname={`card ${feedback}`} onClick={() => onClick(card)}>
    <span className="symbole">
      {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
    </span>
  </div>
)

export default Card
