import type { NavbarItem, ExperienceItem } from './src/types/interfaces';
import {
    HomeIcon,
    CodeIcon,
    BookIcon,
    UserIcon,
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon
} from './src/icons';

export const itemsNavbar: NavbarItem[] = [
    {
        to: '#top',
        title: 'home',
        icon: HomeIcon
    },
    {
        to: '#proyectos',
        title: 'proyectos',
        icon: CodeIcon
    },
    {
        to: '#sobre-mi',
        title: 'sobre-mi',
        icon: UserIcon
    },
    {
        to: '#experiencia',
        title: 'experiencia',
        icon: BookIcon
    }
];

export const experienceData: ExperienceItem[] = [
    {
        date: 'April 2022',
        title: 'Ecommerce UI code in Tailwind CSS',
        description:
            'Get started with donzens of web componentes and interactive elements built on top of Tailwind CSS.',
        link: 'https://alemshop.com.ar/'
    },
    {
        date: 'April 2022',
        title: 'Ecommerce UI code in Tailwind CSS',
        description:
            'Get started with donzens of web componentes and interactive elements built on top of Tailwind CSS.'
    },
    {
        date: 'April 2022',
        title: 'Ecommerce UI code in Tailwind CSS',
        description:
            'Get started with donzens of web componentes and interactive elements built on top of Tailwind CSS.'
    }
];

export const networksData: NavbarItem[] = [
    {
        to: 'https://github.com/HupanFabricio',
        title: 'Github',
        icon: GithubIcon
    },
    {
        to: 'https://www.instagram.com/c0d3fabri/',
        title: 'Instagram',
        icon: InstagramIcon
    },
    {
        to: 'https://www.linkedin.com/in/hupanfabricio/',
        title: 'Linkedin',
        icon: LinkedinIcon
    },
    {
        to: 'mailto:c0d3fabri@gmail.com?subject=Contacto desde portfolio&body=Hola,%20me%20gustaría%20saber%20más%20sobre...',
        title: 'Correo',
        icon: MailIcon
    }
    //Linkedin
    //Correo
];
