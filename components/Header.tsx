import React from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import Link from "next/link"



export default function Header() {
    return (
        <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>

            <motion.div
                initial={{ x: -500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className='flex flex-row items-center'>

                <SocialIcon
                    url="https://www.youtube.com/watch?v=W4UhNo3HAMw&t=42s"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url="https://www.youtube.com/watch?v=W4UhNo3HAMw&t=42s"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url="https://www.youtube.com/watch?v=W4UhNo3HAMw&t=42s"
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>

            <Link href="#contact">
                    <motion.div
                        initial={{ x: 500, opacity: 0, scale: 0.5 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className='flex flex-row items-center text-gray-400 cursor-pointer'>
                        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
                        {/* <SocialIcon className= 'cursor-pointer' network='email' fgColor='gray' bgColor='transparent'/>  """"enabling this throws hydration error cant seem to find the reason*/}
                    </motion.div>
            </Link>
        </header>
    )
}