
const Footer = () => {
  return (
    <footer className="py-16">
      <div className=" container mx-auto">
        <div className=" flex flex-col gap-y-6">
        <div className="flex flex-col md:flex-row justify-between gap-2 ">
        <img  width={95} src="/Logo.png" alt="" />
        <p className="capitalize">&copy; 2020 epixelab all rights reserved</p>
        <nav>
        <ul
          className="capitalize flex flex-col sm:flex-row gap-y-2 sm:gap-x-2 lg:gap-x-4"
        >
          <a href="#">portfolio</a>
          <a href="#">how it works</a>
          <a href="#">pricing</a>
          <a href="#">about</a>
          <a href="#">login</a>
        </ul>
      </nav>
      </div>

      <p className=" text-gray-500 md:text-center text-sm">
      Startup Framework contains components and complex blocks which can easily be integrated into almost any design. 
      </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
