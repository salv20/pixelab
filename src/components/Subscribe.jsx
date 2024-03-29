import {motion} from 'framer-motion'
  import { FadeIn } from '../../variants'

const Subscribe = () => {
  return (
    <section className="py-4 md:py-10">
    <div className=" container mx-auto">
      <div className=" flex flex-col text-center gap-y-10 lg:gap-y-16 ">
      <motion.div 
      className="grid gap-y-1"
      variants={FadeIn('left',0.1)}
      whileInView={'show'}
      initial='hidden'
      >
      <h3 className="uppercase font-semibold text-gray-600 text-sm"
        > newsletter </h3>
      <h1
        className="google font-bold text-xl sm:text-2xl text-secondary capitalize"
      >subscribe to our newsletter</h1>
 </motion.div>
 <div className="flex flex-col md:flex-row items-center justify-between gap-y-2  gap-x-10">
        <motion.img 
        className="mx-auto" src="/Frame.webp" alt="" height='400' width='300'
        variants={FadeIn('left',0.5)}
        whileInView={'show'}
        initial='hidden'
        />
       
        <motion.div 
        className="flex flex-col gap-6 lgLgap-y-10"
        variants={FadeIn('up',0.5)}
        whileInView={'show'}
        initial='hidden'
        >
          <div className="grid gap-y-6">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <input
              type="email"
              placeholder="Your E-mail here..."
              className="outline-none py-3 indent-9 rounded-3xl border-2 shadow-xl shadow-gray-300 placeholder:text-black placeholder:font-semibold"
            />
       </div>
       <button
            className="bg-primary text-white capitalize font-semibold text-center block py-2 w-full rounded-xl"
          >
            subscribe to our newsletter
          </button>
       </motion.div>
</div>
</div>
</div>
</section>
  )
}

export default Subscribe
