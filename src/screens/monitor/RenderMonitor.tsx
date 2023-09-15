import React, { memo } from 'react';
import styles from './monitor.module.css';

const rand = (): Number => Math.floor(Math.random() * 256)
function RenderMonitor() {
    const backgroundColor = `rgb(${rand()}, ${rand()}, ${rand()})`;
  return ( <div className={styles.container} style={{ backgroundColor }}/> );
}

export default RenderMonitor;
