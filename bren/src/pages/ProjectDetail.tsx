
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  gallery?: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  features?: string[];
  challenges?: string[];
  technologies?: string[];
  contribution?: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Acanavi',
    description: 'A score tracking tool for students and teachers that helps track academic progress and performance.',
    longDescription: 'Acanavi is a comprehensive academic tracking system designed to help both students and teachers monitor progress over time. It provides detailed analytics on student performance, allowing for targeted interventions and personalized learning strategies. Built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.io for real-time updates and notifications.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'web',
    features: [
      'Real-time grade tracking and calculations using Socket.io',
      'Personalized student performance dashboards',
      'Automated progress reports',
      'Assignment and test scheduling',
      'Instant notifications for new grades and assignments',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'Socket.io', 'JWT Authentication'],
    challenges: [
      'Implementing secure user authentication for different user roles',
      'Creating an intuitive interface for various user types',
      'Ensuring data accuracy across multiple input sources',
      'Building real-time communication with Socket.io',
    ],
    contribution: 80,
  },
  {
    id: 2,
    title: 'Awesome To Do\'s',
    description: 'A basic application to monitor to-do tasks, helping users stay organized and productive. Built with the MERN stack.',
    longDescription: 'Awesome To Do\'s is a task management application that helps users organize their daily activities. It features an intuitive interface with drag-and-drop functionality, task categorization, and reminder systems to boost productivity. Built using the MERN (MongoDB, Express, React, Node.js) stack for a seamless full-stack experience.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'web',
    features: [
      'Task categorization and priority setting',
      'Due date reminders',
      'Progress tracking',
      'Simple and intuitive user interface',
      'Real-time updates with WebSocket integration',
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST API', 'JWT Authentication'],
    challenges: [
      'Creating a responsive design that works across devices',
      'Implementing effective state management with React',
      'Designing an intuitive user experience for task management',
      'Setting up secure user authentication and data persistence',
    ],
    contribution: 100,
  },
  {
    id: 3,
    title: 'Paro',
    description: 'A mobile application design using Figma intended for Subdivisions management and community engagement.',
    longDescription: 'Paro is a mobile application designed for subdivision management and community engagement. The interface focuses on connecting residents, managing community resources, and streamlining communication between subdivision management and homeowners.',
    tags: ['Figma', 'UI/UX', 'Mobile'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'design',
    features: [
      'Community bulletin board and announcements',
      'Amenity booking system',
      'Bill payment portal',
      'Resident directory and messaging',
    ],
    technologies: ['Figma', 'Adobe XD', 'Prototyping tools'],
    challenges: [
      'Balancing functionality with ease of use',
      'Creating a cohesive design system',
      'Designing for various user types with different needs',
    ],
    contribution: 75,
  },
  {
    id: 4,
    title: 'Timu Application',
    description: 'A mobile application design intended for Attendance Monitoring in educational institutions.',
    longDescription: 'Timu is an attendance monitoring system designed for educational institutions. It streamlines the process of tracking student attendance through mobile devices, using QR codes, geofencing, and biometric verification to ensure accuracy.',
    tags: ['Figma', 'UI/UX', 'Mobile'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'design',
    features: [
      'QR code-based attendance tracking',
      'Geofencing for location verification',
      'Absence notification system',
      'Attendance reports and analytics',
    ],
    technologies: ['Figma', 'Adobe Illustrator', 'User flow mapping'],
    challenges: [
      'Designing an unobtrusive but effective verification system',
      'Creating an interface that minimizes class disruption',
      'Balancing security needs with user convenience',
    ],
    contribution: 90,
  },
  {
    id: 5,
    title: 'Arduino-Based Plant Watering System',
    description: 'An automated system that bridges the gap between hectic schedules and plant care needs using Arduino technology.',
    longDescription: 'The Arduino-Based Plant Watering System is a smart solution designed to address the common challenge of maintaining plant health amidst busy schedules. This IoT device monitors soil moisture levels and automatically waters plants when needed, ensuring they receive proper care even when their owners are away or too busy to maintain a regular watering schedule.',
    tags: ['Arduino', 'IoT', 'Hardware', 'C++'],
    image: 'https://images.unsplash.com/photo-1623241899289-e9a64069babb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'hardware',
    features: [
      'Soil moisture monitoring with calibrated sensors',
      'Automated watering based on moisture thresholds',
      'Water level detection for the reservoir',
      'Power-efficient design with sleep mode capabilities',
      'Optional manual override controls',
    ],
    technologies: ['Arduino', 'C/C++', 'Arduino IDE', 'Soil Moisture Sensors', 'Water Pumps', 'Relay Modules', 'Power Management Circuits'],
    challenges: [
      'Calibrating sensors for different plant types and soil conditions',
      'Developing a power-efficient system for long-term operation',
      'Creating a reliable water delivery mechanism',
      'Ensuring the system is user-friendly for non-technical users',
      'Waterproofing electronic components in a moist environment',
    ],
    contribution: 95,
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === Number(id));
  
  useEffect(() => {
    if (project) {
      window.scrollTo(0, 0);
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-teal-700 dark:text-teal-400 mb-4">Project Not Found</h1>
          <p className="mb-6 text-foreground dark:text-gray-300">The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/">
            <Button className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-800">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 text-foreground dark:text-gray-200 relative overflow-hidden">
      <Navigation />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-float absolute -top-10 left-1/4 w-48 h-48 bg-teal-300/20 dark:bg-teal-700/20 rounded-full"></div>
        <div className="animate-spin-slow absolute top-1/3 right-1/4 w-64 h-64 bg-teal-200/20 dark:bg-teal-600/20 rounded-full"></div>
        <div className="animate-bounce-soft absolute bottom-20 left-1/3 w-32 h-32 bg-teal-100/20 dark:bg-teal-500/20 rounded-full"></div>
      </div>
      
      <main className="container mx-auto px-4 py-12 relative z-10">
        <Link 
          to="/" 
          className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 mb-6 group transition-all duration-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Projects
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
            <div className="mb-8 overflow-hidden rounded-xl border-2 border-teal-100 dark:border-teal-800/50 shadow-lg shadow-teal-100/50 dark:shadow-teal-900/30">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </div>
            
            <h1 className="text-4xl font-bold text-teal-700 dark:text-teal-400 mb-4">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <Badge 
                  key={i} 
                  variant="outline" 
                  className="bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:border-teal-800"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="prose max-w-none dark:prose-invert prose-headings:text-teal-700 dark:prose-headings:text-teal-400">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="mb-6 text-lg">{project.longDescription}</p>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 mb-6 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-teal-500 to-teal-400 h-6 rounded-full flex items-center justify-center text-white text-sm font-semibold transition-all duration-1000 animate-pulse-slow"
                  style={{ width: `${project.contribution}%` }}
                >
                  {project.contribution}% Contribution
                </div>
              </div>
              
              {project.features && (
                <>
                  <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                  <ul className="list-disc pl-6 mb-6">
                    {project.features.map((feature, i) => (
                      <li key={i} className="mb-2">{feature}</li>
                    ))}
                  </ul>
                </>
              )}
              
              {project.challenges && (
                <>
                  <h2 className="text-2xl font-semibold mb-4">Challenges & Solutions</h2>
                  <ul className="list-disc pl-6 mb-6">
                    {project.challenges.map((challenge, i) => (
                      <li key={i} className="mb-2">{challenge}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
          
          <div className="animate-slide-in-right opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="sticky top-24 space-y-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-2 border-teal-100 dark:border-teal-800/50">
              <div>
                <h3 className="text-xl font-semibold text-teal-700 dark:text-teal-400 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, i) => (
                    <Badge key={i} className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-teal-700 dark:text-teal-400">Project Links</h3>
                <div className="space-y-2">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300">
                      <ExternalLink className="h-4 w-4 mr-2" /> View Live Project
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300">
                      <Github className="h-4 w-4 mr-2" /> View Source Code
                    </a>
                  )}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-teal-700 dark:text-teal-400 mb-4">Project Category</h3>
                <Badge className="bg-teal-600 text-white dark:bg-teal-700">
                  {project.category === 'web' ? 'Web Development' : 'UI/UX Design'}
                </Badge>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-700 dark:text-teal-400 mb-4">My Contribution</h3>
                <div className="text-center">
                  <span className="text-3xl font-bold text-teal-600 dark:text-teal-400">{project.contribution}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
