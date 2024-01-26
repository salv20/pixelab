import Header from "./components/Header"
import Hero from "./components/Hero"

const App = () => {
  return (
    <div className="px-4 sm:px-6 xl:px-20 xxl:px-44 container mx-auto overflow-hidden relative">
    <Header />
      <Hero />

      <div className=" h-[4000px]"></div>
    </div>
  )
}

export default App

