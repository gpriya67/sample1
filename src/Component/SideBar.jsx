import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Azero from '../Assets/Azero.png';
import { Navigate, NavigateBottom } from '../Component/Store/Navigate'; 

const SideBar = () => {
  return (
    <div className=" fixed bg-[#15283B] text-white h-full flex flex-col">
    
      <div className="flex items-center gap-1 py-3 px-3 ">
        <img className="rounded-full" src={Azero} width={50} alt="Logo" />
        <span className="font-semibold  items-center text-lg">AdminDashboard</span>
      </div>

     
      <div className="flex-1 flex flex-col py-3 gap-3 px-3">
        {Navigate.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>

    
      <div className="py-3 px-3 ">
        {NavigateBottom.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

const SidebarLink = ({ item }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      {item.children ? (
        <div className="flex flex-col">
          <button
            className="flex items-center justify-between gap-3 px-3 py-2 w-full hover:bg-red-600 hover:text-white rounded-md"
            onClick={toggleDropdown}
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl">{item.icon}</span>
              {item.label}
            </span>
            <span>{dropdownOpen ? '▲' : '▼'}</span>
          </button>
          {dropdownOpen && (
            <div className="ml-6 flex flex-col gap-2">
              {item.children.map((child) => (
                <Link
                  key={child.key}
                  to={child.path}
                  className="flex items-center gap-3 px-3 mt-3 py-2 hover:bg-red-600 hover:text-white rounded-md"
                >
                  <span className="text-2xl">{child.icon}</span>
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link
          to={item.path}
          className="flex items-center gap-3 px-3 py-2 mt-3 hover:bg-red-600 hover:text-white rounded-md"
        >
          <span className="text-2xl">{item.icon}</span>
          {item.label}
        </Link>
      )}
    </>
  );
};

export default SideBar;
