import React from 'react';
import styles from '../banner/banner.module.css';

function Banner(props){
    return (
        <div className={styles.containerBanner}>
            <h1 className={styles.textBanner}>{props.textBanner}</h1>
        </div>
    )
}

export default Banner;