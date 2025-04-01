
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MessageSquare, Github, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-teal-600" />,
      text: 'mabrenquiro@gmail.com',
      link: 'chrome://newtab/',
    },
    {
      icon: <MessageSquare className="h-5 w-5 text-teal-600" />,
      text: 'Message me on Facebook',
      link: 'https://www.facebook.com/gargalgaccino?mibextid=ZbWKwL',
    },
    {
      icon: <Github className="h-5 w-5 text-teal-600" />,
      text: 'Follow me on GitHub',
      link: 'https://github.com/brenalzaga',
    },
    {
      icon: <Phone className="h-5 w-5 text-teal-600" />,
      text: '+639384439638',
      link: 'tel:+639384439638',
    },
    {
      icon: <MapPin className="h-5 w-5 text-teal-600" />,
      text: 'Philippines',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto">Get In Touch</h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out to me.
          I'm always open to discussing new projects and opportunities.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-teal-700 mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" type="text" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="Your email" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" type="text" placeholder="Subject" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Your message" rows={5} required />
              </div>
              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="space-y-8 animate-slide-in-right">
            <h3 className="text-2xl font-semibold text-teal-700 mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-none card-shadow">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-teal-100">
                      {info.icon}
                    </div>
                    <div>
                      <a 
                        href={info.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-teal-600 transition-colors"
                      >
                        {info.text}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="pt-6">
              <h4 className="text-xl font-semibold text-teal-700 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/mabrenquiro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-teal-100 text-teal-600 hover:bg-teal-600 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="mailto:mabrenquiro@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-teal-100 text-teal-600 hover:bg-teal-600 hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="https://m.me/mabrenquiro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-teal-100 text-teal-600 hover:bg-teal-600 hover:text-white transition-colors"
                >
                  <MessageSquare size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
