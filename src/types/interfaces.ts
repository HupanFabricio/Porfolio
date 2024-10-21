export interface NavbarItem {
    to: string;
    title: string;
    icon: React.ComponentType<{ class?: string }>;
}

export interface ExperienceItem {
    date: string;
    title: string;
    description: string;
    link?: string;
}
