import { motion} from 'framer-motion'
import { item,container } from '../../variants'

const testimony={
  profile:[
    '/Mask.png',
    '/Mask (1).png',
    '/Mask (2).png',
    '/Mask (3).png',],
  name:[
    'Rayhan Curran',
    'Kayley Frame',
    'Gene Whitfield',
    'Allan Kim'
  ],
  comment:[
    'Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support',
    'As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website',
    'The most important part of the Startup Framework is the samples',
    'I’ve built my website with Startup just in one day, and it was ready-to-go.'
  ]

}
const Testimonial = () => {
  
  return (
    <section className="py-14">
    <div className=" container mx-auto">
        <div className=" flex flex-col items-center gap-y-10 lg:gap-y-20 ">
        <div className="grid gap-1 text-center">
        <h3 className="uppercase font-semibold text-gray-600 text-sm"
          > textimonials  </h3>
        <h1
          className="font-bold text-xl sm:text-2xl text-secondary capitalize"
        >what clients say about us </h1>
      </div>
 <motion.div 
 className="grid gap-y-16 gap-x-10 lg:gap-x-24 md:grid-cols-2 items-center md:px-12 xl:px-24"
variants={container(3.5,'up')}
initial='initial'
whileInView={'animate'}
 >

  {
    testimony.profile.map((pro,index)=>(
      <motion.div 
      className="flex items-start gap-x-6" 
      key={index}
      variants={item('up')}
      >
        <img src={pro} alt="" />
        <div className="flex flex-col gap-y-6">
          <p className="text-secondary font-semibold">{testimony.comment[index]}</p>
          <h3 className="capitalize font-bold text-gray-500">{testimony.name[index]}</h3>
        </div>
      </motion.div>
    ))
  }
 </motion.div>


  {/*  */}

  {/*  */}
</div>

    </div>
   </section>
  )
}

export default Testimonial
