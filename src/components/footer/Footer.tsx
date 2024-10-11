import React from "react";
import Logo from '../../assets/image/Logo.svg'

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-row-3 justify-between p-32">
            <div>
                <h1 className="mb-6"><img src={Logo}></img></h1>
                <p className="mb-[122px]">Get out thete & discover your next slope, <br />mountain & destination!</p>
                <span>&copy; Copyright 2024 MNTN, Inc. Terms & Privacy</span>
            </div>
            
            <div className="text-left">
                <h1 className="mb-6 text-[#FBD784] font-bold text-2xl">More on The Blog</h1>
                <ul>
                    <li className="mb-6 "><a href="#">About MNTN</a></li>
                    <li className="mb-4 "><a href="#">Contributors & Writers</a></li>
                    <li className="mb-4 "><a href="#">Write For Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>

            <div>
                <h1 className="text-[#FBD784] font-bold text-2xl mb-6">More on MNTN</h1>
                <p className="mb-4">The Team</p>
                <p className="mb-4">Job</p>
                <p>Press</p>
            </div>
        </footer>
    )
}

export default Footer;