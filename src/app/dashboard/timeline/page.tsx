"use client";

import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Plus } from "lucide-react";
import ReminderCard from "@/components/ReminderCard";
import EmptyState from "@/components/EmptyState";
import { useReminderStore } from "@/store/reminders";
import { useUIStore } from "@/store/ui";
import { mockReminders } from "@/lib/mock-data";

export default function TimelinePage() {
    const {
        reminders,
        setReminders,
        searchQuery,
        setSearchQuery,
        filterStatus,
        setFilterStatus,
        sortBy,
        setSortBy,
    } = useReminderStore();
    const { setCreateModalOpen } = useUIStore();

    useEffect(() => {
        if (reminders.length === 0) {
            setReminders(mockReminders);
        }
    }, [reminders.length, setReminders]);

    const filteredReminders = useMemo(() => {
        let result = [...reminders];

        if (searchQuery) {
            result = result.filter(
                (r) =>
                    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    r.message.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (filterStatus !== "all") {
            result = result.filter((r) => r.status === filterStatus);
        }

        if (sortBy === "newest") {
            result.sort(
                (a, b) =>
                    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
        } else {
            result.sort(
                (a, b) =>
                    new Date(a.deliveryDate).getTime() -
                    new Date(b.deliveryDate).getTime()
            );
        }

        return result;
    }, [reminders, searchQuery, filterStatus, sortBy]);

    const grouped = useMemo(() => {
        const upcoming = filteredReminders.filter((r) => r.status === "scheduled");
        const delivered = filteredReminders.filter((r) => r.status === "delivered");
        const archived = filteredReminders.filter((r) => r.status === "archived");
        return { upcoming, delivered, archived };
    }, [filteredReminders]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-foreground mb-1">Timeline</h1>
                    <p className="text-muted-foreground">
                        Your journey through time, organized beautifully.
                    </p>
                </div>
                <button
                    onClick={() => setCreateModalOpen(true)}
                    className="gradient-btn text-white px-5 py-3 rounded-xl font-medium flex items-center gap-2 text-sm w-fit"
                >
                    <Plus className="w-4 h-4" />
                    New Reminder
                </button>
            </div>

            {/* Search & Filters */}
            <div className="flex flex-col md:flex-row gap-3 mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search reminders..."
                        className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                </div>
                <div className="flex gap-2">
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-4 py-3 bg-card border border-border rounded-xl text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none cursor-pointer [color-scheme:dark]"
                    >
                        <option value="all">All Status</option>
                        <option value="scheduled">Scheduled</option>
                        <option value="delivered">Delivered</option>
                        <option value="archived">Archived</option>
                    </select>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as "newest" | "upcoming")}
                        className="px-4 py-3 bg-card border border-border rounded-xl text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none cursor-pointer [color-scheme:dark]"
                    >
                        <option value="upcoming">Upcoming First</option>
                        <option value="newest">Newest First</option>
                    </select>
                </div>
            </div>

            {/* Timeline */}
            {filteredReminders.length === 0 ? (
                <EmptyState
                    title="No reminders found"
                    description={
                        searchQuery
                            ? "Try adjusting your search or filters."
                            : "Create your first reminder to see it appear here."
                    }
                    action={
                        <button
                            onClick={() => setCreateModalOpen(true)}
                            className="gradient-btn text-white px-5 py-3 rounded-xl font-medium flex items-center gap-2 text-sm"
                        >
                            <Plus className="w-4 h-4" />
                            Create Reminder
                        </button>
                    }
                />
            ) : (
                <div className="space-y-10">
                    {/* Upcoming */}
                    {grouped.upcoming.length > 0 && (
                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-3 h-3 rounded-full bg-primary pulse-glow" />
                                <h2 className="text-lg font-semibold text-foreground">
                                    Upcoming
                                </h2>
                                <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                                    {grouped.upcoming.length}
                                </span>
                            </div>
                            <div className="timeline-line pl-8 space-y-3">
                                {grouped.upcoming.map((reminder, i) => (
                                    <ReminderCard
                                        key={reminder.id}
                                        reminder={reminder}
                                        index={i}
                                    />
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Delivered */}
                    {grouped.delivered.length > 0 && (
                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                <h2 className="text-lg font-semibold text-foreground">
                                    Delivered
                                </h2>
                                <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                                    {grouped.delivered.length}
                                </span>
                            </div>
                            <div className="timeline-line pl-8 space-y-3">
                                {grouped.delivered.map((reminder, i) => (
                                    <ReminderCard
                                        key={reminder.id}
                                        reminder={reminder}
                                        index={i}
                                    />
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Archived */}
                    {grouped.archived.length > 0 && (
                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-3 h-3 rounded-full bg-zinc-500" />
                                <h2 className="text-lg font-semibold text-foreground">
                                    Archived
                                </h2>
                                <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                                    {grouped.archived.length}
                                </span>
                            </div>
                            <div className="timeline-line pl-8 space-y-3">
                                {grouped.archived.map((reminder, i) => (
                                    <ReminderCard
                                        key={reminder.id}
                                        reminder={reminder}
                                        index={i}
                                    />
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            )}

            {/* Motivational Quote */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 text-center"
            >
                <p className="text-sm text-muted-foreground/50 italic">
                    &ldquo;The clarity you felt when you started this journey.&rdquo;
                </p>
            </motion.div>
        </motion.div>
    );
}
