export type AchievementRank = 1 | 2 | 3 | "locked";

export interface Achievement {
    id: number;
    title: string;
    description: string;
    current: number;
    target: number;
    rank: AchievementRank;
    category: "platform" | "specialist";
}
