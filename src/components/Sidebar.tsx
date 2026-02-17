"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
    LayoutDashboard,
    Clock,
    BarChart3,
    Settings,
    Plus,
    LogOut,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/store/ui";

const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/timeline", label: "Timeline", icon: Clock },
    { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();
    const { sidebarCollapsed, setSidebarCollapsed, setCreateModalOpen } =
        useUIStore();

    return (
        <motion.aside
            initial={false}
            animate={{ width: sidebarCollapsed ? 72 : 256 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed left-0 top-0 h-screen bg-card border-r border-border z-40 flex flex-col"
        >
            {/* Logo */}
            <div className="p-4 flex items-center gap-3 border-b border-border h-16">
                <div className="w-8 h-8 rounded-lg gradient-btn flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">F</span>
                </div>
                {!sidebarCollapsed && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="font-semibold text-foreground whitespace-nowrap"
                    >
                        FutureSelf
                    </motion.span>
                )}
            </div>

            {/* Create Button */}
            <div className="p-3">
                <button
                    onClick={() => setCreateModalOpen(true)}
                    className={cn(
                        "w-full gradient-btn text-white rounded-xl flex items-center justify-center gap-2 font-medium transition-all",
                        sidebarCollapsed ? "p-3" : "px-4 py-3"
                    )}
                >
                    <Plus className="w-5 h-5 flex-shrink-0" />
                    {!sidebarCollapsed && <span>New Reminder</span>}
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-2 space-y-1">
                {navItems.map((item) => {
                    const isActive =
                        pathname === item.href ||
                        (item.href !== "/dashboard" && pathname.startsWith(item.href));
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group",
                                isActive
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                            )}
                        >
                            <item.icon
                                className={cn(
                                    "w-5 h-5 flex-shrink-0 transition-colors",
                                    isActive ? "text-primary" : "group-hover:text-foreground"
                                )}
                            />
                            {!sidebarCollapsed && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-sm font-medium whitespace-nowrap"
                                >
                                    {item.label}
                                </motion.span>
                            )}
                            {isActive && (
                                <motion.div
                                    layoutId="sidebar-indicator"
                                    className="absolute left-0 w-1 h-8 bg-primary rounded-r-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* User Section */}
            <div className="p-3 border-t border-border">
                <div
                    className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-xl",
                        sidebarCollapsed ? "justify-center" : ""
                    )}
                >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-start to-violet-end flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-semibold">AM</span>
                    </div>
                    {!sidebarCollapsed && (
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">
                                Alex Morgan
                            </p>
                            <p className="text-xs text-muted-foreground">Premium</p>
                        </div>
                    )}
                </div>
                <button
                    className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-all w-full mt-1",
                        sidebarCollapsed ? "justify-center" : ""
                    )}
                >
                    <LogOut className="w-4 h-4 flex-shrink-0" />
                    {!sidebarCollapsed && (
                        <span className="text-sm">Sign out</span>
                    )}
                </button>
            </div>

            {/* Collapse Toggle */}
            <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="absolute -right-3 top-20 w-6 h-6 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors z-50"
            >
                {sidebarCollapsed ? (
                    <ChevronRight className="w-3 h-3" />
                ) : (
                    <ChevronLeft className="w-3 h-3" />
                )}
            </button>
        </motion.aside>
    );
}
