import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown, Code, Zap, Cpu } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
    const { t } = useLanguage();

    const scrollToAbout = () => {
        document
            .getElementById('about')
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    // Floating tech icons animation
    const techIcons = [Code, Zap, Cpu];

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Animated Tech Background */}
            <div className="absolute inset-0">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

                {/* Animated Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/30 to-orange-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

                {/* Floating Tech Elements */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            rotate: [0, 360],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    >
                        {React.createElement(
                            techIcons[
                                Math.floor(Math.random() * techIcons.length)
                            ],
                            {
                                size: 20 + Math.random() * 20,
                                className: 'text-blue-400/20',
                            }
                        )}
                    </motion.div>
                ))}

                {/* Code-like floating elements */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`code-${i}`}
                        className="absolute text-green-400/20 font-mono text-sm"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -50, 0],
                            opacity: [0.1, 0.4, 0.1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    >
                        {
                            [
                                '<?php',
                                '/>',
                                '{}',
                                '[]',
                                '()',
                                '&&',
                                '||',
                                '===',
                            ][i]
                        }
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                {/* Animated Profile Badge */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        duration: 0.8,
                        type: 'spring',
                        stiffness: 200,
                    }}
                    className="mb-8"
                >
                    <div className="relative inline-block">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
                        <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
                            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                                <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    H
                                </span>
                            </div>
                        </div>
                        {/* Status indicator */}
                        <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900 animate-pulse"></div>
                    </div>
                </motion.div>

                {/* Main Name with Gradient Animation */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mb-6"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 relative">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient bg-[length:400%_400%] drop-shadow-2xl">
                            HABIB
                        </span>
                        {/* Glitch effect overlay */}
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent opacity-0 animate-pulse">
                            HABIB
                        </span>
                    </h1>

                    {/* Subtitle with typewriter effect */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-xl md:text-2xl font-semibold text-gray-300 mb-2"
                    >
                        <span className="text-green-400 font-mono">&lt;</span>
                        <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                            WordPress Expert
                        </span>
                        <span className="text-green-400 font-mono">/&gt;</span>
                    </motion.div>
                </motion.div>

                {/* Enhanced Tagline */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mb-12"
                >
                    <div className="relative inline-block">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                        <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl px-8 py-4">
                            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl">
                                <span className="text-2xl mr-2">🚀</span>
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                                    Plugin & Theme Developer
                                </span>
                                <span className="text-gray-400 mx-2">|</span>
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                                    Problem Solver
                                </span>
                                <span className="text-gray-400 mx-2">|</span>
                                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent font-semibold">
                                    Full-Stack Developer
                                </span>
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Tech Stack Badges */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {[
                        'PHP',
                        'WordPress',
                        'React',
                        'TypeScript',
                        'Tailwind',
                    ].map((tech, index) => (
                        <motion.span
                            key={tech}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                delay: 1.2 + index * 0.1,
                                type: 'spring',
                                stiffness: 200,
                            }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>

                {/* Enhanced CTA Buttons */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                >
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 25px 50px rgba(59, 130, 246, 0.5)',
                            y: -5,
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                            document
                                .getElementById('contact')
                                ?.scrollIntoView({ behavior: 'smooth' })
                        }
                        className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center gap-3">
                            <Mail size={20} />
                            <span className="text-lg">{t('hireMe')}</span>
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                    </motion.button>

                    <motion.a
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 25px 50px rgba(255, 255, 255, 0.1)',
                            y: -5,
                        }}
                        whileTap={{ scale: 0.95 }}
                        href="/cv.pdf"
                        download
                        className="group relative px-8 py-4 border-2 border-slate-600 bg-slate-800/50 backdrop-blur-sm text-white font-bold rounded-2xl hover:border-blue-400 transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center gap-3">
                            <Download size={20} />
                            <span className="text-lg">{t('downloadCV')}</span>
                        </div>
                    </motion.a>
                </motion.div>

                {/* Enhanced Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={scrollToAbout}
                        className="group flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                        <span className="text-sm font-medium mb-2 group-hover:text-blue-400">
                            Scroll to explore
                        </span>
                        <div className="w-6 h-10 border-2 border-gray-600 group-hover:border-blue-400 rounded-full flex justify-center transition-colors duration-300">
                            <div className="w-1 h-3 bg-gray-600 group-hover:bg-blue-400 rounded-full mt-2 animate-bounce transition-colors duration-300"></div>
                        </div>
                    </motion.button>
                </motion.div>
            </div>

            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
