import React from 'react';
import NavBar from '../../components/navBar/NavBar.jsx';
import Banner from '../../components/banner/Banner.jsx';
import styles from '../shop/shop.module.css'

function Shop(){
    return (
        <div className="main-background">
            <NavBar location={"shop"}/>
            <Banner textBanner={"te regalamos en tu primera compra"}></Banner>
        </div>)
}

export default Shop;