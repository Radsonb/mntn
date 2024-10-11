import React from "react";

interface NavigationMapProps {
    activeSection: string;
}

const NavigationMap: React.FC<NavigationMapProps> = ({ activeSection }) => {
    return(
        <div className="fixed text-2xl right-8 top-1/2 transform -translate-y-1/2 text-right">
            <p className={`
                uppercase tracking-wider text-3xl mb-2
                ${activeSection === "home" ? "text-[#FBD784]" : "" }
                `}>
                Start
            </p>
            <div className="flex flex-col space-y-2">
                <span className={activeSection === "1" ? "text-[#FBD784]" : ""}><a href="#section1">01</a></span>
                <span className={activeSection === "2" ? "text-[#FBD784]" : ""}><a href="#section2">02</a></span>
                <span className={activeSection === "3" ? "text-[#FBD784]" : ""}><a href="#section3">03</a></span>
            </div>
        </div>
    )
}

export default NavigationMap