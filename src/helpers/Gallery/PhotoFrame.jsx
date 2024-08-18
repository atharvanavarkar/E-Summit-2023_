import React from 'react';
import styles from '../../css/photoframe.module.css';

const PhotoFrame = ({ imagePath }) => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.photo}>
        {/* Set the src attribute with the imagePath prop */}
        <img src={imagePath} alt='Photograph' />
      </div>
    </div>
  );
};

export default PhotoFrame;

