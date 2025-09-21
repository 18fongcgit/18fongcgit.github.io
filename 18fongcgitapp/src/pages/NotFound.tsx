import React from 'react';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import './NotFound.css';

const NotFound: React.FC = () => {
    return (
        <div>
            <div className="p5-background-canvas">
            </div>
            <div className="overlay-content">
                <NavBar />
                <div className ="NotFound">
                    <h1>404 - Not Found</h1>
                    <p>The page you are looking for does not exist.</p>
                </div>
                <Footer />
            </div>
        </div>

    );
};

export default NotFound;