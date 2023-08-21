import React from 'react'
import Styles from "../styles/Home.module.css"
const cards = () => {
  return (
    <div className={Styles.card}>
   <div className={Styles.initialDetails}>
      <h2>Card Title</h2>
      <p>Initial details about the card.</p>
    </div>
    <div className={Styles.details}>
      <h2>Card Title</h2>
      <p>Additional details that appear on hover.</p>
    </div>
  </div>
  )
}

export default cards
