import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="bg-customBlue1 text-gray-300 py-12 px-4">
            <div className="container mx-auto px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Contact Us Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-green-400">Contact Us</h2>
                        <a href="https://www.kodekalp.com" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-yellow-300">
                            <p><i className="fas fa-map-marker-alt mr-2"></i>Gondia, Maharashtra, India</p>
                        </a>
                        <a href="tel:+918380804409" className="block text-white hover:text-yellow-300">
                            <p><i className="fas fa-phone mr-2"></i>+91 83 8080 4409</p>
                        </a>
                        <a href="mailto:connect@rsjrdfoundation.org" className="block text-white hover:text-yellow-300">
                            <p><i className="fas fa-envelope mr-2"></i>connect@rsjrdfoundation.org</p>
                        </a>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://twitter.com" className="text-white hover:text-yellow-300">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.facebook.com" className="text-white hover:text-yellow-300">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com" className="text-white hover:text-yellow-300">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com" className="text-white hover:text-yellow-300">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="https://www.linkedin.com" className="text-white hover:text-yellow-300">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    {/* Popular Links Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-green-400">Popular Links</h2>
                        <a href="/about" className="block text-white hover:text-yellow-300">About Us</a>
                        <a href="/contact" className="block text-white hover:text-yellow-300">Contact Us</a>
                        <a href="/event" className="block text-white hover:text-yellow-300">Popular Causes</a>
                        <a href="/event" className="block text-white hover:text-yellow-300">Upcoming Events</a>
                        <a href="#" className="block text-white hover:text-yellow-300">Latest Blog</a>
                    </div>

                    {/* Useful Links Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-green-400">Useful Links</h2>
                        <Link to="/terms-conditions" className="block text-white hover:text-yellow-300">Terms of Condition</Link>
                        <Link to="/privacy-policy" className="block text-white hover:text-yellow-300">Privacy Policy</Link>
                        <Link to="/cookies" className="block text-white hover:text-yellow-300">Cookies</Link>
                        <Link to="/helps" className="block text-white hover:text-yellow-300">Help</Link>
                        <Link to="/faqs" className="block text-white hover:text-yellow-300">FAQs</Link>
                    </div>

                    {/* Newsletter Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-green-400">Newsletter</h2>
                        <form name="NewsLetter" className="flex flex-col space-y-2">
                            <input
                                name="subscribe"
                                type="email"
                                placeholder="Email goes here"
                                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                required
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-yellow-400 text-blue-900 rounded hover:bg-yellow-500 transition"
                            >
                                Submit
                            </button>
                        </form>
                        <h6 className="text-sm text-white">Don't worry, we don't spam!</h6>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-600 mt-8 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
                        <div className="text-sm text-white">
                            &copy; <a href="#" className="text-white hover:text-yellow-300">RSJ RURAL DEVELOPMENT FOUNDATION</a> | 2024, All Rights Reserved.
                        </div>
                        <div className="text-sm text-white md:text-right">
                            Design & Developed by <a href="https://www.kodekalp.com" className="text-yellow-300 hover:text-yellow-400">KodeKalp Global Technologies Private Limited</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
