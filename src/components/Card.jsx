import React, { useState } from "react";
import { IoCall } from "react-icons/io5"; // Import Call Icon
import { IoLogoWhatsapp } from "react-icons/io5"; // Import WhatsApp Icon
import { motion } from "framer-motion";




function Card({ data, reference }) {
  const [isCalling, setIsCalling] = useState(false);
  const [isWhatsAppActive, setIsWhatsAppActive] = useState(false); // New state for WhatsApp action

  const handleCall = () => {
    setIsCalling(true); // Start the call and turn the button blue
    window.location.href = `tel:${data.phone}`; // Redirect to the phone dialer
  };

  const handleWhatsApp = () => {
    setIsWhatsAppActive(true); // Activate WhatsApp and turn the button blue
  };

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
    >
      {/* Profile Picture */}
      <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-9 border-gray-300">
        <img
          src={data.profileImage}
          alt={`${data.desc} profile`}
          className="w-full h-full object-cover"
        />
        
      </div>
      {/* Dynamic Icon */}
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{data.designation}</h5>
          {/* WhatsApp Button */}
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center ${
              isWhatsAppActive ? "bg-blue-500" : "bg-green-500"
            }`}
            onClick={handleWhatsApp} // Track the click to change color
          >
            <a
              href={`https://wa.me/${data.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center "
            >
              <IoLogoWhatsapp size="2em" color="#fff" />
            </a>
          </div>
          
        </div>

        {/* Call Now Section */}
        <div
          onClick={handleCall}
          className={`call-now w-full h-12 ${
            isCalling ? "bg-blue-600" : "bg-green-600"
          } flex items-center justify-center cursor-pointer p-6 `}
        >
          <IoCall size="1.2em" color="#fff" className="mr-2" />
          <span className="text-white font-semibold">Call Now</span>
        </div>
      </div>
    </motion.div>
  );
}
export default Card;
