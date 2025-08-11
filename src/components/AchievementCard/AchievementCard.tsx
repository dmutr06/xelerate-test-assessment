"use client";

import { Achievement } from "@/types/achievements";

import styles from "./achievementCard.module.scss";
import { createTranslator, useI18n } from "@/lib/i18n";
import Image from "next/image";

import achievementImg from "@/assets/achiv.png";

type AchievementCardProps = {
    achievement: Achievement;
};

export default function AchievementCard({ achievement }: AchievementCardProps) {
    const { dictionary } = useI18n();

    const t = createTranslator(dictionary.achievement);

    return (
        <li className={`${styles.card} ${styles[`rank_${achievement.rank}`]}`}>
            <div className={styles.image}>
                <Image src={achievementImg} alt="icon" />
            </div>
            <div className={styles.content}>
                <div className={styles.title}>{t(`title.${achievement.title}`)}</div>
                {
                    achievement.current < achievement.target
                        ? (
                                <div className={styles.locked}>
                                    <div className={styles.info}>
                                        <div className={styles.achievement}>{t("description.default")}</div>
                                        <div>
                                            {achievement.current}
                                            {" "}
                                            <span className={styles.total}>
                                                /
                                                {" "}
                                                {achievement.target}
                                            </span>
                                        </div>
                                    </div>
                                    <div className={styles.progress}>
                                        <div className={styles.value} style={{ width: `${achievement.current / achievement.target * 100}%` }} />
                                        <div className={styles.rest} />
                                    </div>
                                </div>
                            )
                        : <div className={styles.unlocked}><span>{t(`description.${achievement.description}`)}</span></div>
                }
            </div>
        </li>
    );
}
