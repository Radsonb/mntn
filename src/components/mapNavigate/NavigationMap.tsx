import React from "react";

interface NavigationMapProps {
    activeSection: string;
}

const NavigationMap: React.FC<NavigationMapProps> = ({ activeSection }) => {
    return(
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 text-right">
            <p className={`
                uppercase tracking-wider text-sm mb-2
                ${activeSection === "home" ? "text-yellow-400" : "" }
                `}>
                Start
            </p>
            <div className="flex flex-col space-y-2">
                <span className={activeSection === "1" ? "text-yellow-400" : ""}>01</span>
                <span className={activeSection === "2" ? "text-yellow-400" : ""}>02</span>
                <span className={activeSection === "3" ? "text-yellow-400" : ""}>03</span>
            </div>
        </div>
    )
}

export default NavigationMap