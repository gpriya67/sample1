import React from 'react';
import { CiSearch } from "react-icons/ci";
import Girl from '../Assets/Girl.jpg';
import { FaRegMessage } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";


const Header = () => {
  return (
    <div className="flex h-14  justify-between shadow bg-black">
    <div className=' relative mt-3 ml-5 '>
    
    <input className=' px-3 py-1 w-60 border border-gray-300 rounded-md' type='text' placeholder='    Search'/>
    <CiSearch fontSize={24} className=' absolute  top-1 left-2 ' />
    </div>
    <div className=' flex justify-end  gap-3 '>
      <FaRegMessage className=' text-white mt-5' fontSize={15} />
      <FaBell  className =' text-white mt-5' fontSize={15} />
     <div className='  items-center text-center gap-5 '>
     <button className='  w-32 h-14  text-white relative gap-5'>
      Admin
      </button>
      <img className=' w-8 rounded-full absolute top-3 gap-5 ' src={Girl}    />
     </div>

     </div> 
      

    
   
    </div>
  );
};

export default Header;
