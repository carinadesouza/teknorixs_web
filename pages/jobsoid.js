import Header from "../components/header" 
import Image from "../components/images";  
import Container1 from "../components/container1"  
import Container2 from "../components/container2" 
import Footer from "../components/footer";
import Cards from "../components/cards"

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
    <Cards/>
    <Footer/>
    </div>
  )
} 
export default Home;
