import React from 'react';
import styles from '../Products/products.module.css';
import dataProducts from '../../products.json';
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';
import p4 from '../../assets/p4.png';
import p5 from '../../assets/p5.png';
import p6 from '../../assets/p6.png';

function Products(props){
    let repeatedProduct=false;
    const images = [p1, p2, p3, p4, p5, p6]
    const products = ['Jeans Azules Tiro Alto Bota Ancha New York', 'Chaqueta de Cuero Negra', 'Chaqueta de Cuero Cafe', 'Sandalias de Cuero y Tachas Saville Row',
                        'Gaban Rojo Forrado Saville', 'Esqueleto Blanco estampado LA']
    function addProduct(item, price){
        const objectProducts = {item: item, ammount: 1, unitPrice: price, totalPrice: price}

        const arrayOrderedProducts = props.addProduct.map((elem) => {
            const { totalPrice, ammount , ...newArrayElem } = elem;
            return newArrayElem;
        })

        const { totalPrice, ammount , ...newArraySendArray } = objectProducts;

        arrayOrderedProducts.forEach((elem) => {
            if(JSON.stringify(elem) === JSON.stringify(newArraySendArray)){
                repeatedProduct = true;
            }
        })

        if(!repeatedProduct){
            props.setAddProduct(products => [...products, objectProducts])
        }
        
    }
    return (
        <div className={styles.containerProducts}>
            {
                products.map((elem, key)=>{
                    let price = parseInt(dataProducts.products[key].price.replace('$', '').replace(',', ''), 10) ;
                    return(
                        <div key={key} className={styles.product}>
                            <img src={images[key]} alt="product"/>
                            <div className={styles.containerName}>
                                <div className={styles.name}>
                                    <p>{elem}</p>
                                    <div><p>XS</p></div>
                                </div>
                                <hr/>
                            </div>
                            <div>
                            <div className={styles.brandPrice}>
                                    <p>Straadivaruois Zara Home Juntos</p>
                                    <p className={styles.price}>$ {price}</p>
                                </div>
                                <hr/>
                            </div>
                            <button className={styles.addProduct} onClick={()=>addProduct(elem, price)}></button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products;