import {FaTwitter, FaFacebookSquare, FaDribbble} from 'react-icons/fa'




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
      <div className=" flex-flex-col gap-y-2 ">
      <h3 className="capitalize font-semibold text-gray-700 sm:text-lg"
        > our team  </h3>
      <h1
        className="google font-bold text-xl sm:text-2xl text-secondary capitalize"
      >meet the team  </h1>
    </div>

    <div
      className="w-full gap-5 grid sm:grid-cols-2 lg:grid-cols-3"
    >
        {
            teamMate.profile.map((pro,index)=>(
                <div
                key={index}
                className=" border-2 text-gray-600 pt-10 rounded-lg flex flex-col gap-y-4">
                <img src={pro} alt="" className='mx-auto'/>
                <h3 className=' text-tertiary font-bold  capitalize'>{teamMate.name[index]}</h3>
                <p className=' font-semibold font-serif'>{teamMate.role[index]}</p>
             
<div className="flex" >
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
</div>
</div>
        </div>
    </section>
  )
}

export default Team
