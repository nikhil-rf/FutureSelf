"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Mail, Plus, ArrowRight } from "lucide-react";
import StatCard from "@/components/StatCard";
import ReminderCard from "@/components/ReminderCard";
import { useReminderStore } from "@/store/reminders";
import { useUIStore } from "@/store/ui";
import { mockReminders } from "@/lib/mock-data";
import { getGreeting } from "@/lib/utils";

export default function DashboardPage() {
    const { reminders, setReminders } = useReminderStore();
    const { setCreateModalOpen } = useUIStore();

    useEffect(() => {
        if (reminders.length === 0) {
            setReminders(mockReminders);
        }
    }, [reminders.length, setReminders]);

    const scheduledReminders = reminders.filter((r) => r.status === "scheduled");
    const deliveredReminders = reminders.filter((r) => r.status === "delivered");

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-foreground mb-1">
                        {getGreeting()}, Alex.
                    </h1>
                    <p className="text-muted-foreground">
                        Ready to think ahead? Your future self is waiting.
                    </p>
                </div>
                <button
                    onClick={() => setCreateModalOpen(true)}
                    className="gradient-btn text-white px-5 py-3 rounded-xl font-medium flex items-center gap-2 text-sm"
                >
                    <Plus className="w-4 h-4" />
                    New Reminder
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <StatCard
                    label="Pending Delivery"
                    value={scheduledReminders.length}
                    icon={Clock}
                    gradient
                />
                <StatCard
                    label="Messages Received"
                    value={deliveredReminders.length}
                    icon={Mail}
                    trend={`+${Math.min(deliveredReminders.length, 5)} this week`}
                />
            </div>

            {/* Upcoming Pipeline */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-foreground">
                        Upcoming Pipeline
                    </h2>
                    <a
                        href="/dashboard/timeline"
                        className="text-sm text-primary hover:text-violet-end transition-colors flex items-center gap-1"
                    >
                        View all
                        <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                </div>
                <div className="space-y-3">
                    {scheduledReminders.slice(0, 3).map((reminder, i) => (
                        <ReminderCard key={reminder.id} reminder={reminder} index={i} />
                    ))}
                </div>
            </div>

            {/* Recent Time Capsules */}
            <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                    Recent Time Capsules
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {deliveredReminders.slice(0, 4).map((reminder, i) => (
                        <ReminderCard
                            key={reminder.id}
                            reminder={reminder}
                            index={i}
                            compact
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
