import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/mainlogo.png";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null); // Tracks the open dropdown
  const dropdownTimeoutRef = useRef(null); // Reference for the dropdown timeout
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const handleDropdownOpen = (dropdownName) => {
    clearTimeout(dropdownTimeoutRef.current); // Clear any existing timeout
    setOpenDropdown(dropdownName);
  };

  const handleDropdownClose = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // Delay to allow interaction
  };

  const handleDropdownClick = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null); // Close dropdown if already open
    } else {
      setOpenDropdown(dropdownName); // Open the clicked dropdown
    }
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown")) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpenPagesDesktop, setDropdownOpenPagesDesktop] =
    useState(false);
  const [dropdownOpenPagesMobile, setDropdownOpenPagesMobile] = useState(false);
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const timerRef = useRef(null);
  const [auth, setAuth] = useState("");
  //const navigate = useNavigate();
  //const location = useLocation();
  //const path = location.pathname;

  const [dropdownState, setDropdownState] = useState({
    aboutUs: false,
    whatWeDo: false,
    howCanYouHelp: false,
    ourProgram: false,
  });

  const toggleDropdown = (dropdownName) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  // Function to close all dropdowns when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !desktopDropdownRef.current ||
        !desktopDropdownRef.current.contains(event.target)
      ) {
        setDropdownState({
          aboutUs: false,
          whatWeDo: false,
          howCanYouHelp: false,
          ourProgram: false,
        });
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Function to handle dropdown state
  // const toggleDropdown = (dropdownName) => {
  //     setDropdownState((prevState) => ({
  //         ...prevState,
  //         [dropdownName]: !prevState[dropdownName],
  //     }));
  // };

  // Function to close all dropdowns when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !desktopDropdownRef.current ||
        !desktopDropdownRef.current.contains(event.target)
      ) {
        setDropdownState({
          aboutUs: false,
          whatWeDo: false,
          howCanYouHelp: false,
          ourProgram: false,
        });
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Close desktop dropdown if clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target)
      ) {
        setDropdownOpenPagesDesktop(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  //For Program

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target)
      ) {
        setDropdownOpenPagesDesktop(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Close mobile dropdown if clicking outside
  useEffect(() => {
    const handleOutsideClickMobile = (event) => {
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target)
      ) {
        setDropdownOpenPagesMobile(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClickMobile);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClickMobile);
    };
  }, []);

  useEffect(() => {
    const isAdmin = localStorage.getItem("ADMIN_NGO");
    const isUser = localStorage.getItem("NGO");
    if (isAdmin) {
      setAuth("ADMIN");
    } else if (isUser) {
      setAuth("USER");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });

    const topBar = document.querySelector(".top-bar");
    const navbar = document.querySelector(".navbar");

    function toggleStickyNavbar() {
      if (window.scrollY > topBar.offsetHeight) {
        // Uncomment and add desired sticky behavior if needed
        // navbar.classList.add('nav-sticky');
        // topBar.classList.add('hidden');
      } else {
        // navbar.classList.remove('nav-sticky');
        // topBar.classList.remove('hidden');
      }
    }

    window.addEventListener("scroll", toggleStickyNavbar);
    return () => window.removeEventListener("scroll", toggleStickyNavbar);
  }, []);

  // Desktop Dropdown Handlers
  const handleDesktopMouseEnter = () => {
    clearTimeout(timerRef.current); // Clear any existing timer
    setDropdownOpenPagesDesktop(true); // Open the dropdown immediately
  };

  //   const [dropdownState, setDropdownState] = useState({
  //     aboutUs: false,
  // });

  const handleMouseEnter = () => {
    setDropdownState({ ...dropdownState, aboutUs: true });
  };

  const handleMouseLeave = () => {
    setDropdownState({ ...dropdownState, aboutUs: false });
  };

  const handleDesktopMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setDropdownOpenPagesDesktop(false); // Close the dropdown after a delay
    }, 200); // Adjust the delay time (200ms) as needed
  };

  //   const handleMouseEnter = () => {
  //     setDropdownState({ ...dropdownState, aboutUs: true });
  // };

  // const handleMouseLeave = () => {
  //     setTimeout(() => {
  //         setDropdownState({ ...dropdownState, aboutUs: false });
  //     }, 200); // Adds a small delay to prevent premature closing
  // };

  //For Program
  const handleDesktopMouseEnterProgram = () => {
    clearTimeout(timerRef.current); // Clear any existing timer
    setDropdownOpenPagesDesktop(true); // Open the dropdown immediately
  };

  const handleDesktopMouseLeaveProgram = () => {
    timerRef.current = setTimeout(() => {
      setDropdownOpenPagesDesktop(false); // Close the dropdown after a delay
    }, 200); // Adjust the delay time (200ms) as needed
  };

  // Mobile Dropdown Handler
  const toggleMobileDropdown = () => {
    setDropdownOpenPagesMobile(!dropdownOpenPagesMobile);
  };

  return (
    <>
      {/* Top Bar for large screens */}
      <div className="top-bar bg-opacity-50 bg-black text-white border-b border-gray-300 fixed w-full z-30 hidden sm:block">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4 py-2">
          {/* Left Section */}
          <div className="flex flex-wrap items-center space-x-4 text-sm sm:text-base">
            <Link to="/admin" className="text-[#E35A1E] text-xl">
              <i className="fa fa-user-tie"></i>
            </Link>
            <div className="flex items-center space-x-2">
              <i className="fa fa-phone text-[#E35A1E]"></i>
              <a
                href="tel:+91-8380804409"
                className="text-white hover:text-[#0084C2]"
              >
                +91-8380804409
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fa fa-envelope text-[#E35A1E]"></i>
              <a
                href="mailto:connect@rsjrdfoundation.org"
                className="text-white hover:text-[#0084C2]"
              >
                connect@rsjrdfoundation.org
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap items-center space-x-4 text-sm sm:text-base mt-2 sm:mt-0">
            <a
              href="https://twitter.com"
              className="hover:text-[#0084C2] text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com"
              className="hover:text-[#0084C2] text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com"
              className="hover:text-[#0084C2] text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com"
              className="hover:text-[#0084C2] text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              className="hover:text-[#0084C2] text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            {auth.length > 0 && (
              <button
                onClick={() => {
                  if (auth === "USER") localStorage.removeItem("NGO");
                  else localStorage.removeItem("ADMIN_NGO");
                  setAuth("");
                  navigate("/");
                }}
                className="btn btn-outline-danger border-red-500 text-white hover:bg-red-500 px-2 py-1 text-sm"
              >
                LOGOUT {auth}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Navbar For Desktop */}
      <div className="hidden lg:block navbar w-full sm:top-12  lg:z-50 shadow-md py-3 px-6 sm:px-8 font-medium capitalize  items-center  fixed top-6 right-1/2 translate-x-1/2 bg-black/80 backdrop-blur-sm z-50 transition-all ease duration-300">
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

          {/* Menu Items */}

          <div className="flex flex-row space-x-6">
            <Link
              to="/"
              className={`nav-item ${
                path === "/" ? "text-[#E35A1E]" : ""
              } px-3 py-2 hover:text-[#0084C2]`}
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <div
            className="relative dropdown"
            onMouseEnter={() => handleDropdownOpen("aboutUs")}
            onMouseLeave={handleDropdownClose}
          >
            <button
              onClick={() => handleDropdownClick("aboutUs")}
              className="flex items-center px-3 py-2 text-white hover:text-[#0084C2]"
            >
              About Us <i className="ml-2 fa fa-chevron-down"></i>
            </button>
            {openDropdown === "aboutUs" && (
              <div className="absolute bg-black text-white mt-2 py-2 w-48 rounded-md shadow-lg">
                <Link to="/detail-page" className="block px-4 py-2 hover:bg-[#E35A1E]">
                  Who We Are
                </Link>
                <Link to="/team" className="block px-4 py-2 hover:bg-[#E35A1E]">
                  Our Team
                </Link>
                <Link to="/gallery" className="block px-4 py-2 hover:bg-[#E35A1E]">
                  Gallery
                </Link>
                <Link to="/donate" className="block px-4 py-2 hover:bg-[#E35A1E]">
                  Why Donate Us
                </Link>
              </div>
            )}
          </div>
          


            {/* What We Do */}
            <div
            className="relative dropdown"
            onMouseEnter={() => handleDropdownOpen("whatWeDo")}
            onMouseLeave={handleDropdownClose}
          >
            <button
              onClick={() => handleDropdownClick("whatWeDo")}
              className="flex items-center px-3 py-2 text-white hover:text-[#0084C2]"
            >
              What We Do <i className="ml-2 fa fa-chevron-down"></i>
            </button>
            {openDropdown === "whatWeDo" && (
              <div className="absolute bg-black text-white mt-2 py-2 w-48 rounded-md shadow-lg">
                <Link to="/rural-development" className="block px-4 py-2 hover:bg-[#E35A1E]">
                  Rural Development
                </Link>
                <Link to="/women-empowerment" className="block px-4 py-2 hover:bg-[#E35A1E]">
                  Women Empowerment
                </Link>
                <Link to="/know-more" className="block px-4 py-2 hover:bg-[#E35A1E]">
                  Know More
                </Link>
              </div>
            )}
          </div>




            {/* How Can You Help */}

            <div
            className="relative dropdown"
            onMouseEnter={() => handleDropdownOpen("howCanYouHelp")}
            onMouseLeave={handleDropdownClose}
          >
            <button
              onClick={() => handleDropdownClick("howCanYouHelp")}
              className="flex items-center px-3 py-2 text-white hover:text-[#0084C2]"
            >
              Become A Hero <i className="ml-2 fa fa-chevron-down"></i>
            </button>
            {openDropdown === "howCanYouHelp" && (
              <div className="absolute bg-black text-white mt-2 py-2 w-48 rounded-md shadow-lg">
                <Link to="/rural-development" className="block px-4 py-2 hover:bg-[#E35A1E]">
                Connect on Social Media				
                </Link>
                <Link to="/women-empowerment" className="block px-4 py-2 hover:bg-[#E35A1E]">
                Become a Hero Member
                </Link>
                <Link to="/know-more" className="block px-4 py-2 hover:bg-[#E35A1E]">
                Birthday Blessings	
                </Link>
                <Link to="/know-more" className="block px-4 py-2 hover:bg-[#E35A1E]">
                Donate	
                </Link>
              </div>
            )}
          </div>
           


            {/* Our Program  */}

            <div
            className="relative dropdown"
            onMouseEnter={() => handleDropdownOpen("ourProgram")}
            onMouseLeave={handleDropdownClose}
          >
            <button
              onClick={() => handleDropdownClick("ourProgram")}
              className="flex items-center px-3 py-2 text-white hover:text-[#0084C2]"
            >
              Our Program <i className="ml-2 fa fa-chevron-down"></i>
            </button>
            {openDropdown === "ourProgram" && (
              <div className="absolute bg-black text-white mt-2 py-2 w-48 rounded-md shadow-lg">
                <Link to="/education-program" className="block px-4 py-2 hover:bg-[#E35A1E]">
                  Education Awareness Program
                </Link>
                <Link to="/women-empowerment" className="block px-4 py-2 hover:bg-[#E35A1E]">
                  Mahila Sasakti Karan
                </Link>
              </div>
            )}
          </div>

          <Link
              to="/contact"
              className={`nav-item ${
                path === "/contact" ? "text-[#E35A1E]" : "text-white"
              } px-3 py-2 hover:text-[#0084C2]`}
            >
              Partner With Us
            </Link>

            <Link
              to="/contact"
              className={`nav-item ${
                path === "/contact" ? "text-[#E35A1E]" : "text-white"
              } px-3 py-2 hover:text-[#0084C2]`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar For Navbar */}
      




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
            className="relative dropdown"
            onMouseEnter={() => handleDropdownOpen("aboutUs")}
            onMouseLeave={handleDropdownClose}
            //ref={mobileDropdownRef}
          >
            <button
              onClick={() => handleDropdownClick("aboutUs")}
              className="flex items-center px-3 py-2 text-white hover:text-[#0084C2]"
            >
              About Us <i className="ml-2 fa fa-chevron-down"></i>
            </button>
            {openDropdown === "aboutUs" && (
              <div className="absolute bg-black text-white mt-2 py-2 w-48 rounded-md shadow-lg">
                <Link to="/detail-page" className="block px-4 py-2 hover:bg-[#E35A1E]">
                  Who We Are
                </Link>
                <Link to="/team" className="block px-4 py-2 hover:bg-[#E35A1E]">
                  Our Team
                </Link>
                <Link to="/gallery" className="block px-4 py-2 hover:bg-[#E35A1E]">
                  Gallery
                </Link>
                <Link to="/donate" className="block px-4 py-2 hover:bg-[#E35A1E]">
                  Why Donate Us
                </Link>
              </div>
            )}
             </div>

            {/* What We Do */}
            <div
            className="relative dropdown"
            onMouseEnter={() => handleDropdownOpen("whatWeDo")}
            onMouseLeave={handleDropdownClose}
          >
            <button
              onClick={() => handleDropdownClick("whatWeDo")}
              className="flex items-center px-3 py-2 text-white hover:text-[#0084C2]"
            >
              What We Do <i className="ml-2 fa fa-chevron-down"></i>
            </button>
            {openDropdown === "whatWeDo" && (
              <div className="absolute bg-black text-white mt-2 py-2 w-48 rounded-md shadow-lg">
                <Link to="/rural-development" className="block px-4 py-2 hover:bg-[#E35A1E]">
                  Rural Development
                </Link>
                <Link to="/women-empowerment" className="block px-4 py-2 hover:bg-[#E35A1E]">
                  Women Empowerment
                </Link>
                <Link to="/know-more" className="block px-4 py-2 hover:bg-[#E35A1E]">
                  Know More
                </Link>
              </div>
            )}
          </div>

           {/* How Can You Help */}

           <div
            className="relative dropdown"
            onMouseEnter={() => handleDropdownOpen("howCanYouHelp")}
            onMouseLeave={handleDropdownClose}
          >
            <button
              onClick={() => handleDropdownClick("howCanYouHelp")}
              className="flex items-center px-3 py-2 text-white hover:text-[#0084C2]"
            >
              Become A Hero <i className="ml-2 fa fa-chevron-down"></i>
            </button>
            {openDropdown === "howCanYouHelp" && (
              <div className="absolute bg-black text-white mt-2 py-2 w-48 rounded-md shadow-lg">
                <Link to="/rural-development" className="block px-4 py-2 hover:bg-[#E35A1E]">
                Connect on Social Media				
                </Link>
                <Link to="/women-empowerment" className="block px-4 py-2 hover:bg-[#E35A1E]">
                Become a Hero Member
                </Link>
                <Link to="/know-more" className="block px-4 py-2 hover:bg-[#E35A1E]">
                Birthday Blessings	
                </Link>
                <Link to="/know-more" className="block px-4 py-2 hover:bg-[#E35A1E]">
                Donate	
                </Link>
              </div>
            )}
          </div>
           


            {/* Our Program  */}

            <div
            className="relative dropdown"
            onMouseEnter={() => handleDropdownOpen("ourProgram")}
            onMouseLeave={handleDropdownClose}
          >
            <button
              onClick={() => handleDropdownClick("ourProgram")}
              className="flex items-center px-3 py-2 text-white hover:text-[#0084C2]"
            >
              Our Program <i className="ml-2 fa fa-chevron-down"></i>
            </button>
            {openDropdown === "ourProgram" && (
              <div className="absolute bg-black text-white mt-2 py-2 w-48 rounded-md shadow-lg">
                <Link to="/education-program" className="block px-4 py-2 hover:bg-[#E35A1E]">
                  Education Awareness Program
                </Link>
                <Link to="/women-empowerment" className="block px-4 py-2 hover:bg-[#E35A1E]">
                  Mahila Sasakti Karan
                </Link>
              </div>
            )}
          </div>



             <Link
                 to="/contact"
                 className={`nav-item ${path === "/event" ? "text-[#E35A1E]" : "text-white"
                     } px-3 py-2 hover:text-[#0084C2]`}
                 onClick={() => setMobileMenuOpen(false)}
             >
                 Partner With Us
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
    </>
  );
}
