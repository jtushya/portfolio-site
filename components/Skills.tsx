"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Brain, Book, Trophy, CheckCircle2, Star, Zap, Timer, Users, Calendar, GraduationCap, Award } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = {
    technical: [
      "Python",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "Git",
      "SQL",
      "Blockchain",
      "Web3"
    ],
    soft: [
      { name: "Leadership", icon: Star },
      { name: "Public Speaking", icon: Zap },
      { name: "Problem Solving", icon: Brain },
      { name: "Team Management", icon: Users },
      { name: "Event Organization", icon: Calendar },
      { name: "Critical Thinking", icon: Timer }
    ]
  };

  const education = {
    college: {
      name: "BITS Pilani Hyderabad Campus",
      degree: "B.E. in Computer Science",
      period: "2023 - 2027",
      achievements: [
        "Winner at Dojima Hackathon (ATMOS'24)",
        "Finalist at SEEP2.0",
        "Pre-incubatee at TBI, BITS Hyderabad",
        "First Degree Teaching Assistant"
      ]
    },
    school: {
      name: "Sindhi Model Senior Secondary School",
      period: "2009 - 2023",
      highlights: [
        {
          title: "Academic Excellence",
          icon: GraduationCap,
          details: [
            "97.2% in Class 12 AISSCE",
            "Science Stream Topper",
            "99/100 in Physics",
            "98/100 in Mathematics"
          ]
        },
        {
          title: "Leadership",
          icon: Star,
          details: [
            "School Pupil Leader",
            "School Magazine Editor",
            "House Captain"
          ]
        },
        {
          title: "Achievements",
          icon: Award,
          details: [
            "ISRO Vikram Sarabhai Quiz Winner",
            "Multiple National Olympiad Medals",
            "Best Student Award"
          ]
        }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Education</h2>
          <p className="text-lg text-muted-foreground">
            Technical expertise, soft skills, and academic achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {skills.soft.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 group hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
            <CardHeader className="relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/2" />
              <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10">
                <Book className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">{education.college.name}</CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="text-xl font-medium mb-2">{education.college.degree}</p>
                  <p className="text-muted-foreground mb-4">{education.college.period}</p>
                  <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: "50%" } : {}}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-primary to-primary/50"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">2nd Year (4th Semester) - In Progress</p>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-4 text-primary">Key Achievements</h4>
                  <div className="space-y-3">
                    {education.college.achievements.map((achievement, index) => (
                      <motion.div
                        key={achievement}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className="flex items-center gap-2 p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <div className="mb-4 inline-flex p-3 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="flex items-center gap-4">
                <span>{education.school.name}</span>
                <span className="text-sm text-muted-foreground">({education.school.period})</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {education.school.highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <motion.div
                      key={highlight.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg transition-colors group-hover:from-primary/10" />
                      <div className="relative p-6 space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <h3 className="font-semibold text-lg">{highlight.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {highlight.details.map((detail, detailIndex) => (
                            <motion.li
                              key={detail}
                              initial={{ opacity: 0, x: -10 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.3, delay: 0.3 + detailIndex * 0.1 }}
                              className="flex items-center gap-2 text-sm"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                              <span>{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;