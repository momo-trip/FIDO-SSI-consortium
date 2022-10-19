import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => (
    <div>
      <Outlet />
    </div>
);

export default Layout;