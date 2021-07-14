import React from 'react';
import NavBar from '../../components/navBar/NavBar.jsx';
import Banner from '../../components/banner/Banner.jsx';

function Vendedoras(){
    return (
        <div className="main-background">
            <NavBar location={"vendedoras"}/>
            <Banner textBanner={"pagina en construccion"}></Banner>
        </div>)
}

export default Vendedoras;