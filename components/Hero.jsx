import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react'
 
import { RiArrowDownSLine,RiTodoFill, RiTeamFill, RiBriefcase4Fill } from 'react-icons/ri';

//components

 import DevImg from './DevImg'
 import Badge from './Badge'
 import Socials from './Socials'

const Hero = () => {
  return (
    <section className=" py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover " >
     <div className="container mx-auto " >
        <div className="flex justify-between gap-x-8" >
            {/* text */}
            <div className='flex max-w--[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left ' >
                <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]  ' > Frontend Developer <br></br> Creative Director</div>
                <h1 className="mb-4 h1 " > Hello, My Name is <br></br> Emmanuel Tokula </h1> 
                <p className=' subtitle max-w-[490px] mx-auto xl:mx-0 ' > Brief description with insight into myself, my vocational Journey , 
                    and what I engage in professinally   </p>

                    {/* button */}
                    <div className="flex flex-col mx-auto mb-12 gap-y-3 md:flex-row gap-x-3 xl:mx-0" >
                        <Link href='/contact' >
                       
                        <Button className="gap-x-2" > Contact Me  <Send size={18} /> </Button>
                        </Link>
                        <Button variant='secondary' className="gap-x-2" > Download Cv  <Download size={18} /> </Button>
                    </div>
                    {/* social */}
                    <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0'
                    iconsStyles='text-foreground text-[22px] hover:text-primary transition-all' />

            </div>
             {/* image */}
             <div className="relative hidden xl:flex" >
              {/* badge */}
              <Badge containStyles='absolute top-[24%] -left-[5rem]' 
              icon={<RiBriefcase4Fill/>}
               endCountNum={3} 
              badgeText='Year of Experience' />
                {/* badge2 */}
                <Badge containStyles='absolute top-[80%] -left-[1rem]' 
              icon={<RiTodoFill/>}
               endCountNum={1} 
               endCountText='k'
              badgeText='Finished Project' />
                {/* badge 3 */}
                <Badge containStyles='absolute top-[55%] -right-8' 
              icon={<RiTeamFill/>}
               endCountNum={1} 
               endCountText='k'
              badgeText='Happy Clients' />
                <div className='  bg-hero_shape_2_light dark:bg-hero_shape_2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2 ' ></div>
                <DevImg  containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom '
                
            
                />
             </div>
</div>
     {/* icons */}
     <div className="absolute hidden md:flex left-2/4 bottom-44 xl:bottom-12 animate-bounce " >
        <RiArrowDownSLine className='text-3xl text-primary '/>
     </div>

     </div>
    </section>
  )
 }

export default Hero
