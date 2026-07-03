import {
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6"

import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-[#151515] border-t border-[#D4A373] px-6 py-12">

  <div className="max-w-7xl mx-auto
                  grid grid-cols-1
                  md:grid-cols-2
                  lg:grid-cols-4
                  gap-10">

    <div>
      <p className="text-3xl text-[#D4A373] font-bold">Brew Haven</p>

      <p className="text-gray-400 mt-4">
        Crafted with passion,
        brewed to perfection.
      </p>

      <div className="flex gap-4 text-xl mt-4">
        <FaInstagram className="text-gray-400 text-3xl hover:text-[#D4A373] transition duration-300 cursor-pointer" />
        <FaFacebook className="text-gray-400 text-3xl hover:text-[#D4A373] transition duration-300 cursor-pointer" />
      </div>
    </div>

    <div>
      <h3 className="text-xl text-[#D4A373] font-semibold mb-4">
        Quick Links
      </h3>

      <ul className="space-y-3">
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Reviews</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl text-[#D4A373] font-semibold mb-4">
        Contact
      </h3>

      <p className="flex items-center gap-2 m-1">
        <FaLocationDot />
        15 Admiralty Way, Lekki, Lagos
      </p>

      <p className="flex items-center gap-2 m-1" id="contact">
        <FaPhone />
        +234 800 123 4567
      </p>

      <p className="flex items-center gap-2 m-1">
        <MdEmail />
        hello@brewhaven.com
      </p>
    </div>

    <div>
      <h3 className="text-xl text-[#D4A373] font-semibold mb-4">
        Opening Hours
      </h3>

      <p>Mon - Fri</p>
      <p>8:00 AM - 8:00 PM</p>

      <div className="mt-4">
        <p>Sat - Sun</p>
        <p>9:00 AM - 10:00 PM</p>
      </div>
    </div>

  </div>

  <hr className="border-gray-700 my-10"/>

  <p className="text-center text-gray-500">
    © 2026 Brew Haven. All rights reserved.
  </p>

</footer>
  )
}

export default Footer