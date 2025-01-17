import React from 'react';
import { Outlet } from 'react-router-dom';

const Setting = () => {
  return (
    <div>
      <h1>Settings</h1>
      {<Outlet />}
    </div>
  );
};

export default Setting;


