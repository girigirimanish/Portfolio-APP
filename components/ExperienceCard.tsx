import React from 'react'
import { motion } from "framer-motion"



export default function ExperienceCard({ experiences }:any) {

    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.2, }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src={experiences.companyImage.url}
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>{experiences.jobTitle}</h4>
                <p className='font-bold text-2xl mt-1'>{experiences.company}</p>

                <div className='flex space-x-2 my-2 h-10 w-10 rounded-full'>
                    {experiences.technologies.map((technology:any) => (

                            <motion.img 
                            key={technology._id}
                            src={technology.url}
                            alt=""
                            className='h-10 w-10 rounded-full'
                            />
                        
                    ))}
                </div>

                <p className='uppercase py-5 text-gray-500'>
                    {new Date(experiences.dateStarted).toDateString()} -{" "}{experiences.isCurrentlyWorkingHere
                        ? "Present"
                        : new Date(experiences.dateEnded).toDateString()}
                </p>

                <ul className='list-disc space-y-4 ml-5 text-lg max-h-96 overflow scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 pr-5'>
                    {experiences.points?.map((point:any, i:any) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
};