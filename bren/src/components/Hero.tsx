import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';

const Hero = () => {
  const { profileImage } = useTheme();
  const [isDownloading, setIsDownloading] = useState(false);
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const downloadCV = async () => {
    setIsDownloading(true);
    try {
      // Path to your CV in the public folder
      const response = await fetch('/documents/Mabren_Quiro_CV.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Mabren_Quiro_Resume.pdf'; // Custom filename
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download CV. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-200 dark:bg-teal-800/30 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-teal-300 dark:bg-teal-700/30 rounded-full opacity-10 animate-spin-slow"></div>
      
      <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center relative z-10">
        <div className="order-2 md:order-1">
          <div className="space-y-6">
            <h1 className="animate-fade-in-up text-4xl md:text-5xl font-bold leading-tight dark:text-white">
              Hi, I'm <span className="text-teal-600 dark:text-teal-400">Mabren Quiro</span>
            </h1>
            <h2 className="animate-fade-in-up text-xl md:text-2xl text-muted-foreground dark:text-gray-300 opacity-0" style={{ animationDelay: '0.2s' }}>
              Web Developer, UI/UX Designer & Data Analyst
            </h2>
            <p className="animate-fade-in-up text-muted-foreground dark:text-gray-300 text-lg opacity-0" style={{ animationDelay: '0.4s' }}>
              I create beautiful, functional websites and applications with a focus on user experience. 
              Currently a second year BSIT student passionate about turning ideas into reality.
            </p>
            <div className="flex gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
              <Button 
                onClick={scrollToProjects} 
                className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-600 text-white hover-lift hover-glow"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                onClick={downloadCV}
                disabled={isDownloading}
                className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-500 dark:text-teal-400 dark:hover:bg-teal-900/30 hover-lift hover-glow"
              >
                {isDownloading ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Download className="h-4 w-4 mr-2" />
                )}
                {isDownloading ? 'Downloading...' : 'Download CV'}
              </Button>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <Link to="/" className="relative group">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 dark:from-teal-500 dark:to-teal-700 animate-float group-hover:from-teal-500 group-hover:to-teal-700 dark:group-hover:from-teal-400 dark:group-hover:to-teal-600 transition-all duration-300"></div>
            <div className="absolute inset-4 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-lg group-hover:border-teal-100 dark:group-hover:border-teal-900 transition-all duration-300">
              <img 
                src={profileImage} 
                alt="Mabren Quiro" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-teal-400 transition-colors duration-300">
        <ArrowDown className="text-teal-600 dark:text-teal-400 hover-scale" />
      </div>
    </section>
  );
};

export default Hero;