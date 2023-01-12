import React from 'react'
import HeroLogo from '../assets/hero1.png'

const Hero = () => {
    return (
        <>
            <section className="text-gray-600 body-font px-25">
                <div className="container mx-auto flex px-28 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Master your craft, code with confidence
                        </h1>
                        <p className="mb-8 leading-relaxed">Our coding platform is designed for coders of all levels, from beginners to experts. Whether you're just starting to learn how to code or you're looking to take your skills to the next level, our platform has something for everyone. With a wide range of coding languages and resources, you'll have everything you need to master your craft and code with confidence.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Create Account</button>
                            {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={HeroLogo} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero