import React from 'react';
import Navbar from '../pages/Navbar';
import ProjectDetails from '../pages/ProjectDetailes';
import Footer from '../pages/Footer';

const DetailsLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ProjectDetails></ProjectDetails>
            <Footer></Footer>
        </div>
    );
};

export default DetailsLayout;