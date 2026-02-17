"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight, MessageSquare, Repeat, Lightbulb, Target } from "lucide-react";

const focusAreas = [
    { id: "follow-ups", label: "Follow-ups", desc: "Replies and connections", icon: MessageSquare, emoji: "📋" },
    { id: "habits", label: "Habits", desc: "Consistency and routines", icon: Repeat, emoji: "🔄" },
    { id: "ideas", label: "Ideas", desc: "Notes and brainwaves", icon: Lightbulb, emoji: "💡" },
    { id: "goals", label: "Goals", desc: "Long-term milestones", icon: Target, emoji: "🎯" },
];

export default function OnboardingPage() {
    const router = useRouter();
    const [selected, setSelected] = useState<string[]>([]);

    const toggleArea = (id: string) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-violet-start/5 to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-start/10 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg relative z-10"
            >
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="w-10 h-10 rounded-xl gradient-btn flex items-center justify-center">
                            <span className="text-white font-bold">F</span>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-foreground mb-3">
                        What do you want to remember?
                    </h1>
                    <p className="text-muted-foreground">
                        Choose the focus areas for your FutureSelf reminders.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-10">
                    {focusAreas.map((area, i) => (
                        <motion.button
                            key={area.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => toggleArea(area.id)}
                            className={`p-5 rounded-2xl border text-left transition-all ${selected.includes(area.id)
                                    ? "bg-primary/10 border-primary/40 shadow-lg shadow-primary/10"
                                    : "bg-card border-border hover:border-primary/20"
                                }`}
                        >
                            <span className="text-2xl mb-3 block">{area.emoji}</span>
                            <h3 className="text-base font-semibold text-foreground mb-1">
                                {area.label}
                            </h3>
                            <p className="text-xs text-muted-foreground">{area.desc}</p>
                        </motion.button>
                    ))}
                </div>

                <button
                    onClick={() => router.push("/dashboard")}
                    disabled={selected.length === 0}
                    className="w-full gradient-btn text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    Continue
                    <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-center text-xs text-muted-foreground mt-6">
                    FutureSelf • Premium Intelligence
                </p>
            </motion.div>
        </div>
    );
}
