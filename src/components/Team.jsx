import {FaTwitter, FaFacebookSquare, FaDribbble} from 'react-icons/fa'
import {motion} from 'framer-motion'
import { FadeIn } from '../../variants'

const teamMate={
    profile:[
        '/Mask (4).png',
        '/Mask (5).png',
        '/Mask (6).png',
    ],
    name:[
    'Vanessa Laird',
    'Mason Campbell',
    'Irea Evans'
    ],
    role:[
    'UI Designer',
    'UI Designer',
    'Client Manager'
    ]
}
const Team = () => {
  return (
    <section className="py-4 md:py-10">
    <div className=" container mx-auto">
      <div className=" flex flex-col items-center text-center gap-y-10 ">
      <motion.div 
      className='grid gap-1'
      variants={FadeIn('down',0.3)}
      initial='hidden'
      whileInView={'show'}
      >
      <h3 className="uppercase font-semibold text-gray-600 text-sm"
        > our team  </h3>
      <h1
        className="google font-bold text-xl sm:text-2xl text-secondary capitalize"
      >meet the team  </h1>
    </motion.div>

    <motion.div
      className="w-full gap-5 grid sm:grid-cols-2 lg:grid-cols-3"
      variants={FadeIn('left',0.3)}
      initial='hidden'
      whileInView={'show'}
    >
        {
            teamMate.profile.map((pro,index)=>(
                <div
                key={index}
                className=" border-2 text-gray-600 pt-10 rounded-lg flex flex-col gap-y-4">
                <img src={pro} alt="" className='mx-auto'/>
                <h3 className=' text-tertiary font-bold  capitalize'>{teamMate.name[index]}</h3>
                <p className=' font-semibold font-serif uppercase'>{teamMate.role[index]}</p>
             
                <div className="flex mt-2" >
         <button className='py-3 border-2 border-b-0 w-full flex justify-center' >
                  <FaTwitter/>
         </button>
         <button className='py-3 border-2 border-b-0 w-full flex justify-center'>
                  <FaFacebookSquare/>
         </button>
         <button className='py-3 border-2 border-b-0 w-full flex justify-center'>
                  <FaDribbble/>
         </button>
         </div>
                </div>
            ))
        }
</motion.div>
</div>
        </div>
    </section>
  )
}

export default Team
