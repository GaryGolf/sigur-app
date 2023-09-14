import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from "../../store";

import styles from './counter.module.css';

function Counter() {

    const counter = useStore(store => store.counter);
    const increment = useStore(store => store.increment) as () => void;
    const title = `Click to count: ${counter}`;
    return (
        <div className={styles.container} >
            <button className={styles.button} onClick={increment}>{title}</button>
            <div className={styles.placeholder}>
            {title}
            </div>
        </div>
    )

}

export default observer(Counter)