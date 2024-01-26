import Blocks from "./components/Blocks"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Service from "./components/Service"
import Subscribe from "./components/Subscribe"
import Team from "./components/Team"
import Testimonial from "./components/testimonial"

const App = () => {
  return (
    <div className="px-4 sm:px-6 xl:px-20 xxl:px-44 container mx-auto overflow-hidden relative">
      <Header />
      <Hero />
      <Service/>
       <Blocks/>
       <Testimonial/>
       <Team/>
       <Subscribe/>
       <Footer/>
    </div>
  )
}

export default App

