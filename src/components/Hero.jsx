import coffeeimage from '../assets/coffeeimage.jpeg'


function Hero() {
  return (
    <>
    <section className="mt-15 p-3 w-full flex items-center max-lg:block" id="home">
      <div className=''>   
        <div className='m-5 max-lg:m-0'>
          <p className="text-5xl  text-[#B0B0B0] w-full pb-4 max-lg:text-4xl">
            Crafted Coffee For Every <span style={{color: "#D4A373"}}>Moment</span>
          </p>
          <hr className='border border-[#D4A373] w-178 max-lg:w-full'/>
        </div>

        <div className='m-5 max-lg:m-0'>
          <p className="text-3xl mb-4 mt-4 text-[#B0B0B0] max-lg:text-2xl">
            Discover premium coffee made from ethically sourced beans.
          </p>
          <hr className='border border-[#D4A373] w-178 max-lg:w-full'/>
        </div>

        <div className='m-5 max-lg:m-0 max-lg:mt-5 max-lg:mb-5'>
          <button className='rounded-4xl pl-3 pr-3 p-2 bg-[#D4A373] text-black'>
            Explore Menu
          </button>
          <button className='rounded-4xl pl-3 pr-3 p-2 ml-3 bg-transparent text-white border-2 border-[#D4A373]'>
            Our Story
          </button>
        </div>
      </div>


      <img src={coffeeimage} className='w-75 h-90 ml-7 rounded-2xl max-lg:m-auto' style={{
        boxShadow: "0 0 5px rgba(212, 163, 115, 0.2)"
      }}/>
    </section>
    </>
  )
}

export default Hero