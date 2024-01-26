const Hero = () => {
    return (
        <section className="">
            <div className=" container mx-auto">
                <div className=" flex flex-col lg:flex-row lg:items-center lg:gap-x-6 xl:gap-x-20">
                    {/*  */}
                    <div className="flex flex-col gap-y-4 lg:gap-y-6 flex-1 text-center lg:text-left">
                        <p className="font-bold text-secondary boost text-[20px] sm:text-[30px] md:text-[40px]">
                            We boost <br className="hidden lg:block" /> growth  for your<br className="hidden sm:block" /> startup business
                        </p>
                        <p className="font-semibold text-secondary sm:text-[18px] lg:text-base">
                            Our goal is top at the best of creativity services industy as a digital creator. in has an after comment.
                        </p>
                        <div className="flex gap-x-4 flex-row items-center mx-auto lg:mx-0 lg:mt-4">
                            <button className="text-white py-1.5 px-4 rounded-lg w-fit capitalize font-semibold bg-primary">get started</button>
                            <img src="play.png" alt="" className="h-11" />
                            <button className="capitalize text-secondary font-semibold text-sm font-serif">learn more</button>
                        </div>
                    </div>
                    {/*  */}

                    <div className="hidden lg:flex relative">
                        <img src="/home-hero.webp" alt="" className="h-[400px] w-[450px] z-50" />

                        <div
                            className="text-sm -left-14 xl:-left-10 top-8 flex absolute space-x-2 p-3 pr-12 text-black bg-white rounded-lg shadow-2xl shadow-secondary"
                        >
                            <img src="/Activity.png" alt="" />
                            <div>
                                <p>100% business growth</p>
                                <div className="flex space-x-2">
                                <img src="/Vector.png" alt="" className="h-4 w-4 mt-0.5" />
                                    <p className="font-bold">4.9</p>
                                    <p className="text-gray-400 capitalize">(1520 review)</p>
                                </div>
                            </div>
                            {/*  */}
                          <img src="/arrow.png" alt="" className="absolute top-6 rotate-12 left-22rem xl:left-21rem" />
                            {/*  */}
                            <img
                                src="/Group.png"
                                alt=""
                                className="absolute top-24 left-8 xl:left-4 h-32"
                            />
                            {/*  */}

                            <div
                    className="text-sm absolute p-3 top-64 pr-20 -left-20 xl:-left-24  text-black bg-white rounded-lg shadow-2xl shadow-secondary"
                  >
                  <p className="capitalize font-semibold">1000,000 happy clients</p>
                  <div className="flex space-x-2">
                <img src="/Vector.png" alt="" className="h-4 w-4 mt-0.5" />
                    <p className="font-bold">4.9</p>
                    <p className="text-gray-400 capitalize">(15k review)</p>
                  </div>
                  </div>
                                  {/*  */}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero