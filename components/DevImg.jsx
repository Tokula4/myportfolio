
import Image from 'next/image'

const DevImg = ({containerStyles, imgSrc}) => {
  return (
    <div className={`${containerStyles}`} >
      <Image src={imgSrc} width={300} height={500}   priority  alt=''/>
      
    </div>
  )
}

export default DevImg  
