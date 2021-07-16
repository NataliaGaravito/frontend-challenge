import React from 'react';
import NavBar from '../../components/navBar/NavBar.jsx';
import Banner from '../../components/banner/Banner.jsx';

function ClosetRoom(){
    const sendBanner = <div><span>pagina en</span><br/><span>construccion</span></div>
    return (
        <div className="main-background">
            <NavBar location={"closet room"}/>
            <Banner textBanner={sendBanner}></Banner>
        </div>)
}

export default ClosetRoom;