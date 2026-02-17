"use client";

import { motion } from "framer-motion";
import { Inbox } from "lucide-react";

type EmptyStateProps = {
    title?: string;
    description?: string;
    action?: React.ReactNode;
};

export default function EmptyState({
    title = "Nothing here yet",
    description = "Create your first reminder to get started.",
    action,
}: EmptyStateProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-16 text-center"
        >
            <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center mb-4">
                <Inbox className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground max-w-sm mb-6">
                {description}
            </p>
            {action}
        </motion.div>
    );
}
