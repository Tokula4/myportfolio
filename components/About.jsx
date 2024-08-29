import React from 'react'
import DevImg from './DevImg'
import Image from 'next/image'
import {Tabs, TabsContent, TabsList, TabsTrigger, } from '@/components/ui/tabs'
import {User2, MailIcon,  PhoneCall, GraduationCap, Briefcase } from 'lucide-react'

      const infoData = [
        {
            icon:<User2 size={20}/>,
            text:'Emmanuel Tokula'
        },
        {
            icon:<PhoneCall size={20}/>,
            text:'+234 8145415363'
        },
        {
            icon:<MailIcon size={20}/>,
            text:'@emmanueltokula4@gmail.com'
        },
        {
            icon:<GraduationCap size={20}/>,
            text:' B.S.C in Software Engineering'
        },

        
      ]
      const qualificationData = [
        {
            title:'experience',
             data:[
                {
                    Company:'Acess Solution Limited Abuja Nigeria',
                    qualification:'Intern / Software Engineer',
                    Months:'3 Months'
                },

                {
                    Company:'Another Story',
                    qualification:'Creative Director',
                    Months:'2020 - 2024'
                },

           
        
            ],
        },
        {
            title:'education',
            data:[
                {
                    University:'Koladaisi University Ibadan Nigeria',
                    qualification:'Bachelor of Science',
                    Years:'2020 - 2024'
                },

           
        
            ],
        },

      ]
      const skillsData = [
        {
            title: 'Skills',
            data:[
                {
                    name:'Front-end Development'
                },
                {
                    name:'Javascript frameworks ( React.js , Next.js)'
                },
                {
                    name:'Adobe premiere-pro , Adobe Illustrator'
                },
            ]

        },
        {
            title: 'tools',
            data:[
                {
                    imgPath:'/about/vscode.svg'
                },
                {
                    imgPath:'/about/figma.svg'
                },
                {
                    imgPath:'/about/vscode.svg'
                },
            
            ]

        } 
      ]
