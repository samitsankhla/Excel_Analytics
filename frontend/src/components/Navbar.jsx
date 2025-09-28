import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 text-white bg-green-700 h-12 ">
      <h1 className="text-xl font-bold">Excel Analytics</h1>
      <div className="space-x-4">
        <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
        <Link to="/upload" className="hover:text-yellow-300">Upload</Link>
      </div>
    </nav>
  );
};

export default Navbar;