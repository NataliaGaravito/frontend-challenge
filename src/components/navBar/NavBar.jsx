import React from 'react';
import { Link } from "react-router-dom";
import styles from '../navBar/navBar.module.css';

function NavBar(props){
    const views = ["shop", "instagram", "closet room", "vendedoras", "blog"];
    return (
        <div className={styles.containerNavBar}>
            <div className={styles.divNavBarButtons}>
            {
                views.map((elem, key)=>{
                    console.log(props.location)
                    let viewSelected = props.location === elem ? styles.viewSelected : styles.viewNoSelected
                    return(
                        <Link key={key} to={"/"+elem}>
                            <button className={styles.navBarButtons}><p className={viewSelected}>{elem}</p></button>
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