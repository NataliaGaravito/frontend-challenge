import React from 'react';
import NavBar from '../../components/navBar/NavBar.jsx';
import Banner from '../../components/banner/Banner.jsx';
import styles from '../shop/shop.module.css'
import Products from '../../components/Products/Products.jsx';

function Shop(){
    const sendBanner = <div><span>te regalamos</span><br/><span>en tu primera</span><br/><span>compra</span></div>
    return (
        <div className="main-background">
            <NavBar location={"shop"}/>
            <Banner textBanner={sendBanner}></Banner>
            <div className={styles.containerRecienLlegados}>
                <div className={styles.recienLlegados}>
                    <span className={styles.recien}>recien</span><span className={styles.llegados}>llegados</span>           
                </div>                    
                <span>lo último de nuestra tienda</span>
            </div> 
            <Products></Products>
        </div>)
}

export default Shop;