import React from 'react';
import styles from '../Products/products.module.css';
import dataProducts from '../../products.json';
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';
import p4 from '../../assets/p4.png';
import p5 from '../../assets/p5.png';
import p6 from '../../assets/p6.png';

function Products(){
    const images = [p1, p2, p3, p4, p5, p6]
    const products = ['Jeans Azules Tiro Alto Bota Ancha New York', 'Chaqueta de Cuero Negra', 'Chaqueta de Cuero Cafe', 'Sandalias de Cuero y Tachas Saville Row',
                        'Gaban Rojo Forrado Saville', 'Esqueleto Blanco estampado LA']
    return (
        <div className={styles.containerProducts}>
            {
                products.map((elem, key)=>{
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
                                    <p className={styles.price}>{dataProducts.products[key].price}</p>
                                </div>
                                <hr/>
                            </div>
                            <button className={styles.addProduct} ></button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products;