import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Github,
    Linkedin,
    Facebook,
    Youtube,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
    const { t } = useLanguage();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        'idle' | 'success' | 'error'
    >('idle');

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate form submission (replace with actual form handling)
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus('idle'), 3000);
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'habibur.tj@gmail.com',
            link: 'mailto:habibur.tj@gmail.com',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+880 01877666010',
            link: 'tel:+88001877666010',
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Dhaka, Bangladesh',
            link: 'https://www.google.com/maps/search/Dhaka%20Bangladesh',
            gradient: 'from-purple-500 to-pink-500',
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            label: 'GitHub',
            link: 'https://github.com/habibnote',
            gradient: 'from-gray-700 to-gray-900',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            link: 'https://www.linkedin.com/in/habib333/',
            gradient: 'from-blue-600 to-blue-800',
        },
        {
            icon: Youtube,
            label: 'Youtube',
            link: 'https://www.youtube.com/@LearnWith-Habib',
            gradient: 'from-red-400 to-red-600',
        },
        {
            icon: Facebook,
            label: 'Facebook',
            link: 'https://www.facebook.com/md.Habib333',
            gradient: 'from-blue-500 to-blue-700',
        },
    ];

    return (
        <section
            id="contact"
            className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden"
        >
            {/* Animated Background */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white/5"
                        style={{
                            width: Math.random() * 200 + 100,
                            height: Math.random() * 200 + 100,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -50, 0],
                            x: [0, Math.random() * 30 - 15, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {t('contactTitle')}
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        {t('contactSubtitle')}
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-4"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Let's Connect
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                Ready to bring your WordPress project to life?
                                Whether you need a custom plugin, theme
                                development, or a complete web solution, I'm
                                here to help you achieve your goals.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.4 + index * 0.1,
                                    }}
                                    href={info.link}
                                    className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 group"
                                >
                                    <div
                                        className={`p-3 bg-gradient-to-r ${info.gradient} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <info.icon
                                            className="text-white"
                                            size={20}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">
                                            {info.label}
                                        </p>
                                        <p className="text-white font-semibold">
                                            {info.value}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="pt-8"
                        >
                            <h4 className="text-lg font-semibold text-white mb-4">
                                Follow Me
                            </h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 bg-gradient-to-r ${social.gradient} rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                                    >
                                        <social.icon
                                            className="text-white"
                                            size={20}
                                        />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    {t('name')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    {t('email')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    {t('message')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 ${
                                    isSubmitting
                                        ? 'opacity-75 cursor-not-allowed'
                                        : ''
                                }`}
                            >
                                {isSubmitting ? (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            ease: 'linear',
                                        }}
                                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                    />
                                ) : (
                                    <>
                                        <Send size={20} />
                                        <span>{t('sendMessage')}</span>
                                    </>
                                )}
                            </motion.button>

                            {/* Submit Status */}
                            {submitStatus !== 'idle' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`text-center p-4 rounded-lg ${
                                        submitStatus === 'success'
                                            ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                                            : 'bg-red-500/20 text-red-300 border border-red-500/30'
                                    }`}
                                >
                                    {submitStatus === 'success'
                                        ? "Message sent successfully! I'll get back to you soon."
                                        : 'Something went wrong. Please try again.'}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
