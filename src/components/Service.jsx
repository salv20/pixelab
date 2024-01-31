import { FadeIn } from "../../variants" 
import {motion} from 'framer-motion'

const services={
    icon: [
        '/Activity.png',
        '/Chart.png',
        '/Video.png'
    ],
    title:[
        'graphic design',
        'video editing',
        'digital marketing'
    ],
    content:[
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi.',
]
}
const Service = () => {
  return (
    <section className="py-16">
      <div className=" container mx-auto">
        <div className=" flex flex-col items-center gap-y-10 ">
        <motion.div 
        className="text-center grid gap-1"
        variants={FadeIn('down',0.3)}
        initial='hidden'
        whileInView={'show'}
        >
        <h3 className="uppercase text-sm font-semibold text-gray-600"
          > services  </h3>
        <h1
          className="google font-bold text-xl sm:text-2xl text-secondary capitalize"
        >our vision & our goals </h1>
      </motion.div>

      <motion.div
        className="grid gap-y-6 lg:gap-y-0 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 pt-1 md:pt-2 px-2 bg-white rounded-xl pb-4"
        variants={FadeIn('left',0.4)}
        initial='hidden'
        whileInView={'show'}
     
     >
        {
          services.icon.map((icon,index)=>(
             <div
              className="flex flex-col items-center text-center gap-y-5 pb-8 p-4 rounded-xl shadow-xl shadow-gray-300"
              key={index}>
             <img src={icon} alt="" height='60' width='60' />
             <h2 className="capitalize text-[25px] font-bold ">{services.title[index]}</h2>
             <p className="px-2 text-sm">{services.content}</p>
             <button
             aria-label="get started"
             className="py-1 mt-4 bg-primary rounded-lg px-4 text-white capitalize"
              >learn more </button>

        </div>

          ))
        }
        </motion.div>


      {/*  */}
        </div>
      </div>
    </section>
  )
}

export default Service
