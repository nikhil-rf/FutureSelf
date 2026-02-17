import { create } from "zustand";
import { type MockReminder } from "@/lib/mock-data";

type ReminderStore = {
    reminders: MockReminder[];
    setReminders: (reminders: MockReminder[]) => void;
    addReminder: (reminder: MockReminder) => void;
    updateReminder: (id: string, updates: Partial<MockReminder>) => void;
    removeReminder: (id: string) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filterStatus: string;
    setFilterStatus: (status: string) => void;
    sortBy: "newest" | "upcoming";
    setSortBy: (sort: "newest" | "upcoming") => void;
};

export const useReminderStore = create<ReminderStore>((set) => ({
    reminders: [],
    setReminders: (reminders) => set({ reminders }),
    addReminder: (reminder) =>
        set((state) => ({ reminders: [reminder, ...state.reminders] })),
    updateReminder: (id, updates) =>
        set((state) => ({
            reminders: state.reminders.map((r) =>
                r.id === id ? { ...r, ...updates } : r
            ),
        })),
    removeReminder: (id) =>
        set((state) => ({
            reminders: state.reminders.filter((r) => r.id !== id),
        })),
    searchQuery: "",
    setSearchQuery: (searchQuery) => set({ searchQuery }),
    filterStatus: "all",
    setFilterStatus: (filterStatus) => set({ filterStatus }),
    sortBy: "upcoming",
    setSortBy: (sortBy) => set({ sortBy }),
}));
