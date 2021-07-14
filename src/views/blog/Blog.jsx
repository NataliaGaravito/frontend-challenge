import React from 'react';
import NavBar from '../../components/navBar/NavBar.jsx';
import Banner from '../../components/banner/Banner.jsx';

function Blog(){
    return (
        <div className="main-background">
            <NavBar location={"blog"}/>
            <Banner textBanner={"pagina en construccion"}></Banner>
        </div>)
}

export default Blog;