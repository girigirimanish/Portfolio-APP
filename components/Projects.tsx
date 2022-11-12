import React from 'react'
import { motion } from "framer-motion"



function Projects() {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5, }}
        whileInView={{ opacity: 1, }}
        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">

                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img
                        initial={{ y: -300, opacity: 0 }}
                        transition={{ duration: 1.2, }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        src="/profileimage.png"/>

                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>
                                Case Study 1 of 5:
                            </span>{""}
                            Project Name
                        </h4>

                        <div className='felx flex-row items-center space-x-2 justify-center'>
                        </div>
                        
                        <p className='text-lg text-center md:text-left'>
                        Simple chat application that allows users to talk to each other in real-time. Our application will consist of two separate components, a server, and a client.
                        </p>
                    </div>
                </div>

            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    )
}

export default Projects