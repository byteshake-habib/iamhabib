import { useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
        // Update document title
        document.title = 'Habib - WordPress Expert | Plugin & Theme Developer';

        // Add meta description
        const metaDescription = document.querySelector(
            'meta[name="description"]'
        );
        if (metaDescription) {
            metaDescription.setAttribute(
                'content',
                'WordPress Expert with 5+ years experience in plugin development, theme creation, and full-stack solutions. Specializing in REST API integration, Gutenberg blocks, and modern web technologies.'
            );
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content =
                'WordPress Expert with 5+ years experience in plugin development, theme creation, and full-stack solutions. Specializing in REST API integration, Gutenberg blocks, and modern web technologies.';
            document.head.appendChild(meta);
        }

        // Add other SEO meta tags
        const metaTags = [
            {
                name: 'keywords',
                content:
                    'WordPress developer, plugin development, theme development, React developer, PHP developer, Gutenberg blocks, REST API',
            },
            { name: 'author', content: 'Habib' },
            {
                property: 'og:title',
                content: 'Habib - WordPress Expert | Plugin & Theme Developer',
            },
            {
                property: 'og:description',
                content:
                    'WordPress Expert with 5+ years experience in plugin development, theme creation, and full-stack solutions.',
            },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://iamhabib.online' },
            { name: 'twitter:card', content: 'summary_large_image' },
            {
                name: 'twitter:title',
                content: 'Habib - WordPress Expert | Plugin & Theme Developer',
            },
            {
                name: 'twitter:description',
                content:
                    'WordPress Expert with 5+ years experience in plugin development, theme creation, and full-stack solutions.',
            },
        ];

        metaTags.forEach((tag) => {
            const existingTag = document.querySelector(
                `meta[name="${tag.name}"], meta[property="${tag.property}"]`
            );
            if (!existingTag) {
                const meta = document.createElement('meta');
                if (tag.name) meta.name = tag.name;
                if (tag.property) meta.setAttribute('property', tag.property);
                meta.content = tag.content;
                document.head.appendChild(meta);
            }
        });
    }, []);

    return (
        <ThemeProvider>
            <LanguageProvider>
                <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                    <Header />
                    <main>
                        <Hero />
                        <About />
                        <Expertise />
                        <Skills />
                        <Portfolio />
                        <Testimonials />
                        <Contact />
                    </main>
                    <Footer />
                </div>
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default App;
