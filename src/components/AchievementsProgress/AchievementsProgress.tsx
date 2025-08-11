"use client";
import UnlockedAchievementsIcon from "../ui/icons/UnlockedAchievementsIcon";
import { Achievement } from "@/types/achievements";
import ProgressBar from "../ProgressBar/ProgressBar";
import AchievementsByRank from "../AchievementsByRank/AchievementsByRank";

import styles from "./achievementsProgress.module.scss";
import { useI18n } from "@/lib/i18n";

type AchievementsProgressProps = {
    achievements: Achievement[];
};

export default function AchievementsProgress({ achievements }: AchievementsProgressProps) {
    const { dictionary } = useI18n();
    const dict = dictionary;

    const unlocked = achievements.filter(a => a.current >= a.target).length;

    return (
        <div className={styles.progressContainer}>
            <div className={styles.unlocked}>
                <div className={styles.gradient} />
                <div className={styles.unlockedWrapper}>
                    <span className={styles.unlockedTitle}>
                        <UnlockedAchievementsIcon />
                        {" "}
                        {dict.progress.unlocked}
                    </span>
                    <div>
                        {unlocked}
                        {" "}
                        <span className={styles.totalAchievements}>
                            /
                            {" "}
                            {achievements.length}
                        </span>
                    </div>
                </div>
                <ProgressBar unlocked={unlocked} total={achievements.length} />
            </div>
            <div className={styles.ranksStats}>
                {([1, 2, 3, "locked"] as const).map(rank => <AchievementsByRank key={rank} achievements={achievements} rank={rank} />)}
            </div>
        </div>
    );
}
