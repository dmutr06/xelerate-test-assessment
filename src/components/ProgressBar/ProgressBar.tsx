"use client";

import styles from "./progressBar.module.scss";

type ProgressBarProps = {
    unlocked: number;
    total: number;
};

export default function ProgressBar({ unlocked, total }: ProgressBarProps) {
    return (
        <div className={styles.progress}>
            <div style={{ width: `${unlocked / total * 100}%` }} className={styles.value} />
            <div className={styles.rest} />
        </div>
    );
}
