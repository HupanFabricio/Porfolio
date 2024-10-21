import type {
    NavbarItem,
    ExperienceItem,
    ProyectItem
} from './src/types/interfaces';
import {
    HomeIcon,
    CodeIcon,
    BookIcon,
    UserIcon,
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
    TailwindcssIcon
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
        date: '...Actualmente',
        title: 'Alemshop - Ecommerce fullstack',
        description:
            'Creación de una plataforma de comercio electrónico desde cero, integrando pasarelas de pago, servicios de correo, gestión de inventarios, entre otros. Este proyecto ha sido una experiencia en la que me he sentido muy cómodo y satisfecho con el resultado final.',
        link: 'https://alemshop.com.ar/'
    },
    {
        date: 'April 2022',
        title: 'Reacondicionamiento landing page - Ecommerce',
        description:
            'Marketing básico enfocado en la publicidad y venta de materiales de construcción. Colaboré activamente en el desarrollo del diseño, aportando ideas creativas y estratégicas para mejorar la visibilidad y efectividad de las campañas publicitarias.',
        link: 'https://corralonruzak.com.ar/'
    },
    {
        date: 'Feb 2021',
        title: 'Landing page - Calderas',
        description:
            'Desarrollado con el objetivo de publicitar los servicios y facilitar la contratación de la empresa. Mi trabajo en este proyecto incluyó la optimización de imágenes y la colaboración en la implementación del diseño responsive.',
        link: 'https://calderasboiko.com.ar/'
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

export const proyectsData: ProyectItem[] = [
    {
        title: 'Calculadora',
        description: 'Proyecto basico',
        skillsIcons: [
            {
                tecnology: 'Tailwindcss',
                icon: TailwindcssIcon
            },
            {
                tecnology: 'code',
                icon: CodeIcon
            }
        ],
        src: '/p1.webp',
        url: '/ss',
        background: '#D95BAF'
    },
    {
        title: 'Calculadora',
        description: 'Proyecto 2',
        skillsIcons: [
            {
                tecnology: 'Tailwindcss',
                icon: TailwindcssIcon
            },
            {
                tecnology: 'React',
                icon: HomeIcon
            }
        ],
        src: '/p2.webp',
        url: '/ss',
        background: '#755cde'
    }
];
