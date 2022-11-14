import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import Link from "next/link"
import axios from 'axios'
import { useEffect, useState } from "react"


export default function Header() {
  const [socials,setSocials]= useState([])
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() =>{
    (async() =>{
      try {
        const socials = await axios.get('http://localhost:3000/api/Socials')
        const socialsData = socials.data
        setSocials(socialsData)
      } catch (error) {
        
      }finally{
        setIsLoading(false)
      }
      
    } )();
  },[]);


  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center'>
        {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
        {isLoading?(
          <h1>Loading...</h1>
        ):(
          socials.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor="gray"
              bgColor='transparent'
            />
          ))
        )}
      </motion.div>

      <Link href="#contactme">
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
