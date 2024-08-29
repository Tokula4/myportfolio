import React from 'react'
import { GanttChartSquare, Blocks, Clapperboard, icons } from 'lucide-react'
import { Card, CardContent, 
     CardDescription,
    CardHeader, 
      CardTitle  }from '@/components/ui/card'
      import { FileVideo2 } from 'lucide-react'
import { Description } from '@radix-ui/react-dialog'

const servicesData = [
    {
        icons:<GanttChartSquare size={72} strokeWidth={0.8}/>,
        title:'Web Design',
        Description:'I am a proficient web designer specializing in creating visually compelling and user-centric websites. Utilizing Figma, Adobe design tools, and Canva, I deliver high-quality designs that prioritize both aesthetics and functionality, ensuring an exceptional user experience in every project.'
    },

    {
        icons:<Blocks size={72} strokeWidth={0.8}/>,
        title:'Web Development',
        Description:'I am a proficient web designer specializing in creating visually compelling and user-centric websites. Utilizing Figma, Adobe design tools, and Canva, I deliver high-quality designs that prioritize both aesthetics and functionality, ensuring an exceptional user experience in every project.'
    },
    {
        icons:<Clapperboard size={72} strokeWidth={0.8}/>,
        title:'Creative Director',
        Description:'I am a proficient web designer specializing in creating visually compelling and user-centric websites. Utilizing Figma, Adobe design tools, and Canva, I deliver high-quality designs that prioritize both aesthetics and functionality, ensuring an exceptional user experience in every project.'
    },
    {
        icons:<FileVideo2 size={72} strokeWidth={0.8}/>,
        title:'Video Editing',
        Description:'I am a proficient web designer specializing in creating visually compelling and user-centric websites. Utilizing Figma, Adobe design tools, and Canva, I deliver high-quality designs that prioritize both aesthetics and functionality, ensuring an exceptional user experience in every project.'
    },
]

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36' >
      <div   >
        <h2 className=' section-title mb-12 xl:mb-24 text-center mx-auto ' >My Services</h2>
        {/* grid items */}
        <div  className=' grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'  >
            {servicesData.map((item, index)=>{
                return <Card className=' w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative  ' key={index} >
                    <CardHeader className='text-primary absolute -top-[60px] ' >
                        <div className=' w-[148px] h-[80px] bg-white flex justify-center items-center  '  >{item.icons}</div>

                    </CardHeader>
                    <CardContent className='text-center ' >
                   <CardTitle className='text-2xl font-bold'>{item.title}</CardTitle>
                   <CardDescription className='text-lg' >{item.Description}</CardDescription>
                    </CardContent>
                </Card>

            } )}
        </div>

      </div>
    </section>
  )
}

export default Services