const About = () => {
    const getData = (arr, title) => {
        return arr.filter((item) => item.title === title)
    }
   
  return (
    <section  className=" xl:h[860px] pb-12 xl:py-24 " >
        <div className='container p-10 mx-auto ' >
            <h2 className='p-10 mx-auto mb-5 text-center section-title xl-mb-16' >About Me</h2>

            <div  className='flex flex-col xl:flex-row ' >
                {/* Image */}
                <div className='relative flex-1 hidden xl:flex'  >
                    <DevImg  containerStyles= 'bg-hero_shape_2_light dark:bg-hero_shape_2_dark  w-[505px] h-[505px] bg-no-repeat relative '
                //  imgSrc='/about/developer.png'
                    />

                </div>
                {/* tabs */}
                <div className='flex-1 tabs' >
                    <Tabs defaultValue='personal' >
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] '  >
                        <TabsTrigger className='w-[162px] xl:w-auto '  value='personal' >Personal Info</TabsTrigger>
                        <TabsTrigger className='w-[162px] xl:w-auto ' value='Qualification' > Qualification</TabsTrigger>
                        <TabsTrigger className='w-[162px] xl:w-auto '  value='Skills' >Skills</TabsTrigger>
                        </TabsList>
                        {/* tabs content */}

                        <div  className='mt-12 text-lg xl:mt-8 ' >
                            {/* personal info */}
                            <TabsContent value='personal'> 
                                <div className='text-center xl:text-left' >
                                    <h3 className='mb-4 h3 ' >
                                        Unmatched Service Quality for over 2 years
                                    </h3>
                                    <p className='max-w-xl subtitle max-auto xl:mx-0 ' >I specialize in frontend development using Next.js and React.js. As a creative director,
                                         I excel in creating product advertisements,
                                         directing brand identity, and directing films.</p>

                                         {/* icons */}
                                         <div className='grid gap-4 mb-12 xl:grid-cols-1 ' >
                                            {infoData.map((item, index)=>{
                                                return <div className='flex items-center mx-auto gap-x-4 xl:mx-0 ' key={index}>
                                                    <div className='text-primary'  > {item.icon} </div>
                                                    <div> {item.text} </div>
                                                </div>
                                            })}
                                         </div>
                                         {/* languages */}
                                         <div className='flex flex-col gap-y-2' >
                                            <div className='text-primary' > Language Skills</div>
                                            <div className='border-b border-border' ></div>
                                            <div>English</div>
                                         </div>
                                </div>

                            </TabsContent>
                            {/* Qualification */}
                            <TabsContent value='Qualification'> 
                                <div>
                                    <h3 className='mb-8 text-center h3 xl:text-left ' >My Journey </h3>
                                    {/* experirnce & education wrapper */}
                                    <div className=' grid md:grid-cols-2 gap-y-8 ' >
                                        {/* experirence */}
                                        <div className='flex flex-col gap-y-6' >
                                            <div className=' flex gap-x-4 items-center text-[22px] text-primary ' >
                                                <Briefcase/>
                                                <h4 className='font-medium capitalize' >
                                                experience
                                                </h4>
                                                </div>
                                                {/* list */}
                                                <div className='flex flex-col gap-y-8'  >
                                                    <div className='flex gap-x-8 group   ' >
                                                        <div className=' h-[84px] w-[1px] bg-border relative ml-2 ' > 
                                                            <div  className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-over:translate-y-[84px] transition-all duration-500 ' ></div>
                                                        </div>
                                                        <div>
                                                            <div className=' font-semibold text-xl leading-none mb-2'  > Access Solution Limited Abuja Nigeria </div>
                                                            <div className='text-lg leading-none text-muted-foreground mb-4 ' >Intern / Software Engineer</div>
                                                            <div>3 Months </div>
                                                        </div>

                                                        

                                                        
                                                    </div>

                                                    <div className='flex gap-x-8 group   ' >
                                                        <div className=' h-[84px] w-[1px] bg-border relative ml-2 ' > 
                                                            <div  className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-over:translate-y-[84px] transition-all duration-500 ' ></div>
                                                        </div>
                                                        <div>
                                                            <div className=' font-semibold text-xl leading-none mb-2'  >Another Story,</div>
                                                            <div className='text-lg leading-none text-muted-foreground mb-4 ' >Creative Director</div>
                                                            <div> 2020 - 2024 <p className='text-green-500 font-semibold ' >Present</p> </div>
                                                        </div>

                                                        

                                                        
                                                    </div>
                                                    
                                                    </div>                                                
                                           
                                      
                                        </div>
                                        {/* eductaion */}
                                        <div className='flex flex-col gap-y-6' >
                                            <div className=' flex gap-x-4 items-center text-[22px] text-primary ' >
                                                <GraduationCap/>
                                                <h4 className='font-medium capitalize' >
                                                education
                                                </h4>
                                                </div>
                                                {/* list */}
                                                <div className='flex flex-col gap-y-8'  >
                                                    <div className='flex gap-x-8 group   ' >
                                                        <div className=' h-[84px] w-[1px] bg-border relative ml-2 ' > 
                                                            <div  className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-over:translate-y-[84px] transition-all duration-500 ' ></div>
                                                        </div>
                                                        <div>
                                                            <div className=' font-semibold text-xl leading-none mb-2'  >Koladaisi University Ibadan Oyo State Nigeria,
                     </div>
                                                             <div className='text-lg leading-none text-muted-foreground mb-4 ' >Bachelor of Science</div>
                                                            <div>  2020 - 2024 </div>
                                                        </div>

                                                        

                                                        
                                                    </div>

                                                  
                                                    
                                                    </div>                                                
                                           
                                      
                                        </div>
                                        
                                    </div>
                                </div>
                            </TabsContent>

                            {/* skills */}

                            <TabsContent value='Skills'> 
                                <div className='text-center xl:text-left' >
                                    <h3  className='h3 mb-8' >What I use Everyday </h3>
                                    {/* skills */}
                                    <div className='mb-16' >
                                        <h4 className='text-xl font-semibold mb-2' >Skills</h4>
                                        <div className='border-b border-border mb-4' ></div>
                                        {/* skill List */}
                                        <div>
                                           
                                                <div className='w-2/4 text-center xl:text-left mx-auto xl:mx-0 '  >
                                                    <div className='font-medium' >
                                                    Front-end Development
                                                    javascript frameworks React.js , Next.js
                                                    Adobe premiere-pro , Adobe Illustrator
                                                    Adobe Photoshop 
                
                                                    </div>
                                                </div>

                        
                                           
                                        </div>
                                    </div>
                                    {/* Tools */}
                                    <div>
                                       <h4 className='text-xl font-semibold mb-2 xl:text-left ' >
                                        Tools
                                       </h4>
                                       <div className='border-b border-border mb-4'  ></div>
                                        {/* tools */}
                                        <div className='flex gap-x-8 justify-center xl:justify-start'  >
                                            <Image src='/about/vscode.svg' width={48} height={48} alt='' priority   />
                                            <Image src='/about/figma.svg' width={48} height={48} alt='' priority   />
                                            <Image src='/about/figma.svg' width={48} height={48} alt='' priority   />
                                            


                                        </div>
                                       

                                    </div>

                                </div>
                            </TabsContent>
                            
                        </div>
                    </Tabs>
                </div>
            </div>

        </div>
    </section>

  )
}

export default About
