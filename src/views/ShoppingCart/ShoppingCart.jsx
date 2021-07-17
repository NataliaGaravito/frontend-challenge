import React from 'react';
import styles from '../ShoppingCart/shoppingCart.module.css';

function ShoppingCart(props){  
    let total = 0;  
    function increaseProduct(key){
        const newArray = [...props.addProduct]
        newArray[key].ammount = newArray[key].ammount + 1; 
        newArray[key].totalPrice = newArray[key].unitPrice * newArray[key].ammount;
        props.setAddProduct(newArray)
    }
    function decreaseProduct(key){
        const newArray = [...props.addProduct]
        if(newArray[key].ammount>1){
            newArray[key].ammount = newArray[key].ammount - 1; 
            newArray[key].totalPrice = newArray[key].unitPrice * newArray[key].ammount;
        props.setAddProduct(newArray)
        }        
    }
    function buy(){
        props.setAddProduct([])
        props.setPopUp(false)
    }
    function closePopUp(){
        props.setPopUp(false);
    }
    return (
        <div className={styles.containerShopping}>
            <div className={styles.title}>
                <h1>Resumen de la Compra</h1>
                <button className={styles.closePopUp} onClick={()=>closePopUp()}>X</button>
            </div>
            <div className={styles.products}>
                { 
                    props.addProduct.map((elem, key)=>{
                        total = total + elem.totalPrice;
                        return(
                            <div key={key} className={styles.detailsProduct}>
                                <p>{elem.item}</p>
                                <div className={styles.addProduct}>
                                    <button className={styles.changeAmmount} onClick={()=>decreaseProduct(key)}><span>-</span></button>
                                    <p>{elem.ammount}</p>
                                    <button className={styles.changeAmmount} onClick={()=>increaseProduct(key)}><span>+</span></button>
                                </div>                                
                                <p>$ {elem.totalPrice}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.total}>
                <h1>Total</h1>
                <p>$ {total}</p>
            </div>
            <button className={styles.buy} onClick={()=>buy()}><span>Comprar</span></button>
        </div>
    )
}

export default ShoppingCart ;