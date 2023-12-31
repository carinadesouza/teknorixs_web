import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'; 
import Styles from "../styles/Home.module.css"
const container1 = () => {  
  const router = useRouter();
  const handleClick = () => {
    router.push('jobsoid');
  };
  return (
    <div  className={Styles.flexContainer}>
      <div className={Styles.alignLeft}>
        <h1>Jobsoid </h1>   
        <hr/>
        <p>Our cloud based SaaS offering which helps organizations of all sizes to streamline their recruitment process 
          right from advertising a job opening to making a successful hire. Jobsoid is an intelligent system to effectively 
          manage advertising, sourcing, communication and collaboration on a single recruitment platform. Jobsoid mobile apps
           available for Android and iOS enable recruiters  to manage their recruitment while on the move.</p> 
           <button className={Styles.buttonGreen}  onClick={handleClick}>Explore now</button>
      </div> 
      <div className={Styles.alignRight}>
      <Image src="/images/image2.png" alt="My Image" width={500} height={500} />
      </div>
    </div>
  )
}

export default container1
