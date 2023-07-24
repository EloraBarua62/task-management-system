import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
      <div className="w-full bg-blue-500 px-5 md:px-0 py-5">
        <div className="w-full md:w-1/2 flex justify-between items-center mx-auto">
          <div>
            <h1 className="text-4xl text-white font-medium">Task Manager</h1>
          </div>

          <div className="flex gap-4 text-white">
            <Link href="/">Home</Link>
            <Link href="/front">All Task</Link>
          </div>
        </div>
      </div>
    );
};

export default Header;
