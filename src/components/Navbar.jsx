import { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/mainlogo.png";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  //const [dropdownOpenPages, setDropdownOpenPages] = useState(false);
  const [auth, setAuth] = useState("");
  //const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const path = useLocation().pathname;
  const navigate = useNavigate();

  //const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpenPages, setDropdownOpenPages] = useState(false);
  const dropdownRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpenPages(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
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

  return (
    <>
      {/* Top Bar for large screens */}
      <div className="top-bar bg-opacity-50 bg-black text-white border-b border-gray-300 fixed w-full z-50 hidden sm:block">
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
                className="text-white hover:text-[#E35A1E]"
              >
                +91-8380804409
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fa fa-envelope text-[#E35A1E]"></i>
              <a
                href="mailto:connect@rsjrdfoundation.org"
                className="text-white hover:text-[#E35A1E]"
              >
                connect@rsjrdfoundation.org
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap items-center space-x-4 text-sm sm:text-base mt-2 sm:mt-0">
            <a
              href="https://twitter.com"
              className="hover:text-[#E35A1E] text-white"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com"
              className="hover:text-[#E35A1E] text-white"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com"
              className="hover:text-[#E35A1E] text-white"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com"
              className="hover:text-[#E35A1E] text-white"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              className="hover:text-[#E35A1E] text-white"
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

      {/* Navbar */}

      <div className="navbar bg-[#000000c4] text-white fixed w-full sm:top-12 z-40 shadow-md">
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
            className="navbar-toggler text-white md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>

          {/* Menu Items */}
          <div
                className={`fixed inset-0 bg-[#000000aa] md:bg-transparent text-white flex flex-col transform transition-transform duration-300 ${
                    mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                } mt-28 md:mt-0 md:relative md:translate-x-0 md:flex md:flex-row md:space-x-6`}
                >


            {/* Home Link */}
            <Link
              to="/"
              className={`nav-item ${
                path === "/" ? "text-[#E35A1E]" : "text-white"
              } px-3 py-2 hover:text-[#E35A1E]`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* About Link */}
            <Link
              to="/about"
              className={`nav-item ${
                path === "/about" ? "text-[#E35A1E]" : "text-white"
              } px-3 py-2 hover:text-[#E35A1E]`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            {/* Pages Dropdown */}
            <div className="relative nav-item" ref={dropdownRef}>
              <button
                className="flex items-center px-3 py-2 hover:text-[#E35A1E]"
                onClick={() => setDropdownOpenPages(!dropdownOpenPages)}
              >
                Pages
                <i className="ml-2 fa fa-chevron-down"></i>
              </button>
              {dropdownOpenPages && (
                <div className="absolute bg-black text-white mt-2 py-2 w-48">
                  <Link
                    to="/about"
                    className="block px-4 py-2 hover:bg-[#E35A1E] text-white"
                    onClick={() => setDropdownOpenPages(false)}
                  >
                    Detail Page
                  </Link>
                  <Link
                    to="/what-we-do"
                    className="block px-4 py-2 hover:bg-[#E35A1E] text-white"
                    onClick={() => setDropdownOpenPages(false)}
                  >
                    What We Do
                  </Link>
                  <Link
                    to="/team"
                    className="block px-4 py-2 hover:bg-[#E35A1E] text-white"
                    onClick={() => setDropdownOpenPages(false)}
                  >
                    Meet The Team
                  </Link>
                  <Link
                    to="/volunteer"
                    className="block px-4 py-2 hover:bg-[#E35A1E] text-white"
                    onClick={() => setDropdownOpenPages(false)}
                  >
                    Become A Volunteer
                  </Link>
                  <hr className="my-2 border-gray-500" />
                  <Link
                    to="/donate"
                    className="block px-4 py-2 hover:bg-[#E35A1E] text-white"
                    onClick={() => setDropdownOpenPages(false)}
                  >
                    Donate Now
                  </Link>
                </div>
              )}
            </div>

            {/* Events Link */}
            <Link
              to="/event"
              className={`nav-item ${
                path === "/event" ? "text-[#E35A1E]" : "text-white"
              } px-3 py-2 hover:text-[#E35A1E]`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>

            {/* Contact Link */}
            <Link
              to="/contact"
              className={`nav-item ${
                path === "/contact" ? "text-[#E35A1E]" : "text-white"
              } px-3 py-2 hover:text-[#E35A1E]`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
