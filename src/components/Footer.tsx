import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
    const { t } = useLanguage();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: t('about'), href: '#about' },
        { name: t('expertise'), href: '#expertise' },
        { name: t('skills'), href: '#skills' },
        { name: t('portfolio'), href: '#portfolio' },
        { name: t('testimonials'), href: '#testimonials' },
        { name: t('contact'), href: '#contact' },
    ];

    const services = [
        'WordPress Plugin Development',
        'Custom Theme Development',
        'Gutenberg Block Development',
        'REST API Integration',
        'Performance Optimization',
        'Security Implementation',
    ];

    return (
        <footer className="bg-gray-900 text-white pt-20 pb-8 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-500/5"
                        style={{
                            width: Math.random() * 150 + 50,
                            height: Math.random() * 150 + 50,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="mb-6">
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Habib
                            </h3>
                            <p className="text-gray-400 mt-2">
                                WordPress Expert & Full-Stack Developer
                            </p>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                            Crafting exceptional WordPress solutions with modern
                            technologies. From custom plugins to full-stack
                            applications, I bring your digital vision to life.
                        </p>
                        <div className="flex items-center space-x-2 text-gray-400">
                            <span>Made with</span>
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <Heart
                                    className="text-red-500 fill-current"
                                    size={16}
                                />
                            </motion.div>
                            <span>using React & Tailwind CSS</span>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-semibold mb-6 text-white">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <motion.a
                                        whileHover={{ x: 5 }}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document
                                                .querySelector(link.href)
                                                ?.scrollIntoView({
                                                    behavior: 'smooth',
                                                });
                                        }}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 block"
                                    >
                                        {link.name}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold mb-6 text-white">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <span className="text-gray-400 text-sm block">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-gray-400 text-sm"
                        >
                            {t('footerText')}
                        </motion.p>

                        {/* Back to Top */}
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={scrollToTop}
                            className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                        >
                            <span className="text-sm">Back to Top</span>
                            <ArrowUp size={16} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
