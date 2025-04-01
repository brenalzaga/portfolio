
import React from 'react';
import { Code, Layout, Database, PenTool, BarChart, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies that are responsive, fast, and user-friendly.',
      icon: <Code className="h-12 w-12 text-teal-600 dark:text-teal-400" />,
      delay: 0,
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive interfaces and engaging user experiences that help your application stand out and delight users.',
      icon: <Layout className="h-12 w-12 text-teal-600 dark:text-teal-400" />,
      delay: 0.1,
    },
    {
      title: 'Backend Development',
      description: 'Robust and scalable server-side applications that power your digital experiences and handle complex business logic.',
      icon: <Database className="h-12 w-12 text-teal-600 dark:text-teal-400" />,
      delay: 0.2,
    },
    {
      title: 'Data Analysis',
      description: 'Transform raw data into actionable insights with comprehensive analysis and visualization techniques.',
      icon: <BarChart className="h-12 w-12 text-teal-600 dark:text-teal-400" />,
      delay: 0.3,
    },
    {
      title: 'Project Management',
      description: 'Organized planning and execution of projects to ensure they are completed on time, within scope, and within budget.',
      icon: <FileText className="h-12 w-12 text-teal-600 dark:text-teal-400" />,
      delay: 0.4,
    },
    {
      title: 'Mobile App Design',
      description: 'Engaging mobile application interfaces that provide an excellent user experience across all devices.',
      icon: <PenTool className="h-12 w-12 text-teal-600 dark:text-teal-400" />,
      delay: 0.5,
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Enhanced animated floating backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-teal-100 dark:bg-teal-900/20 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-teal-200 dark:bg-teal-800/20 rounded-full opacity-10 animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-50 dark:bg-teal-700/10 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-teal-300/20 dark:bg-teal-600/20 rounded-full opacity-15 animate-bounce-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-teal-200/30 dark:bg-teal-700/15 rounded-full opacity-20 animate-float" style={{ animationDelay: '0.5s', animationDuration: '8s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-heading text-center mx-auto text-3xl font-bold text-teal-700 dark:text-teal-400 mb-6">What I Can Offer</h2>
        <p className="text-center text-lg text-muted-foreground dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          I provide a range of services to help businesses and individuals achieve their digital goals.
          Here's what I can offer to bring your vision to life:
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={cn(
                "bg-white/80 dark:bg-gray-800/80 border-2 border-teal-50 dark:border-teal-900/30 card-shadow animate-fade-in-up opacity-0",
                "hover:border-teal-200 dark:hover:border-teal-700/50 transition-all hover:-translate-y-2",
                "backdrop-blur-sm hover:shadow-teal-100/50 dark:hover:shadow-teal-900/30"
              )}
              style={{ animationDelay: `${service.delay}s` }}
            >
              <CardHeader className="pb-2">
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-teal-700 dark:text-teal-400">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground/80 dark:text-gray-300">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
