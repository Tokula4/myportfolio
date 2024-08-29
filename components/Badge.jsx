'use client'
 import CountUp from 'react-countup'

const Badge = ({containStyles, icon,endCountNum, endCountText, badgeText}) => {
  return (
    <div className={`badge ${containStyles}`} >
      <div className="text-3xl text-primary" >{icon}</div>
      <div className='text-4xl loading-none font-bold text-primary '  >

        <CountUp end={endCountNum} delay={1} duration={4} />
        {endCountText}
      </div>
      <div className=' max-w-[700px] leading-none text-[15px] font-medium text-medium text-black ' >{badgeText}</div>
    </div>
  )
}

export default Badge
