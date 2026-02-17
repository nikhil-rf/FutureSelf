export type MockReminder = {
    id: string;
    title: string;
    message: string;
    deliveryDate: string;
    status: "scheduled" | "delivered" | "archived";
    category: string;
    createdAt: string;
};

export type MockUser = {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
    plan: string;
};

export const mockUser: MockUser = {
    id: "user-1",
    name: "Alex Morgan",
    email: "alex@futureself.io",
    avatarUrl: "",
    plan: "Premium",
};

export const mockReminders: MockReminder[] = [
    {
        id: "rem-1",
        title: "Review Q3 Personal Goals & Mental Health Check",
        message:
            "Hey Alex, it's been 3 months since you set those ambitious goals. Remember to be kind to yourself if you haven't hit them all. Progress > Perfection.",
        deliveryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        status: "scheduled",
        category: "goals",
        createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: "rem-2",
        title: 'Startup Concept: "Plantify"',
        message:
            "Just had this thought while walking the dog. An app that identifies plants and automatically schedules watering reminders based on local weather.",
        deliveryDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
        status: "scheduled",
        category: "ideas",
        createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: "rem-3",
        title: "Email Sarah about the trip",
        message:
            "Don't forget to send the itinerary to Sarah for the Japan trip. Booking window opens next week.",
        deliveryDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
        status: "scheduled",
        category: "follow-ups",
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: "rem-4",
        title: "Gym Habit Check-in",
        message:
            "Checking in on your promise. Are you still hitting the gym 3x a week?",
        deliveryDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
        status: "scheduled",
        category: "habits",
        createdAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: "rem-5",
        title: "Congratulations on the Promotion!",
        message:
            "If you're reading this, you did it! Take a moment to celebrate — you worked hard for this.",
        deliveryDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        status: "delivered",
        category: "goals",
        createdAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: "rem-6",
        title: "Reminder: Drink more water",
        message:
            "Future you will thank present you. Stay hydrated, stay sharp.",
        deliveryDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        status: "delivered",
        category: "habits",
        createdAt: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: "rem-7",
        title: "Project Delta Launch",
        message:
            "Remember the excitement you felt when this idea first clicked. Channel that energy into the launch.",
        deliveryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        status: "scheduled",
        category: "goals",
        createdAt: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: "rem-8",
        title: "Kyoto Reservation",
        message:
            "Remember to verify the passport renewal application before booking the flights to Japan. Trust your gut on the hotel choice.",
        deliveryDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
        status: "archived",
        category: "follow-ups",
        createdAt: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: "rem-9",
        title: "Read 'Atomic Habits' summary",
        message:
            "You bookmarked this 3 months ago. Time to finally read through your highlights and apply the 1% rule.",
        deliveryDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
        status: "delivered",
        category: "habits",
        createdAt: new Date(Date.now() - 100 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: "rem-10",
        title: "Birthday gift for Mom",
        message:
            "She mentioned wanting a nice cookbook last time you called. Consider the Italian one she pointed out.",
        deliveryDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
        status: "scheduled",
        category: "follow-ups",
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: "rem-11",
        title: "Write a letter to 5-years-from-now self",
        message:
            "The clarity you felt when you started this journey. This is your legacy, your vision. Are you living the life you designed?",
        deliveryDate: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
        status: "delivered",
        category: "goals",
        createdAt: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: "rem-12",
        title: "Weekly meal prep Sunday",
        message:
            "Prep your meals for the week. Remember: chicken, rice, veggies. Keep it simple, keep it consistent.",
        deliveryDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        status: "delivered",
        category: "habits",
        createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    },
];

export const mockAnalytics = {
    totalReminders: 142,
    deliveredCount: 88,
    completedPercentage: 88,
    pendingCount: 42,
    streakDays: 12,
    followUps: 24,
    habitsTracked: 12,
    monthlyData: [
        { month: "Jan", created: 8, delivered: 5 },
        { month: "Feb", created: 12, delivered: 9 },
        { month: "Mar", created: 10, delivered: 8 },
        { month: "Apr", created: 15, delivered: 12 },
        { month: "May", created: 18, delivered: 14 },
        { month: "Jun", created: 14, delivered: 11 },
        { month: "Jul", created: 20, delivered: 16 },
        { month: "Aug", created: 16, delivered: 13 },
        { month: "Sep", created: 12, delivered: 10 },
        { month: "Oct", created: 22, delivered: 18 },
        { month: "Nov", created: 19, delivered: 15 },
        { month: "Dec", created: 8, delivered: 5 },
    ],
    statusDistribution: [
        { name: "Delivered", value: 88, color: "#7c3aed" },
        { name: "Scheduled", value: 42, color: "#a78bfa" },
        { name: "Archived", value: 12, color: "#4b5563" },
    ],
};
