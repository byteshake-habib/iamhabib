import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'bn' | 'es' | 'pt' | 'ru' | 'ja';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    en: {
        // Navigation
        about: 'About',
        expertise: 'Expertise',
        skills: 'Skills',
        portfolio: 'Portfolio',
        testimonials: 'Testimonials',
        contact: 'Contact',

        // Hero Section
        heroTagline:
            '🚀 WordPress Expert | Plugin & Theme Developer | Problem Solver',
        hireMe: 'Hire Me',
        downloadCV: 'Download CV',

        // About Section
        aboutTitle: 'About Me',
        aboutDescription:
            'Passionate WordPress developer with 5+ years of experience creating powerful plugins, custom themes, and innovative solutions. I specialize in turning complex problems into elegant, user-friendly applications.',
        yearsExp: '5+ Years Experience',
        pluginContributor: 'Plugin Contributor',
        projectsCompleted: '100+ Projects Completed',

        // Expertise Section
        expertiseTitle: 'My Expertise',
        pluginDev: 'Plugin Development',
        pluginDevDesc:
            'Custom WordPress plugins with REST API integration and admin panels',
        themeDev: 'Theme Development',
        themeDevDesc:
            'Responsive, SEO-optimized themes with modern design principles',
        gutenberg: 'Gutenberg Blocks',
        gutenbergDesc:
            'Custom block development for enhanced content editing experience',

        // Skills Section
        skillsTitle: 'Technical Skills',

        // Portfolio Section
        portfolioTitle: 'Featured Projects',
        shippingManager: 'Shipping Manager',
        shippingDesc: 'Advanced shipping management plugin for WooCommerce',
        adminSafety: 'Admin Safety Guard',
        adminDesc: 'Security plugin protecting WordPress admin areas',
        easycommerce: 'Easycommerce Contributor',
        easycommerceDesc: 'Contributing to popular eCommerce solutions',

        // Testimonials Section
        testimonialsTitle: 'What Clients Say',

        // Contact Section
        contactTitle: 'Get In Touch',
        contactSubtitle:
            "Ready to start your next project? Let's work together!",
        name: 'Name',
        email: 'Email',
        message: 'Message',
        sendMessage: 'Send Message',

        // Footer
        footerText: '© 2025 Habib. All rights reserved.',
    },
    bn: {
        // Navigation
        about: 'আমার সম্পর্কে',
        expertise: 'দক্ষতা',
        skills: 'দক্ষতা',
        portfolio: 'পোর্টফোলিও',
        testimonials: 'প্রশংসাপত্র',
        contact: 'যোগাযোগ',

        // Hero Section
        heroTagline:
            '🚀 ওয়ার্ডপ্রেস বিশেষজ্ঞ | প্লাগিন ও থিম ডেভেলপার | সমস্যা সমাধানকারী',
        hireMe: 'আমাকে নিয়োগ দিন',
        downloadCV: 'সিভি ডাউনলোড',

        // About Section
        aboutTitle: 'আমার সম্পর্কে',
        aboutDescription:
            '৫+ বছরের অভিজ্ঞতা সহ একজন আবেগী ওয়ার্ডপ্রেস ডেভেলপার। আমি শক্তিশালী প্লাগিন, কাস্টম থিম এবং উদ্ভাবনী সমাধান তৈরি করি।',
        yearsExp: '৫+ বছরের অভিজ্ঞতা',
        pluginContributor: 'প্লাগিন অবদানকারী',
        projectsCompleted: '১০০+ প্রকল্প সম্পন্ন',

        expertiseTitle: 'আমার দক্ষতা',
        pluginDev: 'প্লাগিন ডেভেলপমেন্ট',
        pluginDevDesc:
            'REST API ইন্টিগ্রেশন এবং অ্যাডমিন প্যানেল সহ কাস্টম ওয়ার্ডপ্রেস প্লাগিন',

        portfolioTitle: 'বিশেষ প্রকল্প',
        contactTitle: 'যোগাযোগ করুন',
        footerText: '© ২০২৫ হাবিব। সকল অধিকার সংরক্ষিত।',
    },
    es: {
        about: 'Acerca de',
        expertise: 'Experiencia',
        skills: 'Habilidades',
        portfolio: 'Portafolio',
        testimonials: 'Testimonios',
        contact: 'Contacto',
        heroTagline:
            '🚀 Experto en WordPress | Desarrollador de Plugins y Temas | Solucionador de Problemas',
        hireMe: 'Contrátame',
        downloadCV: 'Descargar CV',
        aboutTitle: 'Acerca de Mí',
        portfolioTitle: 'Proyectos Destacados',
        contactTitle: 'Ponte en Contacto',
        footerText: '© 2025 Habib. Todos los derechos reservados.',
    },
    pt: {
        about: 'Sobre',
        expertise: 'Experiência',
        skills: 'Habilidades',
        portfolio: 'Portfólio',
        testimonials: 'Depoimentos',
        contact: 'Contato',
        heroTagline:
            '🚀 Especialista WordPress | Desenvolvedor de Plugins e Temas | Solucionador de Problemas',
        hireMe: 'Me Contrate',
        downloadCV: 'Baixar CV',
        aboutTitle: 'Sobre Mim',
        portfolioTitle: 'Projetos em Destaque',
        contactTitle: 'Entre em Contato',
        footerText: '© 2025 Habib. Todos os direitos reservados.',
    },
    ru: {
        about: 'О себе',
        expertise: 'Экспертиза',
        skills: 'Навыки',
        portfolio: 'Портфолио',
        testimonials: 'Отзывы',
        contact: 'Контакты',
        heroTagline:
            '🚀 Эксперт WordPress | Разработчик плагинов и тем | Решение проблем',
        hireMe: 'Нанять меня',
        downloadCV: 'Скачать CV',
        aboutTitle: 'Обо мне',
        portfolioTitle: 'Избранные проекты',
        contactTitle: 'Связаться со мной',
        footerText: '© 2025 Хабиб. Все права защищены.',
    },
    ja: {
        about: '私について',
        expertise: '専門知識',
        skills: 'スキル',
        portfolio: 'ポートフォリオ',
        testimonials: 'お客様の声',
        contact: 'お問い合わせ',
        heroTagline:
            '🚀 WordPressエキスパート | プラグイン・テーマ開発者 | 問題解決者',
        hireMe: '採用する',
        downloadCV: 'CV ダウンロード',
        aboutTitle: '私について',
        portfolioTitle: '注目プロジェクト',
        contactTitle: 'お問い合わせ',
        footerText: '© 2025 ハビブ. 全著作権所有.',
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string): string => {
        return (
            translations[language][
                key as keyof (typeof translations)[typeof language]
            ] || key
        );
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
