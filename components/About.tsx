"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Lightbulb, Users } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: Trophy,
      title: "Academic Excellence",
      description: "Multiple gold medals in olympiads and consistent academic performance"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Developed multiple tech solutions and won hackathons"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Active participant in multiple tech communities and initiatives"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I am a Computer Science Engineering student at BITS Pilani Hyderabad Campus. 
            My journey combines academic excellence with innovation and leadership, 
            driven by a passion for technology and entrepreneurship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass-card p-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <div className="relative w-48 h-48 mx-auto">
                <div className="absolute inset-0 bg-primary/20 rounded-xl transform rotate-6"></div>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/1200px-BITS_Pilani-Logo.svg.png"
                  alt="BITS Pilani Logo"
                  width={200}
                  height={200}
                  className="relative rounded-xl bg-white p-4"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">Current Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-medium text-primary">BITS Pilani, Hyderabad Campus</h4>
                  <p className="text-lg">B.E. in Computer Science Engineering</p>
                  <p className="text-muted-foreground">2023 - 2027</p>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    Currently pursuing my degree with a focus on cutting-edge technologies and practical applications.
                    Actively involved in various technical and entrepreneurial initiatives on campus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;