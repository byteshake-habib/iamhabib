import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
    const { t } = useLanguage();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'CEO, TechFlow Solutions',
            company: 'TechFlow Solutions',
            image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
            rating: 5,
            text: 'Habib delivered exceptional work on our WordPress plugin. His expertise in REST API integration and custom admin panels is outstanding. The code quality is top-notch and well-documented.',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Product Manager',
            company: 'Digital Innovations',
            image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=300',
            rating: 5,
            text: 'Working with Habib was a game-changer for our project. He transformed our complex requirements into an elegant WordPress theme with perfect Gutenberg integration. Highly recommended!',
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'Founder',
            company: 'Creative Agency Pro',
            image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=300',
            rating: 5,
            text: "Habib's attention to detail and problem-solving skills are remarkable. He delivered our eCommerce solution ahead of schedule with features we didn't even know we needed.",
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            id: 4,
            name: 'David Wilson',
            role: 'Technical Director',
            company: 'WebCraft Studios',
            image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
            rating: 5,
            text: 'The React dashboard Habib built for us is incredibly performant and user-friendly. His modern development approach and clean code practices make him our go-to developer.',
            gradient: 'from-orange-500 to-red-500',
        },
        {
            id: 5,
            name: 'Lisa Thompson',
            role: 'Marketing Director',
            company: 'Growth Marketing Hub',
            image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300',
            rating: 5,
            text: "Habib's WordPress expertise helped us achieve 300% better performance on our website. His security-focused approach with the Admin Safety Guard plugin gave us peace of mind.",
            gradient: 'from-indigo-500 to-blue-500',
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, [testimonials.length]);

    const goToPrevious = () => {
        setCurrentIndex(
            currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex(
            currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
        );
    };

    return (
        <section
            id="testimonials"
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
                        {t('testimonialsTitle')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Hear from clients who have experienced exceptional
                        results with my WordPress development services
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Main Testimonial */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
                                {/* Quote Icon */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        delay: 0.2,
                                        type: 'spring',
                                        stiffness: 200,
                                    }}
                                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${testimonials[currentIndex].gradient} rounded-full mb-6 shadow-lg`}
                                >
                                    <Quote className="text-white" size={24} />
                                </motion.div>

                                {/* Testimonial Text */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                    className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic"
                                >
                                    "{testimonials[currentIndex].text}"
                                </motion.p>

                                {/* Rating */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="flex items-center justify-center mb-6"
                                >
                                    {[
                                        ...Array(
                                            testimonials[currentIndex].rating
                                        ),
                                    ].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="text-yellow-400 fill-current"
                                            size={24}
                                        />
                                    ))}
                                </motion.div>

                                {/* Client Info */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                    className="flex items-center justify-center"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="relative">
                                            <div
                                                className={`absolute -inset-1 bg-gradient-to-r ${testimonials[currentIndex].gradient} rounded-full blur opacity-75`}
                                            ></div>
                                            <img
                                                src={
                                                    testimonials[currentIndex]
                                                        .image
                                                }
                                                alt={
                                                    testimonials[currentIndex]
                                                        .name
                                                }
                                                className="relative w-16 h-16 rounded-full object-cover border-2 border-white dark:border-gray-700"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <h4 className="font-bold text-gray-800 dark:text-white text-lg">
                                                {
                                                    testimonials[currentIndex]
                                                        .name
                                                }
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                {
                                                    testimonials[currentIndex]
                                                        .role
                                                }
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-500">
                                                {
                                                    testimonials[currentIndex]
                                                        .company
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center items-center mt-8 space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={goToPrevious}
                            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            <ChevronLeft size={24} />
                        </motion.button>

                        {/* Dots Indicator */}
                        <div className="flex space-x-2">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.2 }}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentIndex
                                            ? 'bg-blue-600 scale-125'
                                            : 'bg-gray-300 dark:bg-gray-600'
                                    }`}
                                />
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={goToNext}
                            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            <ChevronRight size={24} />
                        </motion.button>
                    </div>
                </div>

                {/* Testimonial Grid Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.button
                            key={testimonial.id}
                            whileHover={{ scale: 1.05, y: -5 }}
                            onClick={() => setCurrentIndex(index)}
                            className={`relative p-1 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? 'ring-4 ring-blue-400'
                                    : 'opacity-60 hover:opacity-100'
                            }`}
                        >
                            <div
                                className={`absolute -inset-1 bg-gradient-to-r ${testimonial.gradient} rounded-full blur opacity-75`}
                            ></div>
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="relative w-16 h-16 rounded-full object-cover border-2 border-white dark:border-gray-700"
                            />
                        </motion.button>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
