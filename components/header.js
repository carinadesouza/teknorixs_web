import React from 'react' 
import Styles from "../styles/Home.module.css"
const header = () => {
  return (
    <div className={Styles.header}>
      <h1>Our Products</h1> 
      <p>As we continue to innovate these products adding new functionality
         and fulfilling feature requests from customers, we have an entire suite of products lined up on our roadmap.</p>
    </div>
  )
}

export default header
