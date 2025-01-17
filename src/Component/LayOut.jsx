import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

const LayOut = () => {
  return (
    <div className="flex ">
      <div className=" w-60 h-full ">
        <SideBar />
      </div>
      <div className="flex-1  flex-col">
        <div className="">
          <Header />
        </div>
        <div className=" flex-1">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default LayOut;

