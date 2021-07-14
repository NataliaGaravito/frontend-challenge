import React from 'react';
import NavBar from '../../components/navBar/NavBar.jsx';
import Banner from '../../components/banner/Banner.jsx';

function ClosetRoom(){
    return (
        <div className="main-background">
            <NavBar location={"closet room"}/>
            <Banner textBanner={"pagina en construccion"}></Banner>
        </div>)
}

export default ClosetRoom;