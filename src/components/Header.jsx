import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const Header = () => {
    const [nav, setNav] = useState(true)
    return (
        <header className="py-8">
            <div className="container mx-auto">
                <div className="flex flex-row justify-between items-center font-serif">

                    <img src="/Logo.png" alt="" className="h-6 md:h-8 lg:h-10" />

                    <ul className="hidden md:flex gap-x-4 capitalize">
                        <li className="cursor-pointer">home</li>
                        <li className="cursor-pointer">about us</li>
                        <li className="cursor-pointer">our app</li>
                        <li className="cursor-pointer">contacts</li>
                    </ul>

                    <div className="hidden md:flex gap-x-4">
                        <button aria-label="log in" className="font-semibold">Log in</button>
                        <button aria-label="sign up" className="bg-primary text-white py-1.5 font-semibold px-4 rounded-md" > Sign up </button>
                    </div>

                    <div className="block md:hidden">
                        <button
                            className='text-primary text-[20px]'
                            onClick={() => setNav(false)} >
                            <FaBars /></button>

                        <nav className={`${nav ? 'translate-x-full' : 'translate-x-0'} transition-all duration-1000 flex py-6 w-full absolute top-0 flex-col gap-y-4 px-4 left-0 bg-white h-full z-50`}>
                            <button
                                className='text-primary text-[25px] w-fit ml-auto'
                                onClick={() => setNav(true)}>
                                <FaTimes /></button>

                            <ul className="flex flex-col capitalize gap-y-5 ">
                                <li className="cursor-pointer w-fit">home</li>
                                <li className="cursor-pointer w-fit">about us</li>
                                <li className="cursor-pointer w-fit">our app</li>
                                <li className="cursor-pointer w-fit">contacts</li>
                                <button aria-label="log in" className="font-semibold w-fit">Log in</button>
                                <button aria-label="sign up" className="bg-primary text-white py-1.5 font-semibold px-4 w-fit rounded-md" > Sign up </button>
                            </ul>

                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
