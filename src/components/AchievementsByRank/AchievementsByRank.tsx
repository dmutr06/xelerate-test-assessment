"use client";

import type { Achievement, AchievementRank } from "@/types/achievements";

import styles from "./achievementsByRank.module.scss";
import { useI18n } from "@/lib/i18n";

type AchievementsWithRankProps = {
    achievements: Achievement[];
    rank: AchievementRank;
};

export default function AchievementsByRank({ achievements, rank }: AchievementsWithRankProps) {
    const { dictionary } = useI18n();
    const dict = dictionary.progress;
    const filteredAchievements = achievements.filter(a => a.rank === rank);

    return (
        <div className={styles.container}>
            <div className={styles.amount}>{filteredAchievements.length}</div>
            <div className={styles.rankInfo}>
                {
                    typeof rank == "number"
                        ? dict[`rank${rank}`]
                        : dict.locked
                }
            </div>
        </div>
    );
}
