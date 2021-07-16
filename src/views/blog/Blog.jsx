import React from 'react';
import NavBar from '../../components/navBar/NavBar.jsx';
import Banner from '../../components/banner/Banner.jsx';

function Blog(){
    const sendBanner = <div><span>pagina en</span><br/><span>construccion</span></div>
    return (
        <div className="main-background">
            <NavBar location={"blog"}/>
            <Banner textBanner={sendBanner}></Banner>
        </div>)
}

export default Blog;