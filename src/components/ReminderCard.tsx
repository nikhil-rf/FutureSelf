"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { cn, formatDate, getDaysUntil } from "@/lib/utils";
import { type MockReminder } from "@/lib/mock-data";
import { useUIStore } from "@/store/ui";

type ReminderCardProps = {
    reminder: MockReminder;
    index?: number;
    compact?: boolean;
};

const statusColors = {
    scheduled: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    delivered: "bg-green-500/10 text-green-400 border-green-500/20",
    archived: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
};

const categoryIcons: Record<string, string> = {
    goals: "🎯",
    habits: "🔄",
    ideas: "💡",
    "follow-ups": "📋",
    general: "📌",
};

export default function ReminderCard({
    reminder,
    index = 0,
    compact = false,
}: ReminderCardProps) {
    const { setSelectedReminderId } = useUIStore();
    const daysUntil = getDaysUntil(reminder.deliveryDate);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -2 }}
            onClick={() => setSelectedReminderId(reminder.id)}
            className={cn(
                "bg-card border border-border rounded-2xl cursor-pointer transition-all duration-200 hover:border-primary/30 group gradient-border",
                compact ? "p-4" : "p-5"
            )}
        >
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                    <span className="text-lg">{categoryIcons[reminder.category] || "📌"}</span>
                    <h3
                        className={cn(
                            "font-semibold text-foreground group-hover:text-primary transition-colors",
                            compact ? "text-sm" : "text-base"
                        )}
                    >
                        {reminder.title}
                    </h3>
                </div>
                <span
                    className={cn(
                        "text-xs px-2.5 py-1 rounded-full border font-medium capitalize",
                        statusColors[reminder.status]
                    )}
                >
                    {reminder.status}
                </span>
            </div>

            {!compact && (
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {reminder.message}
                </p>
            )}

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{formatDate(reminder.deliveryDate)}</span>
                    {reminder.status === "scheduled" && daysUntil > 0 && (
                        <span className="text-primary font-medium">
                            · {daysUntil}d left
                        </span>
                    )}
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
            </div>
        </motion.div>
    );
}
