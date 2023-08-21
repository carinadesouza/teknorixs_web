import Header from "../components/header" 
import Image from "../components/images";  
import Container1 from "../components/container1"  
import Container2 from "../components/container2" 
import Footer from "../components/footer";
import Cards from "../components/cards"  
import Our_jobs_button from "../components/our_job"; 
import Contact_image from "../components/contact_image"
import Styles from "../styles/Home.module.css" 

 function Home() {
  return (
  <div>  
    <Image/>
    <Header/> 
    <Container1/>  
    <Header/> 
    <Container2/> 
    <Header/>  
    <Container1/> 
    <Container2/>   
    <Container1/> 
    <Container2/>  
    <Header/>  
    <div className={Styles.parent}>
    <Cards/>
    <Cards/>
    <Cards/>
    </div>
    <Our_jobs_button/>
    <Contact_image/>
    </div>
  )
} 
export default Home;
