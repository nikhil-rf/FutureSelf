"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    Calendar,
    Clock,
    FileText,
    Archive,
    Trash2,
} from "lucide-react";
import { useUIStore } from "@/store/ui";
import { useReminderStore } from "@/store/reminders";
import { formatDate, formatTime } from "@/lib/utils";
import { toast } from "sonner";

export default function ReminderDetailOverlay() {
    const { selectedReminderId, setSelectedReminderId } = useUIStore();
    const { reminders, updateReminder, removeReminder } = useReminderStore();

    const reminder = reminders.find((r) => r.id === selectedReminderId);

    const handleArchive = () => {
        if (!reminder) return;
        updateReminder(reminder.id, { status: "archived" });
        toast.success("Reminder archived");
        setSelectedReminderId(null);
    };

    const handleDelete = () => {
        if (!reminder) return;
        removeReminder(reminder.id);
        toast.success("Reminder deleted");
        setSelectedReminderId(null);
    };

    return (
        <AnimatePresence>
            {selectedReminderId && reminder && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedReminderId(null)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed right-0 top-0 h-screen w-full max-w-lg glass border-l border-border z-50 overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="sticky top-0 glass p-6 border-b border-border/50 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-foreground">
                                Reminder Detail
                            </h2>
                            <button
                                onClick={() => setSelectedReminderId(null)}
                                className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-6">
                            {/* Title & Status */}
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span
                                        className={`text-xs px-2.5 py-1 rounded-full font-medium capitalize ${reminder.status === "scheduled"
                                                ? "bg-violet-500/10 text-violet-400"
                                                : reminder.status === "delivered"
                                                    ? "bg-green-500/10 text-green-400"
                                                    : "bg-zinc-500/10 text-zinc-400"
                                            }`}
                                    >
                                        {reminder.status}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-foreground">
                                    {reminder.title}
                                </h3>
                            </div>

                            {/* Message */}
                            <div className="bg-secondary/30 rounded-2xl p-5 border border-border/50">
                                <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                                    {reminder.message}
                                </p>
                            </div>

                            {/* Dates */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-card rounded-xl p-4 border border-border">
                                    <div className="flex items-center gap-2 mb-2">
                                        <FileText className="w-4 h-4 text-primary" />
                                        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                                            Inscribed
                                        </span>
                                    </div>
                                    <p className="text-sm font-semibold text-foreground">
                                        {formatDate(reminder.createdAt)}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        {formatTime(reminder.createdAt)}
                                    </p>
                                </div>
                                <div className="bg-card rounded-xl p-4 border border-border">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Calendar className="w-4 h-4 text-primary" />
                                        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                                            Estimated Arrival
                                        </span>
                                    </div>
                                    <p className="text-sm font-semibold text-foreground">
                                        {formatDate(reminder.deliveryDate)}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        {formatTime(reminder.deliveryDate)}
                                    </p>
                                </div>
                            </div>

                            {/* Mood / Quote */}
                            <div className="bg-gradient-to-br from-violet-start/10 to-violet-end/5 rounded-2xl p-5 border border-primary/10">
                                <p className="text-sm text-muted-foreground italic leading-relaxed">
                                    &ldquo;The future depends on what you do today.&rdquo;
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3 pt-4 border-t border-border">
                                {reminder.status !== "archived" && (
                                    <button
                                        onClick={handleArchive}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-secondary rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <Archive className="w-4 h-4" />
                                        Archive
                                    </button>
                                )}
                                <button
                                    onClick={handleDelete}
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-destructive/10 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/20 transition-colors"
                                >
                                    <Trash2 className="w-4 h-4" />
                                    Delete
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
