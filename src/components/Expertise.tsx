import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Puzzle,
    Palette,
    Blocks,
    Database,
    Globe,
    Smartphone,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Expertise: React.FC = () => {
    const { t } = useLanguage();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const expertiseAreas = [
        {
            icon: Puzzle,
            title: t('pluginDev'),
            description: t('pluginDevDesc'),
            gradient: 'from-blue-500 to-cyan-500',
            skills: [
                'REST API',
                'Admin Panels',
                'Custom Post Types',
                'Hooks & Filters',
            ],
        },
        {
            icon: Palette,
            title: t('themeDev'),
            description: t('themeDevDesc'),
            gradient: 'from-purple-500 to-pink-500',
            skills: [
                'Custom Themes',
                'Responsive Design',
                'SEO Optimization',
                'Performance',
            ],
        },
        {
            icon: Blocks,
            title: t('gutenberg'),
            description: t('gutenbergDesc'),
            gradient: 'from-green-500 to-emerald-500',
            skills: [
                'Block Development',
                'Custom Controls',
                'Dynamic Blocks',
                'Meta Boxes',
            ],
        },
        {
            icon: Database,
            title: 'Backend Development',
            description:
                'Robust server-side solutions with database optimization',
            gradient: 'from-orange-500 to-red-500',
            skills: [
                'MySQL',
                'PHP OOP',
                'API Integration',
                'Performance Tuning',
            ],
        },
        {
            icon: Globe,
            title: 'Full-Stack Solutions',
            description: 'End-to-end web applications with modern technologies',
            gradient: 'from-indigo-500 to-blue-500',
            skills: ['React.js', 'Node.js', 'RESTful APIs', 'Cloud Deployment'],
        },
        {
            icon: Smartphone,
            title: 'Mobile-First Design',
            description:
                'Responsive designs that work perfectly on all devices',
            gradient: 'from-teal-500 to-green-500',
            skills: [
                'Responsive Design',
                'Progressive Web Apps',
                'Touch Optimization',
                'Cross-Browser',
            ],
        },
    ];

    return (
        <section id="expertise" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        {t('expertiseTitle')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Specialized in creating powerful, scalable solutions
                        with cutting-edge technologies
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {expertiseAreas.map((area, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r opacity-75 group-hover:opacity-100 rounded-2xl blur transition duration-300 group-hover:duration-200"></div>
                            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                                {/* Icon */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${area.gradient} rounded-xl mb-6 shadow-lg`}
                                >
                                    <area.icon
                                        className="text-white"
                                        size={28}
                                    />
                                </motion.div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                                    {area.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    {area.description}
                                </p>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2">
                                    {area.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skillIndex}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={
                                                inView
                                                    ? { opacity: 1, scale: 1 }
                                                    : {}
                                            }
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.8 + skillIndex * 0.1,
                                            }}
                                            className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Hover Effect Overlay */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${area.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                                ></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
