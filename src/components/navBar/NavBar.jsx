import React from 'react';
import { Link } from "react-router-dom";
import styles from '../navBar/navBar.module.css';

function NavBar(props){
    const views = ["SHOP", "INSTAGRAM", "CLOSET ROOM", "VENDEDORAS", "BLOG"];
    return (
        <div className={styles.container}>
            <div className={styles.divNavBarButtons}>
            {
                views.map((elem, key)=>{
                    console.log(props.location)
                    let viewSelected = props.location === elem ? styles.viewSelected : styles.viewNoSelected
                    return(
                        <Link key={key} to={"/"+elem}>
                            <button id={viewSelected} className={styles.navBarButtons}>{elem}</button>
                        </Link>
                    )    
                })
            }
            </div>
            <div className={styles.navBarSearchBar}>
                <input className={styles.navBarInput} placeholder="¿Qué estás buscando?"/>
                <button className={styles.navBarButton}></button>
            </div>
            
        </div>
    )
}

export default NavBar;