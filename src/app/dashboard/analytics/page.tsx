"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
    AreaChart,
} from "recharts";
import { Send, CheckCircle, Repeat, MessageSquare } from "lucide-react";
import StatCard from "@/components/StatCard";
import { useReminderStore } from "@/store/reminders";
import { mockReminders, mockAnalytics } from "@/lib/mock-data";

export default function AnalyticsPage() {
    const { reminders, setReminders } = useReminderStore();

    useEffect(() => {
        if (reminders.length === 0) {
            setReminders(mockReminders);
        }
    }, [reminders.length, setReminders]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-1">
                    Growth Overview
                </h1>
                <p className="text-muted-foreground">
                    Quantifying the connection between your present actions and future
                    aspirations.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <StatCard
                    label="Reminders Sent"
                    value={mockAnalytics.totalReminders}
                    icon={Send}
                    gradient
                />
                <StatCard
                    label="Completed"
                    value={`${mockAnalytics.completedPercentage}%`}
                    icon={CheckCircle}
                    trend="+5%"
                />
                <StatCard
                    label="Habits Sustained"
                    value={mockAnalytics.habitsTracked}
                    icon={Repeat}
                />
                <StatCard
                    label="Follow-ups"
                    value={mockAnalytics.followUps}
                    icon={MessageSquare}
                />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Line Chart */}
                <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-lg font-semibold text-foreground">
                                Consistency Trends
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Year-to-date data insights
                            </p>
                        </div>
                        <span className="text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded-full">
                            2024
                        </span>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={mockAnalytics.monthlyData}>
                            <defs>
                                <linearGradient id="colorCreated" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorDelivered" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                            <XAxis
                                dataKey="month"
                                stroke="#71717a"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                            />
                            <YAxis
                                stroke="#71717a"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#1e1e2e",
                                    border: "1px solid #27272a",
                                    borderRadius: "12px",
                                    color: "#fafafa",
                                    fontSize: "12px",
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="created"
                                stroke="#7c3aed"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorCreated)"
                                name="Created"
                            />
                            <Area
                                type="monotone"
                                dataKey="delivered"
                                stroke="#a78bfa"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorDelivered)"
                                name="Delivered"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie Chart */}
                <div className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                        Status Distribution
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                        Breakdown by current status
                    </p>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={mockAnalytics.statusDistribution}
                                cx="50%"
                                cy="50%"
                                innerRadius={55}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                                animationBegin={200}
                                animationDuration={800}
                            >
                                {mockAnalytics.statusDistribution.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#1e1e2e",
                                    border: "1px solid #27272a",
                                    borderRadius: "12px",
                                    color: "#fafafa",
                                    fontSize: "12px",
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="space-y-2 mt-4">
                        {mockAnalytics.statusDistribution.map((item) => (
                            <div key={item.name} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: item.color }}
                                    />
                                    <span className="text-sm text-muted-foreground">
                                        {item.name}
                                    </span>
                                </div>
                                <span className="text-sm font-medium text-foreground">
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quote */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 bg-gradient-to-br from-violet-start/10 to-violet-end/5 rounded-2xl p-8 border border-primary/10 text-center"
            >
                <p className="text-lg text-foreground/80 italic">
                    &ldquo;The future depends on what you do today.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-2">— Mahatma Gandhi</p>
            </motion.div>
        </motion.div>
    );
}
