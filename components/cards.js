import React from 'react'
import Styles from "../styles/Home.module.css" 
import Image from 'next/image';
const cards = () => {
  return (
    <div className={Styles.card}>
   <div className={Styles.initialDetails}>
   <Image src="/images/image1.jpg" alt="My Image" width={300} height={300} />
    </div>
    <div className={Styles.details}>
      <p>Additional details that appear on hover.</p>
    </div>
  </div>
  )
}

export default cards
