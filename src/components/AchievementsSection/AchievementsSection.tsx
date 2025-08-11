"use client";

import styles from "./achievementsSection.module.scss";
import { Achievement } from "@/types/achievements";
import AchievementCard from "../AchievementCard/AchievementCard";

interface Props {
    title: string;
    achievements: Achievement[];
    lines?: number;
}

export default function AchievementsSection({ title, achievements, lines = 2 }: Props) {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>
                {title}
                {" "}
                <span>{achievements.length}</span>
            </h2>
            <div className={styles.slider}>
                <ul className={styles.list}>
                    {achievements.slice(0, 6 * lines).map(a => <AchievementCard key={a.id} achievement={a} />)}
                </ul>
                <div className={styles.pagination}>
                    <div className={`${styles.page} ${styles.active}`} />
                    <div className={styles.page} />
                    <div className={styles.page} />
                    <div className={styles.page} />
                </div>
            </div>
        </section>
    );
}
