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
        icons:<Blocks size={72} strokeWidth={0.8}/>,
        title:'Web Development',
        Description:'I specialize in building high-performance, user-friendly websites and web applications that drive engagement and deliver results. With expertise in Next.js, React.js, and modern frontend technologies, I create seamless, responsive, and visually appealing digital experiences.'
    },
    {
        icons:<Clapperboard size={50} strokeWidth={0.8}/>,
        title:'Creative Director',
        Description:'As a Creative Director, I specialize in developing compelling brand identities, directing high-impact visual campaigns, and crafting strategic narratives that captivate audiences. With expertise in product advertising, film direction, and social media management, I bring a unique blend of creativity and strategy to every project. '
    },

    {
      icons:<Clapperboard size={50} strokeWidth={0.8}/>,
      title:'Video Editing',
      Description:'With expertise in Adobe Premiere Pro and CapCut, I craft high-quality, engaging, and visually compelling videos that bring stories to life. Whether its promotional content, branded videos, or storytelling projects, I focus on precision, smooth transitions, and creative enhancements to ensure a polished final product.'
    }


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
                    <CardHeader className='text-primary absolute -top-[60px] p-4 ' >
                        <div className=' w-[148px] h-[80px]  flex justify-center items-center  '  >{item.icons}</div>

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
