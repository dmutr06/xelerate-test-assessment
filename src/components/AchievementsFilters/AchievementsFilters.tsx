"use client";

import { useI18n } from "@/lib/i18n";

import styles from "./achievementsFilters.module.scss";
import { Achievement } from "@/types/achievements";

type AchievementsFilterProps = {
    achievements: Achievement[];
    filter: string;
    updateFilterAction: (newFilter: string) => void;
};

export default function AchievementsFilters({ achievements, filter, updateFilterAction }: AchievementsFilterProps) {
    const { dictionary } = useI18n();
    const dict = dictionary.filters;

    return (
        <div className={styles.filters}>
            <div className={styles.categoriesWrapper}>
                <div className={styles.categories}>
                    {
                        (["all", "platform", "specialist"] as const).map((f, i) => (
                            <div onClick={() => updateFilterAction(f)} key={f} className={`${styles.category}${filter === f ? ` ${styles.active}` : ""}`}>
                                <div className={styles.number}>
                                    0
                                    {i + 1}
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.text}>{dict[f]}</div>
                                    <div className={styles.total}>
                                        {
                                            f == "all"
                                                ? achievements.length
                                                : achievements.filter(a => a.category === f).length
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.ranks}>{dict.ranks}</div>
        </div>
    );
}
