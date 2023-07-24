// imported file
import Link from "next/link";
import React from "react";


// Main function: Header
const Header = () => {
  return (
    <div className="w-full bg-blue-500 px-5 md:px-0 py-5">
      <div className="w-full md:w-1/2 flex justify-between items-center mx-auto">
        
        {/* Project Title */}
        <Link href="/">
          <h1 className="text-4xl text-white font-medium">Task Manager</h1>
        </Link>

        {/* Navigation */}
        <div className="flex gap-4 text-white font-bold">
          <Link href="/">Home</Link>
          <Link href="/front">All Task</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
