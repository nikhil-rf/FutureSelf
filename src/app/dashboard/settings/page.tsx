"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Globe,
    Moon,
    Sun,
    Bell,
    Mail,
    Sparkles,
    ArrowRight,
    AlertTriangle,
    User,
    Lock,
} from "lucide-react";
import { useUIStore } from "@/store/ui";
import { toast } from "sonner";

export default function SettingsPage() {
    const { theme, toggleTheme } = useUIStore();
    const [name, setName] = useState("Alex Morgan");
    const [email, setEmail] = useState("alex@futureself.io");
    const [timezone, setTimezone] = useState("PST");
    const [notifications, setNotifications] = useState({
        delivery: true,
        weekly: true,
        updates: false,
    });
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const handleSave = () => {
        toast.success("Settings saved successfully");
    };

    const handleDeleteAccount = () => {
        toast.success("Account deleted — redirecting...");
        setShowDeleteConfirm(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl"
        >
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-1">
                    Account Settings
                </h1>
                <p className="text-muted-foreground">
                    Customize your journey and fine-tune your future connections.
                </p>
            </div>

            <div className="space-y-8">
                {/* General Preferences */}
                <section className="bg-card border border-border rounded-2xl p-6">
                    <h2 className="text-lg font-semibold text-foreground mb-1">
                        General Preferences
                    </h2>
                    <p className="text-sm text-muted-foreground mb-6">
                        Delivery schedules sync with your local clock.
                    </p>

                    <div className="space-y-5">
                        {/* Timezone */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                                    <Globe className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-foreground">Timezone</p>
                                    <p className="text-xs text-muted-foreground">
                                        Your local time for delivery
                                    </p>
                                </div>
                            </div>
                            <select
                                value={timezone}
                                onChange={(e) => setTimezone(e.target.value)}
                                className="px-3 py-2 bg-secondary border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none cursor-pointer [color-scheme:dark]"
                            >
                                <option value="PST">Pacific (PST)</option>
                                <option value="EST">Eastern (EST)</option>
                                <option value="CST">Central (CST)</option>
                                <option value="MST">Mountain (MST)</option>
                                <option value="GMT">GMT</option>
                                <option value="IST">India (IST)</option>
                            </select>
                        </div>

                        {/* Theme */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                                    {theme === "dark" ? (
                                        <Moon className="w-5 h-5 text-primary" />
                                    ) : (
                                        <Sun className="w-5 h-5 text-primary" />
                                    )}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-foreground">
                                        Appearance
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        Set the aesthetic tone for your reflection space.
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    toggleTheme();
                                    toast.success(`Switched to ${theme === "dark" ? "light" : "dark"} mode`);
                                }}
                                className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm text-foreground hover:bg-surface-hover transition-colors flex items-center gap-2"
                            >
                                {theme === "dark" ? (
                                    <>
                                        <Sun className="w-4 h-4" /> Light
                                    </>
                                ) : (
                                    <>
                                        <Moon className="w-4 h-4" /> Dark
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </section>

                {/* Notification Strategy */}
                <section className="bg-card border border-border rounded-2xl p-6">
                    <h2 className="text-lg font-semibold text-foreground mb-1">
                        Notification Strategy
                    </h2>
                    <p className="text-sm text-muted-foreground mb-6">
                        Control how and when FutureSelf reaches you.
                    </p>

                    <div className="space-y-4">
                        {[
                            {
                                key: "delivery" as const,
                                icon: Bell,
                                title: "Delivery Alerts",
                                desc: "Immediate notification when a message from the past arrives.",
                            },
                            {
                                key: "weekly" as const,
                                icon: Mail,
                                title: "Weekly Reflections",
                                desc: "Weekly gentle reminders to pause and document your present self.",
                            },
                            {
                                key: "updates" as const,
                                icon: Sparkles,
                                title: "Product Updates",
                                desc: "Occasional updates on new features and platform improvements.",
                            },
                        ].map((item) => (
                            <div
                                key={item.key}
                                className="flex items-center justify-between py-2"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                                        <item.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-foreground">
                                            {item.title}
                                        </p>
                                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() =>
                                        setNotifications((prev) => ({
                                            ...prev,
                                            [item.key]: !prev[item.key],
                                        }))
                                    }
                                    className={`relative w-11 h-6 rounded-full transition-colors ${notifications[item.key] ? "bg-primary" : "bg-secondary"
                                        }`}
                                >
                                    <motion.div
                                        animate={{
                                            x: notifications[item.key] ? 20 : 2,
                                        }}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        className="absolute top-1 w-4 h-4 bg-white rounded-full"
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Personal Identity */}
                <section className="bg-card border border-border rounded-2xl p-6">
                    <h2 className="text-lg font-semibold text-foreground mb-6">
                        Personal Identity
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                <User className="w-4 h-4 inline mr-1.5" />
                                Display Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                <Mail className="w-4 h-4 inline mr-1.5" />
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            />
                        </div>

                        <button className="flex items-center gap-2 text-sm text-primary hover:text-violet-end transition-colors font-medium mt-2">
                            <Lock className="w-4 h-4" />
                            Update Security Password
                            <ArrowRight className="w-4 h-4" />
                        </button>

                        <div className="pt-2">
                            <button
                                onClick={handleSave}
                                className="gradient-btn text-white px-6 py-3 rounded-xl font-medium text-sm"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </section>

                {/* Danger Zone */}
                <section className="bg-card border border-destructive/30 rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <AlertTriangle className="w-5 h-5 text-destructive" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-1">
                                Deactivate Account
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                This action is irreversible. All letters to your future self will
                                be permanently deleted from our encrypted vault.
                            </p>
                            {showDeleteConfirm ? (
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={handleDeleteAccount}
                                        className="px-5 py-2.5 bg-destructive text-white rounded-xl text-sm font-medium hover:bg-red-600 transition-colors"
                                    >
                                        Yes, delete everything
                                    </button>
                                    <button
                                        onClick={() => setShowDeleteConfirm(false)}
                                        className="px-5 py-2.5 bg-secondary text-foreground rounded-xl text-sm font-medium hover:bg-surface-hover transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setShowDeleteConfirm(true)}
                                    className="px-5 py-2.5 bg-destructive/10 text-destructive rounded-xl text-sm font-medium hover:bg-destructive/20 transition-colors"
                                >
                                    Deactivate Account
                                </button>
                            )}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <p className="text-center text-xs text-muted-foreground pb-8">
                    FutureSelf © 2024 · Mindful Tech Group
                </p>
            </div>
        </motion.div>
    );
}
