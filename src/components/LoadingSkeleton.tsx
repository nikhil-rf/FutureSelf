"use client";

import { cn } from "@/lib/utils";

export function LoadingSkeleton({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "animate-pulse bg-secondary/50 rounded-2xl",
                className
            )}
        />
    );
}

export function CardSkeleton() {
    return (
        <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between">
                <LoadingSkeleton className="h-5 w-48" />
                <LoadingSkeleton className="h-6 w-20 rounded-full" />
            </div>
            <LoadingSkeleton className="h-4 w-full" />
            <LoadingSkeleton className="h-4 w-3/4" />
            <div className="flex items-center gap-2 pt-2">
                <LoadingSkeleton className="h-4 w-28" />
            </div>
        </div>
    );
}

export function StatCardSkeleton() {
    return (
        <div className="bg-card border border-border rounded-2xl p-6">
            <LoadingSkeleton className="h-10 w-10 rounded-xl mb-3" />
            <LoadingSkeleton className="h-8 w-16 mb-2" />
            <LoadingSkeleton className="h-4 w-28" />
        </div>
    );
}
