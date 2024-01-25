
const Hero = () => {
    return (
        <section className="section">
            <div className=" container mx-auto">
                <div className=" flex flex-col lg:flex-row items-center">
                    <div className="flex flex-col gap-y-6 mx-auto">
                        <img src="/boost.png" alt="" className="h-20 w-44 md:w-auto md:h-40" />
                        <p>
                            our goal is top at the best of creativity services industy <br /> as a digital creator. in has an after comment.
                        </p>
                        <div className=" flex gap-x-4 flex-row items-center">
                            <button className="text-white py-1.5 px-5 rounded-lg w-fit capitalize font-semibold bg-primary">get started</button>
                            <img src="/Learn More.png" alt="" className="h-11" />
                        </div>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </section>
    )
}

export default Hero
