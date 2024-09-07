import { HomeIcon, MailIcon, PhoneCall } from 'lucide-react'
import React from 'react'
import Form from '@/components/Form'

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto" >
        {/* text $ illustration */}
        <div className=" grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24  " >
          {/* text */}
          <div className=" flex flex-col justify-center" >
            <div className=" flex items-center gap-x-4 text-primary text-lg mb-4  " > 
               <span className=" w-[30px] h-[2px] bg-primary " ></span>
                        Say Hello 😁
               </div>
               <h1 className=" h1 max-w-md mb-8 "  > Let's Work Together. </h1>
               <p className=" subtitle max-w-[400px] " >Let’s Bring Your Ideas to Life!
               I’m always excited to collaborate with passionate individuals and companies looking to make a lasting impact. Whether you need help with front-end development, creative direction, or bringing fresh ideas to life, I’m here to help! Let’s connect and create something extraordinary together. </p>

          </div>
          {/* illustration */}
          <div className=" hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat " >
            illustration

          </div>
           </div>
        {/* info text and form  */}
        <div className=' grid xl:grid-cols-2 mb-24 xl:mb-32' >
          {/* info text */}
       <div className=" flex flex-col gap-y-4  xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg  " >
        {/* mail */}
        <div className=" flex items-center gap-x-8  " >
          <MailIcon size={18} className='text-primary'/>
          <div>emmanueltokula4@gmail.com</div>
        </div>

           {/* Address */}
           <div className=" flex items-center gap-x-8  " >
          <HomeIcon size={18} className='text-primary'/>
          <div>Abuja plot 2227 apo </div>
        </div>
           {/* Phone */}
           <div className=" flex items-center gap-x-8  " >
          <PhoneCall size={18} className='text-primary'/>
          <div> +234 8145415363</div>
        </div>


       </div>

       
       <Form/>


        </div>

      </div>
      
    </section>
  )
}

export default Contact
