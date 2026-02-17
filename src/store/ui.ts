import { create } from "zustand";

type UIStore = {
    isCreateModalOpen: boolean;
    setCreateModalOpen: (open: boolean) => void;
    selectedReminderId: string | null;
    setSelectedReminderId: (id: string | null) => void;
    sidebarCollapsed: boolean;
    setSidebarCollapsed: (collapsed: boolean) => void;
    theme: "dark" | "light";
    setTheme: (theme: "dark" | "light") => void;
    toggleTheme: () => void;
};

export const useUIStore = create<UIStore>((set) => ({
    isCreateModalOpen: false,
    setCreateModalOpen: (isCreateModalOpen) => set({ isCreateModalOpen }),
    selectedReminderId: null,
    setSelectedReminderId: (selectedReminderId) => set({ selectedReminderId }),
    sidebarCollapsed: false,
    setSidebarCollapsed: (sidebarCollapsed) => set({ sidebarCollapsed }),
    theme: "dark",
    setTheme: (theme) => set({ theme }),
    toggleTheme: () =>
        set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
}));
