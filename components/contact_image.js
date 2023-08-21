import React from 'react'
import Styles from "../styles/Home.module.css" 
import Image from 'next/image'; 
const cards = () => {
  return ( 
    <div className={Styles.contactImage}>
     <Image src="/images/image2.png" alt="Background Image" width={500} height={500}/> 
    <span className={Styles.overlayText}>
      <h1>Your Text Here</h1>
      <p>This is some descriptive text over the background image.</p>
    </span>
  </div>
  )
}

export default cards
