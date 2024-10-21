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

export interface ProyectItem {
    title: string;
    description: string;
    src: string;
    url: string;
    skillsIcons: Array<{
        tecnology: string;
        icon: React.ComponentType<{ class?: string }>;
    }>;
    background: string;
}
