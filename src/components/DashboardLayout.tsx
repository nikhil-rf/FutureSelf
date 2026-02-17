"use client";

import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import CreateReminderModal from "./CreateReminderModal";
import ReminderDetailOverlay from "./ReminderDetailOverlay";
import { useUIStore } from "@/store/ui";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { sidebarCollapsed } = useUIStore();

    return (
        <div className="min-h-screen bg-background">
            <Sidebar />
            <motion.main
                animate={{
                    marginLeft: sidebarCollapsed ? 72 : 256,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="min-h-screen"
            >
                <div className="p-6 lg:p-8 max-w-7xl mx-auto">{children}</div>
            </motion.main>
            <CreateReminderModal />
            <ReminderDetailOverlay />
        </div>
    );
}
