import latte from "../assets/latte.png"
import mocha from "../assets/mocha.png"
import espresso from "../assets/espresso.png"


function FeaturedMenu() {
  return (
    <>
    <p className="text-5xl text-[#B0B0B0] mb-4 ml-5 mt-20 max-lg:text-4xl" id="menu">Featured <span className="text-[#D4A373]">Brews</span></p>
    <hr className="border border-[#D4A373] w-83 ml-5 max-lg:w-62" />

    <section className="flex justify-evenly mt-13 mb-5 max-lg:flex-col max-lg:gap-7">

      <div className="border border-[#D4A373] text-center rounded-2xl w-80 h-108 max-lg:m-auto">
        <p className="text-4xl mb-4 mt-4 text-[#B0B0B0]">Latte</p>
        <img src={latte} alt="latte-image" className="w-55 h-58 m-auto rounded-2xl object-cover" style={{
        boxShadow: "0 0 5px rgba(212, 163, 115, 0.2)"
      }}/>
        <p className="text-3xl mb-4 mt-4 text-[#B0B0B0]">$5.99</p>
        <button className="rounded-4xl pl-3 pr-3 p-2 bg-transparent text-white border hover:bg-[#D4A373] hover:text-black">
          View Details
        </button>
      </div>

      <div className="border border-[#D4A373] text-center rounded-2xl w-80 h-108 max-lg:m-auto">
        <p className="text-4xl mb-4 mt-4 text-[#B0B0B0]">Mocha</p>
        <img src={mocha} alt="mocha-image" className="w-55 h-58 m-auto rounded-2xl object-cover" style={{
        boxShadow: "0 0 5px rgba(212, 163, 115, 0.2)"
      }}/>
        <p className="text-3xl mb-4 mt-4 text-[#B0B0B0]">$6.99</p>
        <button className="rounded-4xl pl-3 pr-3 p-2 bg-transparent text-white border hover:bg-[#D4A373] hover:text-black">
          View Details
        </button>
      </div>

      <div className="border border-[#D4A373] text-center rounded-2xl w-80 h-108 max-lg:m-auto">
        <p className="text-4xl mb-4 mt-4 text-[#B0B0B0]">Espresso</p>
        <img src={espresso} alt="espresso-image" className="w-55 h-58 m-auto rounded-2xl object-cover" style={{
        boxShadow: "0 0 5px rgba(212, 163, 115, 0.2)"
      }}/>
        <p className="text-3xl mb-4 mt-4 text-[#B0B0B0]">$4.99</p>
        <button className="rounded-4xl pl-3 pr-3 p-2 bg-transparent text-white border  hover:bg-[#D4A373] hover:text-black">
          View Details
        </button>
      </div>
    </section>
    </>
  )
}

export default FeaturedMenu