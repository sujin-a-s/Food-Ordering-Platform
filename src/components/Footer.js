import { Link } from 'react-router-dom';
import FooterList from "./Footerlist";
import { MdFacebook } from 'react-icons/md';
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-slate-300 text-sm mt-16 py-8">
            <div className="container px-10">
                <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
                    {/* Restaurant Categories */}
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Restaurant Categories</h3>
                        <ul className="space-y-1">
                            <li><Link to="/restaurants" className="hover:underline">All Restaurants</Link></li>
                            <li><Link to="/cuisines/indian" className="hover:underline">Indian Cuisine</Link></li>
                            <li><Link to="/cuisines/chinese" className="hover:underline">Chinese Cuisine</Link></li>
                            <li><Link to="/cuisines/italian" className="hover:underline">Italian Cuisine</Link></li>
                            <li><Link to="/cuisines/mexican" className="hover:underline">Mexican Cuisine</Link></li>
                            <li><Link to="/cuisines/american" className="hover:underline">American Cuisine</Link></li>
                        </ul>
                    </FooterList>

                    {/* Customer Support */}
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Customer Support</h3>
                        <ul className="space-y-1">
                            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
                            <li><Link to="/order-tracking" className="hover:underline">Order Tracking</Link></li>
                            <li><Link to="/faq" className="hover:underline">FAQs</Link></li>
                            <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
                            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
                        </ul>
                    </FooterList>

                    {/* About Us */}
                    <div className="w-full md:w-1/3">
                        <h3 className="text-base font-bold mb-2">About Us</h3>
                        <p className="mb-2">We are dedicated to bringing the best food delivery experience to your doorstep. Explore a variety of restaurants and cuisines from the comfort of your home.</p>
                        <p>&copy; {new Date().getFullYear()} Swiggy. All rights reserved</p>
                    </div>

                    {/* Follow Us */}
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-blue-500"><MdFacebook size={24} /></a>
                            <a href="#" className="hover:text-blue-400"><AiFillTwitterCircle size={24} /></a>
                            <a href="#" className="hover:text-pink-500"><AiFillInstagram size={24} /></a>
                            <a href="#" className="hover:text-red-600"><AiFillYoutube size={24} /></a>
                        </div>
                    </FooterList>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
