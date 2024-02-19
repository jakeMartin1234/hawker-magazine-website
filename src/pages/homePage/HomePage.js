import React from "react";
import { useState, useEffect } from "react";
import './HomePage.css';
import Crossword from "./crossword/Crossword";

function HomePage() {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const isMobile = viewportWidth < 767;

    useEffect(() => {
        const handleResize = () => setViewportWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="container">
            <div className="title">Hawker Magazine</div>
            {isMobile ?
                <div>Mobile Menu</div> :
                <Crossword/>}
        </div>
    );
}

export default HomePage;