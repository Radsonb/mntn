import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const FollowUs: React.FC = () => {
    return(
        <div className="fixed left-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6" >
            <div className="flex flex-col items-center">
                <span className="rotate-90 uppercase tracking-wider text-sm mb-10">Follow Us!</span>
                <a href="#" className="text-white hover:text-gray-400 mb-2"><FaInstagram /></a>
                <a href="#" className="text-white hover:text-gray-400"><FaTwitter /></a>
            </div>
        </div>
    )
}

export default FollowUs