import React, { useState, useEffect } from 'react';
import PhotoFrame from './PhotoFrame';
import styles from '../../css/Gallery_Layout.module.css';
import Navbar from '../../pages/Navbar';
import galleryImages from '../../data/galleryImages';
export default function Gallery_Layout() {


    return (
        <>
          <Navbar />
          <div className={styles.heading}>
            <h2>GLIMPSES OF PREVIOUS</h2>
            <h1>E-SUMMIT</h1>
          </div>
          <div className={styles.gridLayout}>
            {galleryImages.map((imagePath, index) => (
              <div key={index} className={styles.photoFrameWrapper}>
                {/* Pass the imagePath as a prop to the PhotoFrame component */}
                <PhotoFrame imagePath={imagePath} />
              </div>
            ))}
          </div>
        </>
      );
}


