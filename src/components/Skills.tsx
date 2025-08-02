import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

const Skills: React.FC = () => {
    const { t } = useLanguage();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const skills = [
        { name: 'PHP (OOP)', level: 95, color: 'from-blue-500 to-blue-600' },
        {
            name: 'WordPress Development',
            level: 98,
            color: 'from-indigo-500 to-indigo-600',
        },
        { name: 'React.js', level: 90, color: 'from-cyan-500 to-cyan-600' },
        {
            name: 'JavaScript/TypeScript',
            level: 88,
            color: 'from-yellow-500 to-yellow-600',
        },
        {
            name: 'REST API Development',
            level: 92,
            color: 'from-green-500 to-green-600',
        },
        {
            name: 'MySQL Database',
            level: 85,
            color: 'from-orange-500 to-orange-600',
        },
        {
            name: 'Tailwind CSS',
            level: 93,
            color: 'from-purple-500 to-purple-600',
        },
        {
            name: 'Gutenberg Blocks',
            level: 87,
            color: 'from-pink-500 to-pink-600',
        },
    ];

    const categories = [
        {
            title: 'Backend Development',
            skills: [
                'PHP (OOP)',
                'WordPress Development',
                'REST API Development',
                'MySQL Database',
            ],
            icon: '🔧',
        },
        {
            title: 'Frontend Development',
            skills: [
                'React.js',
                'JavaScript/TypeScript',
                'Tailwind CSS',
                'Gutenberg Blocks',
            ],
            icon: '🎨',
        },
    ];

    return (
        <section
            id="skills"
            className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900"
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
                        {t('skillsTitle')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Mastery across the full development stack with years of
                        hands-on experience
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {categories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{
                                opacity: 0,
                                x: categoryIndex === 0 ? -50 : 50,
                            }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
                        >
                            <div className="flex items-center mb-8">
                                <span className="text-3xl mr-4">
                                    {category.icon}
                                </span>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="space-y-6">
                                {skills
                                    .filter((skill) =>
                                        category.skills.includes(skill.name)
                                    )
                                    .map((skill, index) => (
                                        <div key={index} className="group">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-semibold text-gray-700 dark:text-gray-300">
                                                    {skill.name}
                                                </span>
                                                <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                                                    {skill.level}%
                                                </span>
                                            </div>

                                            <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={
                                                        inView
                                                            ? {
                                                                  width: `${skill.level}%`,
                                                              }
                                                            : {}
                                                    }
                                                    transition={{
                                                        duration: 1.5,
                                                        delay:
                                                            0.5 + index * 0.1,
                                                    }}
                                                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                                                >
                                                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills Cloud */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
                        Additional Technologies
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            'Git/GitHub',
                            'Firebase',
                            'Figma',
                            'Redux',
                            'Webpack',
                            'Sass/SCSS',
                            'Linux/Ubuntu',
                            'Apache/Nginx',
                        ].map((tech, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.8 + index * 0.05,
                                }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-gray-700 dark:text-gray-300 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
