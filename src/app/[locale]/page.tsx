import AchievementsSection from "@/components/AchievementsSection/AchievementsSection";
import AchievementsHeader from "@/components/AchievementsHeader/AchievementsHeader";
import { Achievement } from "@/types/achievements";
import { getDictionary } from "@/lib/i18n/getDictionary";

export default async function MainPage() {
    const achievements: Achievement[] = await import("@/data/achievements.json").then(module => module.default as Achievement[]);
    const dict = await getDictionary();

    return (
        <div className="container">
            <AchievementsHeader achievements={achievements} />
            <AchievementsSection title={dict.filters.platform} achievements={achievements.filter(a => a.category === "platform")} lines={2} />
            <AchievementsSection title={dict.filters.specialist} achievements={achievements.filter(a => a.category === "specialist")} lines={1} />
        </div>
    );
}
