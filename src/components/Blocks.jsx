import {motion} from 'framer-motion' 
import { FadeIn } from '../../variants'
const Blocks = () => {
  return (
  <section className='py-10'>
<div className=" container mx-auto">
    <div className="flex flex-col lg:flex-row items-center gap-y-8">

        {/*  */}
        <motion.div 
        className="flex flex-col gap-y-6 text-center lg:text-left"
        variants={FadeIn('down',0.3)}
        initial="hidden"
        whileInView='show'
        >
            <h2 className="text-tertiary font-bold sm:text-[20px]">Many Blocks and <br className=" hidden sm:block"/> Components</h2>
            <p className="mx-auto md:w-4/5 lg:mx-0 text-gray-600 font-semibold">Startup Framework contains components and complex blocks which can easily be integrated into almost any design. </p>

            <button className="mt-4 lg:mt-20 mx-auto lg:mx-0 py-1.5 px-6 w-fit border-2 text-secondary rounded-2xl font-semibold">
            Explore
            </button>
        </motion.div>
        {/*  */}
      <motion.div 
        variants={FadeIn('up',0.3)}
        initial="hidden"
        whileInView='show'
      >
        <video controls className="vid bg-gray-200 py-2" width='400'>
        <source src="/VID.mp4" type="video/mp4" />
      </video>
      </motion.div>
        {/*  */}
    </div>


</div>
  </section>
  )
}

export default Blocks
