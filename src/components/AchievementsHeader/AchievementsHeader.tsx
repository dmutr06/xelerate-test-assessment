"use client";
import styles from "./achievementsHeader.module.scss";
import AchievementsProgress from "../AchievementsProgress/AchievementsProgress";
import { Achievement } from "@/types/achievements";
import AchievementsFilters from "../AchievementsFilters/AchievementsFilters";
import { useI18n } from "@/lib/i18n";
import { useMemo, useState } from "react";

type AchievementsHeaderProps = {
    achievements: Achievement[];
    filter?: string;
};

export default function AchievementsHeader({ achievements }: AchievementsHeaderProps) {
    const { dictionary } = useI18n();
    const dict = dictionary.header;

    const [filter, setFilter] = useState("all");

    const filteredAchievements = useMemo(() => {
        if (filter == "all") return achievements;

        return achievements.filter(a => a.category == filter);
    }, [achievements, filter]);

    return (
        <header className={styles.header}>
            <div className={styles.gradient} />
            <h1 className={styles.title}>{dict.title}</h1>
            <h2 className={styles.subtitle}>{dict.better}</h2>
            <AchievementsProgress achievements={filteredAchievements} />
            <AchievementsFilters achievements={achievements} filter={filter} updateFilterAction={setFilter} />
        </header>
    );
}
