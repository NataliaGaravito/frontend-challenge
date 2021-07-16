import React from 'react';
import styles from '../banner/banner.module.css';

function Banner(props){
    return (
        <div className={styles.containerBanner}>
            <div className={styles.textBanner}>{props.textBanner}</div>
        </div>
    )
}

export default Banner;