import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸', short: 'EN' },
        { code: 'bn', name: 'বাংলা', flag: '🇧🇩', short: 'বাং' },
        { code: 'es', name: 'Español', flag: '🇪🇸', short: 'ES' },
        { code: 'pt', name: 'Português', flag: '🇵🇹', short: 'PT' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺', short: 'RU' },
        { code: 'ja', name: '日本語', flag: '🇯🇵', short: 'JP' },
    ];

    const currentLang =
        languages.find((lang) => lang.code === language) || languages[0];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        'about',
        'expertise',
        'skills',
        'portfolio',
        'testimonials',
        'contact',
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl border-b border-gray-200/20 dark:border-slate-700/20'
                    : 'bg-transparent'
            }`}
        >
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Enhanced Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative group cursor-pointer"
                    >
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                        <div className="relative flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">
                                    H
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    IamHabib
                                </span>
                                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                    WordPress Developer
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <motion.button
                                key={item}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection(item)}
                                className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium capitalize rounded-lg hover:bg-gray-100/50 dark:hover:bg-slate-800/50 group"
                            >
                                <span className="relative z-10">{t(item)}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="flex items-center space-x-3">
                        {/* Language Selector */}
                        <div className="relative">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() =>
                                    setIsLangMenuOpen(!isLangMenuOpen)
                                }
                                className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-gray-100/80 dark:bg-slate-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-slate-700/80 transition-all duration-300 border border-gray-200/50 dark:border-slate-700/50"
                            >
                                <span className="text-lg">
                                    {currentLang.flag}
                                </span>
                                <span className="font-semibold text-sm">
                                    {currentLang.short}
                                </span>
                                <motion.div
                                    animate={{
                                        rotate: isLangMenuOpen ? 180 : 0,
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ChevronDown size={16} />
                                </motion.div>
                            </motion.button>

                            {isLangMenuOpen && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: -10,
                                        scale: 0.95,
                                    }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    className="absolute right-0 mt-2 w-48 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-slate-700/50 py-2 overflow-hidden"
                                >
                                    {languages.map((lang) => (
                                        <motion.button
                                            key={lang.code}
                                            whileHover={{
                                                x: 5,
                                                backgroundColor:
                                                    'rgba(59, 130, 246, 0.1)',
                                            }}
                                            onClick={() => {
                                                setLanguage(lang.code as any);
                                                setIsLangMenuOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-3 text-sm hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-all duration-200 flex items-center space-x-3 ${
                                                language === lang.code
                                                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20'
                                                    : 'text-gray-700 dark:text-gray-300'
                                            }`}
                                        >
                                            <span className="text-lg">
                                                {lang.flag}
                                            </span>
                                            <div className="flex flex-col">
                                                <span className="font-medium">
                                                    {lang.name}
                                                </span>
                                                <span className="text-xs opacity-60">
                                                    {lang.short}
                                                </span>
                                            </div>
                                            {language === lang.code && (
                                                <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                                            )}
                                        </motion.button>
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        {/* Enhanced Theme Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.05, rotate: 10 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleTheme}
                            className="relative p-3 rounded-xl bg-gray-100/80 dark:bg-slate-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-slate-700/80 transition-all duration-300 border border-gray-200/50 dark:border-slate-700/50 group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 dark:from-blue-400/20 dark:to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <motion.div
                                animate={{
                                    rotate: isDark ? 0 : 180,
                                    scale: isDark ? 1 : 0.8,
                                }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10"
                            >
                                {isDark ? (
                                    <Sun size={20} />
                                ) : (
                                    <Moon size={20} />
                                )}
                            </motion.div>
                        </motion.button>

                        {/* Enhanced Mobile Menu Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className="lg:hidden relative p-3 rounded-xl bg-gray-100/80 dark:bg-slate-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-slate-700/50 overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <motion.div
                                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="relative z-10"
                            >
                                {isMobileMenuOpen ? (
                                    <X size={20} />
                                ) : (
                                    <Menu size={20} />
                                )}
                            </motion.div>
                        </motion.button>
                    </div>
                </div>

                {/* Enhanced Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden mt-6 pt-6 border-t border-gray-200/50 dark:border-slate-700/50"
                    >
                        <div className="space-y-2">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{
                                        x: 10,
                                        backgroundColor:
                                            'rgba(59, 130, 246, 0.1)',
                                    }}
                                    onClick={() => {
                                        scrollToSection(item);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="block w-full text-left py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium capitalize rounded-xl hover:bg-blue-50/50 dark:hover:bg-slate-800/50"
                                >
                                    {t(item)}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </nav>
        </motion.header>
    );
};

export default Header;
