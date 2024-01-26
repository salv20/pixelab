import Blocks from "./components/Blocks"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Service from "./components/Service"
import Testimonial from "./components/testimonial"

const App = () => {
  return (
    <div className="px-4 sm:px-6 xl:px-20 xxl:px-44 container mx-auto overflow-hidden relative">
      <Header />
      <Hero />
      <Service/>
       <Blocks/>
       <Testimonial/>
      <div className=" h-[4000px]"></div>
    </div>
  )
}

export default App

