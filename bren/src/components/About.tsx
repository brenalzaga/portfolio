
import React from 'react';
import { Briefcase, BookOpen, Code, Database, Layout } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const About = () => {
  const skills = [
    { name: 'Java', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'React.js', level: 70 },
    { name: 'Node.js', level: 65 },
    { name: 'Express.js', level: 60 },
    { name: 'MongoDB', level: 70 },
    { name: 'MySQL', level: 75 },
    { name: 'Python', level: 65 },
    { name: 'PHP', level: 60 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Data Analysis', level: 80 },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-teal-50 dark:from-gray-900 dark:to-gray-950 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto dark:text-teal-400" data-aos="fade-up">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg dark:text-gray-300">
              I'm <span className="font-semibold text-teal-700 dark:text-teal-400">Mabren Quiro</span>, a second-year BSIT student with a passion for creating innovative digital solutions. 
              My journey in tech started with a curiosity about how websites work, which led me to dive deep into web development and design.
            </p>
            <p className="text-lg dark:text-gray-300">
              I specialize in developing responsive websites, intuitive user interfaces, and functional applications. 
              My background in data analysis helps me create solutions that are not only visually appealing but also data-driven and effective.
            </p>
            <p className="text-lg dark:text-gray-300">
              As a project manager, I've developed strong organizational skills and the ability to lead teams toward successful project completion. 
              I believe in continuous learning and constantly improving my skills to stay relevant in the ever-evolving tech landscape.
            </p>
            
            <div className="flex flex-wrap gap-2 pt-4">
              {skills.map((skill, index) => (
                <span key={index} className="skill-badge hover:scale-110 transition-transform">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-6 dark:text-gray-200">
            <h3 className="text-2xl font-semibold text-teal-700 dark:text-teal-400">Technical Skills</h3>
            
            <div className="space-y-4">
              {skills.slice(0, 6).map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-teal-100 dark:bg-teal-900/40 rounded-full overflow-hidden">
                    <div 
                      className={cn("h-full bg-teal-600 dark:bg-teal-500 animate-fade-in-up opacity-0 hover:bg-teal-500 dark:hover:bg-teal-400 transition-colors duration-300")} 
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s` 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="p-6 bg-white dark:bg-gray-800 card-shadow hover:border-teal-400 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-teal-100 text-teal-600 dark:bg-teal-900/40 dark:text-teal-400 mb-4">
                    <Code size={24} />
                  </div>
                  <h4 className="font-semibold dark:text-white">Web Development</h4>
                </div>
              </Card>
              
              <Card className="p-6 bg-white dark:bg-gray-800 card-shadow hover:border-teal-400 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-teal-100 text-teal-600 dark:bg-teal-900/40 dark:text-teal-400 mb-4">
                    <Layout size={24} />
                  </div>
                  <h4 className="font-semibold dark:text-white">UI/UX Design</h4>
                </div>
              </Card>
              
              <Card className="p-6 bg-white dark:bg-gray-800 card-shadow hover:border-teal-400 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-teal-100 text-teal-600 dark:bg-teal-900/40 dark:text-teal-400 mb-4">
                    <Database size={24} />
                  </div>
                  <h4 className="font-semibold dark:text-white">Data Analysis</h4>
                </div>
              </Card>
              
              <Card className="p-6 bg-white dark:bg-gray-800 card-shadow hover:border-teal-400 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-teal-100 text-teal-600 dark:bg-teal-900/40 dark:text-teal-400 mb-4">
                    <Briefcase size={24} />
                  </div>
                  <h4 className="font-semibold dark:text-white">Project Management</h4>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
