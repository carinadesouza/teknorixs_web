import Header from "../components/header";
import Image from "../components/images";
import Container1 from "../components/container1";
import Container2 from "../components/container2"
import Form from "../components/form";
import Footer from "../components/footer";
import QuoteForm from "../components/quoteform";

function Home() {
  return (
    <div>
      <Image />
      <Header />
      <Container1 />
      <Container2 />
      <Container1 />
      <Form />
      <QuoteForm />
      <Footer />
    </div>
  )
}
export default Home;
