"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Lock, Sparkles } from "lucide-react";
import { useUIStore } from "@/store/ui";
import { useReminderStore } from "@/store/reminders";
import { toast } from "sonner";

export default function CreateReminderModal() {
    const { isCreateModalOpen, setCreateModalOpen } = useUIStore();
    const { addReminder } = useReminderStore();
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [deliveryDate, setDeliveryDate] = useState("");
    const [category, setCategory] = useState("general");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const categories = [
        { value: "goals", label: "Goals", emoji: "🎯" },
        { value: "habits", label: "Habits", emoji: "🔄" },
        { value: "ideas", label: "Ideas", emoji: "💡" },
        { value: "follow-ups", label: "Follow-ups", emoji: "📋" },
        { value: "general", label: "General", emoji: "📌" },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !message || !deliveryDate) {
            toast.error("Please fill in all required fields");
            return;
        }

        setIsSubmitting(true);

        // Simulate server action delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        const newReminder = {
            id: `rem-${Date.now()}`,
            title,
            message,
            deliveryDate: new Date(deliveryDate).toISOString(),
            status: "scheduled" as const,
            category,
            createdAt: new Date().toISOString(),
        };

        addReminder(newReminder);
        toast.success("Reminder created!", {
            description: `"${title}" will be delivered on ${new Date(deliveryDate).toLocaleDateString()}`,
        });

        setTitle("");
        setMessage("");
        setDeliveryDate("");
        setCategory("general");
        setIsSubmitting(false);
        setCreateModalOpen(false);
    };

    return (
        <AnimatePresence>
            {isCreateModalOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setCreateModalOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="w-full max-w-lg glass rounded-3xl overflow-hidden shadow-2xl">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-border/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl gradient-btn flex items-center justify-center">
                                        <Sparkles className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-semibold text-foreground">
                                            New Future Reminder
                                        </h2>
                                        <p className="text-xs text-muted-foreground">
                                            Write something meaningful for your future self
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setCreateModalOpen(false)}
                                    className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-6 space-y-5">
                                {/* Title */}
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder="e.g., Check in on New Year's resolutions"
                                        className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Message to Future Self
                                    </label>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="What do you want to tell your future self?"
                                        rows={4}
                                        className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                                    />
                                </div>

                                {/* Category */}
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Category
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat.value}
                                                type="button"
                                                onClick={() => setCategory(cat.value)}
                                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${category === cat.value
                                                        ? "bg-primary/20 text-primary border border-primary/30"
                                                        : "bg-secondary text-muted-foreground border border-transparent hover:border-border"
                                                    }`}
                                            >
                                                {cat.emoji} {cat.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Delivery Date */}
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        <Calendar className="w-4 h-4 inline mr-1.5" />
                                        Delivery Date
                                    </label>
                                    <input
                                        type="datetime-local"
                                        value={deliveryDate}
                                        onChange={(e) => setDeliveryDate(e.target.value)}
                                        min={new Date().toISOString().slice(0, 16)}
                                        className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all [color-scheme:dark]"
                                    />
                                </div>

                                {/* Encryption note */}
                                <div className="flex items-center gap-2 text-xs text-muted-foreground bg-secondary/30 p-3 rounded-lg">
                                    <Lock className="w-3.5 h-3.5 text-primary" />
                                    <span>
                                        Securely encrypted until{" "}
                                        {deliveryDate
                                            ? new Date(deliveryDate).toLocaleDateString("en-US", {
                                                month: "long",
                                                day: "numeric",
                                                year: "numeric",
                                            })
                                            : "your chosen date"}
                                    </span>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full gradient-btn text-white py-3.5 rounded-xl font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                        />
                                    ) : (
                                        <>
                                            <Sparkles className="w-4 h-4" />
                                            Send to the Future
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
