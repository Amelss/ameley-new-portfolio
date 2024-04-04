import React from 'react'

export default function Header() {

   const handleSmoothScroll = (event) => {
     event.preventDefault();
     const targetId = event.target.getAttribute("href").substring(1);
     const targetElement = document.getElementById(targetId);
     if (targetElement) {
       targetElement.scrollIntoView({
         behavior: "smooth",
         block: "start",
       });
     }
   };


  return (
    <div className="font-montserrat-600">
      <div className="navbar bg-base-100 xl:hidden">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56"
            >
              <li>
                <a href="#hero" onClick={handleSmoothScroll}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={handleSmoothScroll}>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" onClick={handleSmoothScroll}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleSmoothScroll}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <a className="xl:hidden btn btn-ghost p-1 text-xl">Ameley Kwei-Armah</a>
        </div>
      </div>

      <nav className="hidden xl:flex justify-between px-10 py-5 font-montserrat-700">
        <div>
          <h1 className="">Ameley Kwei-Armah</h1>
        </div>
        <div>
          <ul className="flex">
            <li className="ml-5">
              <a href="#hero" onClick={handleSmoothScroll}>
                Home
              </a>
            </li>
            <li className="ml-5">
              <a href="#about" onClick={handleSmoothScroll}>
                About
              </a>
            </li>
            <li className="ml-5">
              <a href="#projects" onClick={handleSmoothScroll}>
                Projects
              </a>
            </li>
            <li className="ml-5">
              <a href="#contact" onClick={handleSmoothScroll}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
