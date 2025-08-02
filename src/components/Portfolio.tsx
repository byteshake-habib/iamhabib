import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star, Download, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Portfolio: React.FC = () => {
    const { t } = useLanguage();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [selectedCategory, setSelectedCategory] = useState('all');

    const projects = [
        {
            id: 1,
            title: t('shippingManager'),
            description: t('shippingDesc'),
            image: 'https://ps.w.org/shipping-manager/assets/banner-772x250.png?rev=3316188',
            category: 'plugin',
            technologies: ['PHP', 'WordPress', 'WooCommerce', 'REST API'],
            link: 'https://wordpress.org/plugins/shipping-manager',
            github: '#',
            stats: { downloads: '0.5K+', rating: 4.8, activeInstalls: '0.1K+' },
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            id: 2,
            title: t('adminSafety'),
            description: t('adminDesc'),
            image: 'https://ps.w.org/admin-safety-guard/assets/banner-772x250.png?rev=3337798',
            category: 'plugin',
            technologies: ['PHP', 'WordPress', 'Security', 'Admin Panel'],
            link: 'https://wordpress.org/plugins/admin-safety-guard/',
            github: '#',
            stats: { downloads: '0.1k+', rating: 4.9, activeInstalls: '0.1k+' },
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            id: 3,
            title: t('easycommerce'),
            description: t('easycommerceDesc'),
            image: 'https://ps.w.org/easycommerce/assets/banner-772x250.png?rev=3243666',
            category: 'contribution',
            technologies: ['PHP', 'WordPress', 'eCommerce', 'Contribution'],
            link: 'https://wordpress.org/plugins/easycommerce/',
            github: '#',
            stats: { downloads: '2.5K+', rating: 5, activeInstalls: '0.5k+' },
            gradient: 'from-green-500 to-emerald-500',
        },
    ];

    const categories = [
        { id: 'all', name: 'All Projects', count: projects.length },
        {
            id: 'plugin',
            name: 'Plugins',
            count: projects.filter((p) => p.category === 'plugin').length,
        },
        {
            id: 'theme',
            name: 'Themes',
            count: projects.filter((p) => p.category === 'theme').length,
        },
        {
            id: 'web-app',
            name: 'Web Apps',
            count: projects.filter((p) => p.category === 'web-app').length,
        },
        {
            id: 'contribution',
            name: 'Contributions',
            count: projects.filter((p) => p.category === 'contribution').length,
        },
    ];

    const filteredProjects =
        selectedCategory === 'all'
            ? projects
            : projects.filter(
                  (project) => project.category === selectedCategory
              );

    return (
        <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        {t('portfolioTitle')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Showcasing my best work in WordPress development, web
                        applications, and open-source contributions
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                selectedCategory === category.id
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                        >
                            {category.name} ({category.count})
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -10 }}
                                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}
                                    ></div>

                                    {/* Overlay Links */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="flex gap-4">
                                            <motion.a
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                                            >
                                                <ExternalLink size={20} />
                                            </motion.a>
                                            {/* <motion.a
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                                            >
                                                <Github size={20} />
                                            </motion.a> */}
                                        </div>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Stats */}
                                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                                        <div className="flex items-center gap-1">
                                            <Download size={14} />
                                            <span>
                                                {project.stats.downloads}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Star size={14} />
                                            <span>{project.stats.rating}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users size={14} />
                                            <span>
                                                {project.stats.activeInstalls}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map(
                                            (tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Portfolio;
