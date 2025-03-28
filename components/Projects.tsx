"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "SensGuide",
      description: "An accessibility solution offering real-time situational awareness for the visually impaired. Presented at SEEP 2.0.",
      tags: ["Accessibility", "IoT", "Mobile App"],
      link: "#"
    },
    {
      title: "Mental Wellness Application",
      description: "First-place winning application at I Cell hackathon, featuring mood tracking and mental health resources.",
      tags: ["React", "Node.js", "Healthcare"],
      link: "#"
    },
    {
      title: "EA Global Consultants Website",
      description: "Full-stack website development for a consulting firm, featuring modern design and functionality.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      link: "#"
    },
    {
      title: "NFT Valuation Tool",
      description: "Blockchain hackathon winning project for automated NFT value assessment and market analysis.",
      tags: ["Blockchain", "Web3", "React"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Projects & Portfolio</h2>
          <p className="text-lg text-muted-foreground">
            A showcase of my technical projects and achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button size="sm" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;