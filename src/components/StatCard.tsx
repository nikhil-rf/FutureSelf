"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type StatCardProps = {
    label: string;
    value: string | number;
    icon?: LucideIcon;
    trend?: string;
    gradient?: boolean;
    className?: string;
};

export default function StatCard({
    label,
    value,
    icon: Icon,
    trend,
    gradient = false,
    className,
}: StatCardProps) {
    return (
        <motion.div
            whileHover={{ y: -2, scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className={cn(
                "relative rounded-2xl p-6 overflow-hidden",
                gradient
                    ? "bg-gradient-to-br from-violet-start/20 to-violet-end/10 border border-primary/20"
                    : "bg-card border border-border",
                className
            )}
        >
            {gradient && (
                <div className="absolute inset-0 bg-gradient-to-br from-violet-start/5 to-transparent" />
            )}
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                    {Icon && (
                        <div
                            className={cn(
                                "w-10 h-10 rounded-xl flex items-center justify-center",
                                gradient ? "bg-primary/20" : "bg-secondary"
                            )}
                        >
                            <Icon className="w-5 h-5 text-primary" />
                        </div>
                    )}
                    {trend && (
                        <span className="text-xs text-green-400 font-medium bg-green-400/10 px-2 py-1 rounded-full">
                            {trend}
                        </span>
                    )}
                </div>
                <p className="text-3xl font-bold text-foreground">{value}</p>
                <p className="text-sm text-muted-foreground mt-1">{label}</p>
            </div>
        </motion.div>
    );
}
