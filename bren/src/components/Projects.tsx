import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  contribution?: number;
}

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Acanavi',
      description: 'A score tracking tool for students and teachers that helps track academic progress and performance. Built with MERN Stack and Socket.io for real-time updates.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      image: 'acanavi.JPG',
      category: 'web',
      contribution: 80,
      liveUrl: ' https://acanavi-alpha-test.onrender.com/'
    },
    {
      id: 2,
      title: 'Awesome To Do\'s',
      description: 'A basic application to monitor to-do tasks, helping users stay organized and productive. Built with the MERN stack.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js'],
      image: 'awesome.JPG',
      category: 'web',
      contribution: 100,
      githubUrl: 'https://osamtodo-ng0i.onrender.com/?fbclid=IwZXh0bgNhZW0CMTEAAR3GA5cxDjDmta7YmLI16ReTklK4kYD3ePPjd-bWKbgF-3H45qPOpFPvHyc_aem_bwpAZPzmm3pgHl3UsfDNDA'
    },
    {
      id: 3,
      title: 'Paro',
      description: 'A mobile application design using Figma intended for Subdivisions management and community engagement.',
      tags: ['Figma', 'UI/UX', 'Mobile'],
      image: 'paro.png',
      category: 'design',
      contribution: 85,
      liveUrl: 'https://www.figma.com/design/kKrFO1lvZTdBpv1PSD1zm6/PARO-APPLICATION?node-id=319-2085&p=f&t=97c7gd0BLJUldt8f-0'
    },
    {
      id: 4,
      title: 'Timu Application',
      description: 'A mobile application design intended for Attendance Monitoring in educational institutions.',
      tags: ['Figma', 'UI/UX', 'Mobile'],
      image: 'timu.JPG',
      category: 'design',
      contribution: 100,
      liveUrl: 'https://www.figma.com/design/xuMsvVbz7cjUY7luS9dwbe/Timu?node-id=30-298&p=f&t=KKuLrmGnTuOB8QnT-0'
    },
    {
      id: 5,
      title: 'Arduino-Based Plant Watering System',
      description: 'An automated system that bridges the gap between hectic schedules and plant care needs using Arduino technology.',
      tags: ['Arduino', 'IoT', 'Hardware', 'C++'],
      image: 'pws.jpg',
      category: 'hardware',
      contribution: 75,
      githubUrl: 'https://docs.google.com/document/d/1UAyUOFg0UCTeWxAzQdtswSgSWhl0f_Xh/edit?tab=t.0'
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'design', name: 'UI/UX Design' },
    { id: 'hardware', name: 'Hardware Projects' },
  ];

  // Helper function to determine the link target for a project
  const getProjectLinkTarget = (project: Project) => {
    if (project.liveUrl) return project.liveUrl;
    if (project.githubUrl) return project.githubUrl;
    return `/projects/${project.id}`;
  };

  // Helper function to determine if the link is external
  const isExternalLink = (project: Project) => {
    return Boolean(project.liveUrl || project.githubUrl);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-teal-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
        <div className="animate-float absolute -top-10 left-1/4 w-32 h-32 bg-teal-300 dark:bg-teal-700/50 rounded-full"></div>
        <div className="animate-spin-slow absolute top-1/3 right-1/4 w-48 h-48 bg-teal-200 dark:bg-teal-600/40 rounded-full"></div>
        <div className="animate-bounce-soft absolute bottom-20 left-1/3 w-24 h-24 bg-teal-100 dark:bg-teal-500/30 rounded-full"></div>
        <div className="animate-pulse-slow absolute bottom-40 right-1/5 w-36 h-36 bg-teal-400/20 dark:bg-teal-400/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-heading text-center mx-auto dark:text-teal-400 dark:after:bg-teal-400">My Projects</h2>
        <p className="text-center text-lg text-muted-foreground dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Here are some of the projects I've worked on. Each project represents my skills
          and passion for creating digital solutions.
        </p>
        
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              className={cn(
                filter === category.id 
                  ? "bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-800" 
                  : "border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900/30"
              )}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className={cn(
                "overflow-hidden relative card-shadow animate-fade-in-up opacity-0 dark:bg-gray-800/80 dark:border-gray-700",
                "hover:shadow-teal-200/50 dark:hover:shadow-teal-900/40 transition-all duration-500",
                "border-2 border-teal-100 dark:border-teal-800/50 rounded-xl",
                index % 2 === 0 ? "rotate-1" : "-rotate-1",
                "transform-gpu hover:rotate-0 hover:scale-105 transition-all duration-500"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {isExternalLink(project) ? (
                <a 
                  href={getProjectLinkTarget(project)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="h-60 overflow-hidden block relative cursor-pointer group"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-teal-700/0 group-hover:bg-teal-700/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center">
                      <ExternalLink className="mr-2 h-5 w-5" /> Visit Project
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge 
                      className="bg-teal-600/90 text-white border-none font-semibold backdrop-blur-sm"
                    >
                      {project.contribution}% Contribution
                    </Badge>
                  </div>
                </a>
              ) : (
                <Link 
                  to={getProjectLinkTarget(project)} 
                  className="h-60 overflow-hidden block relative cursor-pointer group"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-teal-700/0 group-hover:bg-teal-700/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Project
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge 
                      className="bg-teal-600/90 text-white border-none font-semibold backdrop-blur-sm"
                    >
                      {project.contribution}% Contribution
                    </Badge>
                  </div>
                </Link>
              )}
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-teal-700 dark:text-teal-400">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base text-foreground/80 dark:text-gray-300">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:border-teal-800"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.liveUrl && (
                  <Button variant="outline" size="sm" className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900/30">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" size="sm" className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900/30">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </Button>
                )}
                <Link to={`/projects/${project.id}`}>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900/30 group"
                  >
                    View Details <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;