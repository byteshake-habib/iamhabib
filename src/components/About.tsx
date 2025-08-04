import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Code, Trophy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
    const { t } = useLanguage();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const stats = [
        {
            icon: Award,
            title: t('yearsExp'),
            description: 'Professional Development',
        },
        {
            icon: Code,
            title: t('pluginContributor'),
            description: 'WordPress.org Repository',
        },
        {
            icon: Users,
            title: t('projectsCompleted'),
            description: 'Happy Clients Worldwide',
        },
        {
            icon: Trophy,
            title: 'Expert Level',
            description: 'WordPress Ecosystem',
        },
    ];

    return (
        <section
            id="about"
            className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900"
        >
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        {t('aboutTitle')}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative group">
                            {/* Glowing border effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>

                            {/* Main container with gradient border */}
                            <div className="relative w-full max-w-md mx-auto h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-1">
                                {/* Inner container with background and centered content */}
                                <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center overflow-hidden">
                                    {/* Image */}
                                    <img
                                        // src="/iamhabib.png"
                                        src="/habib.jpg"
                                        alt="IamHabib"
                                        className="object-contain w-full h-full rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* About Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            {t('aboutDescription')}
                        </p>

                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            From building complex REST API integrations to
                            creating stunning user interfaces with modern
                            frameworks like React and Tailwind CSS, I bring
                            ideas to life with clean, efficient code.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.6 + index * 0.1,
                                    }}
                                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 10 }}
                                        className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-3 group-hover:shadow-lg transition-all duration-300"
                                    >
                                        <stat.icon
                                            className="text-white"
                                            size={20}
                                        />
                                    </motion.div>
                                    <h3 className="font-bold text-gray-800 dark:text-white text-sm">
                                        {stat.title}
                                    </h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                        {stat.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
