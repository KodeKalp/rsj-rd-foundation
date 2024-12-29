




 {/* Navbar for Mobile */}
 <div className={`block lg:hidden navbar  text-white fixed w-full sm:top-12 shadow-md py-3 px-6 sm:px-8 font-medium capitalize  items-center   right-1/2 translate-x-1/2 bg-black/80 backdrop-blur-sm z-50 transition-all ease duration-300 ${mobileMenuOpen ? "h-screen" : "h-auto"}`}>
 <div className="container mx-auto flex justify-between items-center px-4 py-2">
     {/* Logo */}
     <Link to="/" className="text-3xl font-bold uppercase text-white">
         <img
             src={logo}
             alt="Logo"
             width={100}
             className="rounded-full"
             height={100}
         />
     </Link>

     {/* Mobile Menu Toggle Button */}
     <button
         className="navbar-toggler text-white focus:outline-none"
         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
     >
         <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
     </button>

     {/* Mobile Menu Items */}
     <div
         className={`fixed inset-0 ml-8 text-white flex flex-col transform transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} mt-28 z-50`}
     >
         <div className="flex flex-col space-y-4 p-4">
             <Link
                 to="/"
                 className={`nav-item ${path === "/" ? "text-[#E35A1E]" : "text-white"
                     } px-3 py-2 hover:text-[#0084C2]`}
                 onClick={() => setMobileMenuOpen(false)}
             >
                 Home
             </Link>

             {/* About Us */}
             <div
                 className="relative nav-item"
                 ref={mobileDropdownRef}
             >
                 <button
                     className="flex items-center px-3 py-2 hover:text-[#0084C2] w-full text-left focus:outline-none"
                     onClick={toggleMobileDropdown}
                 >
                     About Us
                     <i className="ml-2 fa fa-chevron-down"></i>
                 </button>
                 <div
                     className={`overflow-hidden transition-[height] duration-300 ${dropdownOpenPagesMobile ? "h-auto" : "h-0"
                         }`}
                 >
                     <div className=" mt-2 py-2 w-full">
                         <Link
                             to="/detail-page"
                             className="text-gray-400 block px-4 py-2 hover:bg-[#E35A1E]"
                             onClick={() => {
                                 setDropdownOpenPagesMobile(false);
                                 setMobileMenuOpen(false);
                             }}
                         >
                             Who We Are
                         </Link>
                         <Link
                             to="/what-we-do"
                             className="text-gray-400 block px-4 py-2 hover:bg-[#E35A1E]"
                             onClick={() => {
                                 setDropdownOpenPagesMobile(false);
                                 setMobileMenuOpen(false);
                             }}
                         >
                             Our Team
                         </Link>
                         <Link
                             to="/team"
                             className="text-gray-400 block px-4 py-2 hover:bg-[#E35A1E]"
                             onClick={() => {
                                 setDropdownOpenPagesMobile(false);
                                 setMobileMenuOpen(false);
                             }}
                         >
                             Gallery
                         </Link>
                         <Link
                             to="/volunteer"
                             className="text-gray-400 block px-4 py-2 hover:bg-[#E35A1E]"
                             onClick={() => {
                                 setDropdownOpenPagesMobile(false);
                                 setMobileMenuOpen(false);
                             }}
                         >
                             Why Donate us
                         </Link>
                         {/* <hr className="my-2 border-gray-500" /> */}
                         {/* <Link
                             to="/donate"
                             className="text-gray-400 block px-4 py-2 hover:bg-[#E35A1E]"
                             onClick={() => {
                                 setDropdownOpenPagesMobile(false);
                                 setMobileMenuOpen(false);
                             }}
                         >
                             Donate Now
                         </Link> */}
                     </div>
                 </div>
             </div>

             {/* Pages Dropdown */}
             <div
                 className="relative nav-item"
                 ref={mobileDropdownRef}
             >
                 <button
                     className="flex items-center px-3 py-2 hover:text-[#0084C2] w-full text-left focus:outline-none"
                     onClick={toggleMobileDropdown}
                 >
                     Pages
                     <i className="ml-2 fa fa-chevron-down"></i>
                 </button>
                 <div
                     className={`overflow-hidden transition-[height] duration-300 ${dropdownOpenPagesMobile ? "h-auto" : "h-0"
                         }`}
                 >
                     <div className=" mt-2 py-2 w-full">
                         <Link
                             to="/detail-page"
                             className="text-gray-400 block px-4 py-2 hover:bg-[#E35A1E]"
                             onClick={() => {
                                 setDropdownOpenPagesMobile(false);
                                 setMobileMenuOpen(false);
                             }}
                         >
                             Detail Page
                         </Link>
                         <Link
                             to="/what-we-do"
                             className="text-gray-400 block px-4 py-2 hover:bg-[#E35A1E]"
                             onClick={() => {
                                 setDropdownOpenPagesMobile(false);
                                 setMobileMenuOpen(false);
                             }}
                         >
                             What We Do
                         </Link>
                         <Link
                             to="/team"
                             className="text-gray-400 block px-4 py-2 hover:bg-[#E35A1E]"
                             onClick={() => {
                                 setDropdownOpenPagesMobile(false);
                                 setMobileMenuOpen(false);
                             }}
                         >
                             Meet Team
                         </Link>
                         <Link
                             to="/volunteer"
                             className="text-gray-400 block px-4 py-2 hover:bg-[#E35A1E]"
                             onClick={() => {
                                 setDropdownOpenPagesMobile(false);
                                 setMobileMenuOpen(false);
                             }}
                         >
                             Become Part
                         </Link>
                         <hr className="my-2 border-gray-500" />
                         <Link
                             to="/donate"
                             className="text-gray-400 block px-4 py-2 hover:bg-[#E35A1E]"
                             onClick={() => {
                                 setDropdownOpenPagesMobile(false);
                                 setMobileMenuOpen(false);
                             }}
                         >
                             Donate Now
                         </Link>
                     </div>
                 </div>
             </div>

             <Link
                 to="/event"
                 className={`nav-item ${path === "/event" ? "text-[#E35A1E]" : "text-white"
                     } px-3 py-2 hover:text-[#0084C2]`}
                 onClick={() => setMobileMenuOpen(false)}
             >
                 Events
             </Link>
             <Link
                 to="/contact"
                 className={`nav-item ${path === "/contact" ? "text-[#E35A1E]" : "text-white"
                     } px-3 py-2 hover:text-[#0084C2]`}
                 onClick={() => setMobileMenuOpen(false)}
             >
                 Contact
             </Link>
         </div>
     </div>
 </div>
</div>