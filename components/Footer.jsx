import Socials from "./Socials"

const Footer = () => {
  return (
    <Footer className=" bg-secondary py-12 " >
      <div className="container mx-auto" >
        <div className="flex flex-col item-center justify-between" >
          {/* socials */}
          <Socials containerStyles=' flex gap-x-6 mx-auto xl-mx-0 mb-4 ' 
           iconsStyles='text-primary dark:text-white/70 hover:text-white dark:hover:text-primary transition-all text-[20px]'  />
          {/* copyright */}
          <div className="text-muted-foreground" >
            Copyright & copy; Emmanuel Tokula 
          </div>
        </div>

      </div>
     
    </Footer>
  )
}

export default Footer
