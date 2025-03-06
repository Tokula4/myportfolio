'use client'
import Link from "next/link"

import {Button} from "./ui/button"

import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// required Modules

import {Pagination} from 'swiper/modules'

//components
import ProjectCard from './ProjectCard'

const ProjectData = [
    {
        image:'/carsite.png',
        category:'Next.js',
        name: 'Sanko Autos Website',
        description:'Sanko Auto is a Website where cars can be odered and rented',
        link:'/',
        github:'https://github.com/Tokula4',

    },

    {
        image:'/ogechi.png',
        category:'Creative Director',
        name: 'Ogechi by Another story',
        description:'Directed by Emmanuel Tokula for Another Story  ',
        link:'https://www.youtube.com/watch?v=tNRGHHGLoxM',
      

    },
]
const Work = () => {
  return (
    <section className=" relative mb-12 xl:mb-48 " >
        <div className='container mx-auto' >
            {/* text */}
            <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start  " >
                <h2  className='section-title mb-4' >Lastest Projects</h2>
                <p className="subtitle mb-8" >My lastest projects  </p>
                <Link href='/projects' > <Button>All Project</Button> </Link>
            </div>
            {/* slider */}
            <div  className='xl:max-w-[1000px] xl:absolute right-0 top-0 ' >
                <Swiper className="h-[480px]  " slidesPerView={1} breakpoints={{
                    640:{
                        slidesPerView: 2
                    }
                }} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true }} >  
                    {/* show only the first 4 projects for the slide */}
                    {ProjectData.slice(0, 4).map((project, index)=>{
                        return <SwiperSlide key={index} >
                            <ProjectCard project={project}  />
                             </SwiperSlide>
                    })}


                </Swiper>


            </div>
        </div>
      
    </section>
  )
}

export default Work
