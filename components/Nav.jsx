 "use client"
import Link from 'next/link'
import React from 'react'
// next hookes
import { usePathname } from 'next/navigation'

//framer motion 
import { motion } from 'framer-motion'

const links = [
  {path: '/', name:'home'},
  {path: '/projects', name:'my projects'},
  {path: '/contact', name:'contact'},
]

const Nav = ( {containerstyles, linkStyles, underlinestyles}) => {
  const path = usePathname();
  return (
    <nav className={`${containerstyles}`} >
      {links.map((link, index)=>{
        return <Link href={link.path} 
        key={index}
         className={`capitalize ${linkStyles}`}>
          {link.path === path && (
            <motion.span iniial = {{y: '-100%'}}
            animate={{y:0}}
            transition = {{type: 'tween'}}
            layoutId ='underline'
            className={`${underlinestyles}`} />

            
          )}
          
          {link.name} </Link>
      })}
    </nav>
  )
}

export default Nav
