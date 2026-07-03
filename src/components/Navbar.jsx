import logo from "../assets/logo3.png"


function Navbar() {
  return (
    <>
    <nav className="border border-black flex items-center p-1 border-b-[#D4A373] sticky top-0 z-50 backdrop-blur-lg">
      
      <img src={logo} className="w-35 h-15"/>


      <ul className="m-auto flex max-lg:hidden">
        <li className="p-3 hover:text-[#D4A373]"><a href="#home">Home</a></li>
        <li className="p-3 hover:text-[#D4A373]"><a href="#menu">Menu</a></li>
        <li className="p-3 hover:text-[#D4A373]"><a href="#about">About</a></li>
        <li className="p-3 hover:text-[#D4A373]"><a href="#contact">Contact</a></li>
      </ul>

      <button className="border border-white p-2 pl-3 pr-3 rounded-4xl max-lg:ml-auto">
        Order Now
      </button> 
    </nav>
    </>
  )
}

export default Navbar