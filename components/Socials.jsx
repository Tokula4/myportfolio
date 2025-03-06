'use client'

import React from 'react'
import {RiYoutubeFill, RiLinkedinFill, RiGithubFill,
   RiFacebookFill,
    RiInstallFill, RiInstagramFill  } from 'react-icons/ri'
import Link from 'next/link'
const icons = [
  {
    path:'https://www.youtube.com/@Another_story01',
    name: <RiYoutubeFill/>,
  },

  {
    path:'https://www.linkedin.com/in/emmanuel-tokula-34530b226/',
    name: <RiLinkedinFill/>,
  },

  {
    path:'https://github.com/Tokula4',
    name: <RiGithubFill/>,
  },

  
  {
    path:'https://www.instagram.com/emmanuel_tokula/',
    name: <RiInstagramFill/>,
  },
  
]
const Socials = ( {containerStyles, iconsStyles} ) => {

  return (
    <div className={`${containerStyles}`} >
      {
        icons.map((icon,index) =>{
          return (
            <Link href={icon.path} key={index}  className="" >
            <div  className={`${iconsStyles}`}>{icon.name}</div>
            </Link>
          )

        })}
     
    </div>
  )
}

export default Socials
