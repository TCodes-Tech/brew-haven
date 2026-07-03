import logo2 from "../assets/logo2.png"


function About() {
  return (
    <>
    <section className="flex items-center mt-15" id="about">
      <img src={logo2} alt="logo" className="w-85 h-50 ml-60 object-cover max-lg:hidden"/>

      <div className="w-130 ml-10 max-lg:m-0">
        <p className="text-5xl text-[#B0B0B0] mb-4 ml-5 max-lg:text-4xl">Our <span className="text-[#D4A373]">Story</span></p>
        <hr className="border border-[#D4A373] w-52 ml-5 max-lg:w-39" />

        <p className="text-2xl mb-4 mt-4 ml-5 text-[#B0B0B0] max-lg:mr-5">
          Since 2010, we've been bringing handcrafted coffee experiences to thousands of customers.
        </p>
        <button className="rounded-4xl pl-3 pr-3 p-2 ml-5 bg-transparent text-white border-2 border-[#D4A373]">Learn More</button>
      </div>
    </section>
    </>
  )
}

export default About  