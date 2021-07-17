import React, {useState} from 'react';
import NavBar from '../../components/navBar/NavBar.jsx';
import Banner from '../../components/banner/Banner.jsx';
import styles from '../shop/shop.module.css'
import Products from '../../components/Products/Products.jsx';
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx';

function Shop(){
    const [addProduct, setAddProduct] = useState([]);
    const [popUp, setPopUp]= useState(false);
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
            <Products addProduct={addProduct} setAddProduct={setAddProduct}></Products>
            <button className={!popUp ? styles.shoppingCart : styles.noShoppingCart} onClick={()=>setPopUp(true)}></button>
            <div className={popUp ? styles.popUpContainer : styles.noPopUpContainer}>
                {
                    popUp ? <ShoppingCart setPopUp={setPopUp} addProduct={addProduct} setAddProduct={setAddProduct}></ShoppingCart> : null
                }
            </div>            
        </div>)
}

export default Shop;