import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from "../../store";

import styles from './counter.module.css';

function Counter() {

    const counter = useStore(store => store.counter);
    const increment = useStore(store => store.increment) as () => void;
    const title = `Click to count `;
    return (
        <div className={styles.container} >
            <button className={styles.button} onClick={increment}>{title + counter}</button>
            <div className={styles.placeholder}>
            {title + "number"}
            </div>
        </div>
    )

}

export default observer(Counter)