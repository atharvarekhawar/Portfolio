import React from "react";

const Header = () => {
  return (
    <header className="py-4 sm:py-8 ">
      <div className="container mx-auto">
        <div className="flex justify-center sm:justify-between items-center">
          <div className="flex flex-col ">
            <a href="/">
              <p className="text-4xl font-bold text-center sm:text-left">
                <span className="logo">ATHARVA</span>
              </p>
              <p className="text-4xl font-bold">REKHAWAR</p>
            </a>
          </div>
          <a
            href="https://www.linkedin.com/in/atharva-rekhawar/"
            rel="noreferrer"
            target="_blank"
          >
            <button className="btn btn-sm hidden sm:block">Work with me</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
