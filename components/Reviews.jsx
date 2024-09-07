'use client'
import Image from "next/image"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
}from '@/components/ui/card'

 import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// required Modules

import {Pagination} from 'swiper/modules'

const reviewData = [
  {
    avatar:'/reviews/avatar-1.png',
    name: 'Access Solution Limited',
    Job: 'Company',
    review:'Emmanuel is a very creative person and dedicated will look forward to working with him again '
  },

  {
    avatar:'/reviews/avatar-2.png',
    name: 'Another Story',
    Job: 'Company',
    review:'Emmanuel Tokula Creativity has made this company to be where it is today  '
  },

  {
    avatar:'/reviews/avatar-2.png',
    name: 'Another Story',
    Job: 'Company',
    review:'Emmanuel Tokula Creativity has made this company to be where it is today  '
  },
  {
    avatar:'/reviews/avatar-1.png',
    name: 'Another Story',
    Job: 'Company',
    review:'Emmanuel Tokula Creativity has made this company to be where it is today  '
  },
]


const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32" >
        <div className=" container mx-auto " > 
        <h2 className="section-title mb-12 text-center mx-auto " >Reviews</h2>
        {/* Slider */}
         <Swiper slidesPerView={1} 
        breakpoints={{
          640:{slidesPerView: 2 },
          1400:{slidesPerView: 3 },
        }}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }} 

        className="h-[350px]"
         >
          {reviewData.map((person, index)=>{
            return(
            <SwiperSlide key={index} >
              <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px] ' >
                <CardHeader className='p-0 mb-18' >
                  <div className=" flex items-center gap-x-4"  >
                    {/* image */}
                    <Image src={person.avatar} width={70} height={70} alt="" priority />
                    {/* name */}
                  </div>
                  <div className="flex flex-col " >
                    {/* name */}
                    <CardTitle>{person.name}</CardTitle>
                    <p>{person.Job}</p>
                  </div>
                </CardHeader>
                <CardDescription className=" text-lg text-muted-foreground " >{person.review}</CardDescription>

              </Card>
            </SwiperSlide>
            )
            })}
      </Swiper> 
      </div> 
      
    </section>
  )
}

export default Reviews
