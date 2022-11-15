import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import { motion } from "framer-motion"
import Link from "next/link"

//Static Site Generation
export const getStaticProps = async()=>{

  const experienceResponse = await fetch('http://localhost:3000/api/Experience');
  const experience = await experienceResponse.json();

  const projectsResponse = await fetch('http://localhost:3000/api/Projects');
  const projects = await projectsResponse.json();

  const skillsResponse = await fetch('http://localhost:3000/api/Skills');
  const skills = await skillsResponse.json();

  const pageInfosResponse = await fetch('http://localhost:3000/api/PageInfo');
  const pageInfos = await pageInfosResponse.json();

  return{
    props:{experience, projects,skills,pageInfos}
  }

}
const Home = ({experience,projects,skills,pageInfos}:any) => {
  return (

    <div className="
    bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar
    scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title> Manish-Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <section id="hero" className='snap-start'>
        <Hero pageInfos={pageInfos}/>
      </section>

      <section id="about" className='snap-center'>
        <About pageInfos={pageInfos}/>
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience experience={experience} />
      </section>

      <section id="skills" className='snap-start'>
        <Skills skills={skills}/>
      </section>

      <section id="projects" className='snap-start'>
        <Projects  projects={projects}/>
      </section>

      <section id="contactme" className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <motion.img
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
              src="profileimage.png" alt="" />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home;



