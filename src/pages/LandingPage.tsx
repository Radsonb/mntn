import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Features from "../components/features/Features";
import Footer from "../components/footer/Footer";

const LandingPage: React.FC = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Features />
            <Footer />
        </div>
    )
}

export default LandingPage;