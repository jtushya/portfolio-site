"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Award, Rocket, Briefcase, Trophy, Lightbulb, GraduationCap, Sparkles } from 'lucide-react';

const Journey = () => {
  const timeline = [
    {
      title: "Leadership & Innovation",
      period: "January 2025",
      icon: Rocket,
      highlight: "Startup Expo Lead at Launchpad '25",
      achievements: [
        "Leading and coordinating startup showcase events",
        "Managing relationships with participating startups",
        "Organizing pitch competitions and networking sessions"
      ],
      className: "bg-gradient-to-br from-primary/20 to-transparent"
    },
    {
      title: "Hackathon Victories",
      period: "2023 - 2025",
      icon: Trophy,
      highlight: "Multiple Hackathon Wins",
      achievements: [
        "First Place - Blockchain Hackathon at ATMOS '24",
        "Winner - I Cell Hackathon (Mental Wellness Application)",
        "Runner-up - Dojima Hackathon with NFT Valuation Tool"
      ],
      className: "bg-gradient-to-br from-blue-500/20 to-transparent"
    },
    {
      title: "Startup & Innovation",
      period: "2024",
      icon: Sparkles,
      highlight: "SEEP 2.0 Finalist & Pre-incubation",
      achievements: [
        "Selected as Pre-incubatee at Technology Business Incubator (TBI)",
        "Finalist at SEEP 2.0 with innovative startup idea",
        "Developed comprehensive business plan and MVP",
        "Received mentorship from industry experts"
      ],
      className: "bg-gradient-to-br from-indigo-500/20 to-transparent"
    },
    {
      title: "Professional Experience",
      period: "2024 - Present",
      icon: Briefcase,
      highlight: "Industry Internships",
      achievements: [
        "Software Engineering Intern at Visey (Feb 2025 - Present)",
        "Full Stack Developer at EA Global Consultants (Winter 2024)",
        "First Degree Teaching Assistant"
      ],
      className: "bg-gradient-to-br from-green-500/20 to-transparent"
    },
    {
      title: "Academic Excellence",
      period: "2023",
      icon: GraduationCap,
      highlight: "School Topper & Subject Excellence",
      achievements: [
        "School Topper with 97.2% in AISSCE",
        "Physics Subject Topper - 99/100",
        "Mathematics Subject Topper - 98/100",
        "Science Stream Topper"
      ],
      className: "bg-gradient-to-br from-orange-500/20 to-transparent"
    },
    {
      title: "Early Achievements",
      period: "Pre-2023",
      icon: Award,
      highlight: "School Pupil Leader & Academic Excellence",
      achievements: [
        "School Pupil Leader - Led student initiatives and events",
        "First place in ISRO Vikram Sarabhai Quiz (2020)",
        "Multiple gold medals in national olympiads",
        "School Magazine Editor - Managed content and publication"
      ],
      className: "bg-gradient-to-br from-purple-500/20 to-transparent"
    },
    {
      title: "Volunteer Activities",
      period: "2023 - Present",
      icon: Lightbulb,
      highlight: "Community Engagement",
      achievements: [
        "TEDxBITSHYDERABAD - Event Volunteer & Coordination Team",
        "Computer Science Association (CSA) - Technical Workshop Volunteer",
        "Blockchain Society (BlockSoc) - Event Organization",
        "E-Cell - Community Building and Event Support"
      ],
      className: "bg-gradient-to-br from-yellow-500/20 to-transparent"
    }
  ];

  return (
    <section id="journey" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-primary">
            My Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            Key milestones and achievements in my professional journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10" />

          {timeline.map((item, index) => {
            const [ref, inView] = useInView({
              triggerOnce: false,
              threshold: 0.2,
            });

            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.title}
                ref={ref}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`relative mb-24 last:mb-0 grid grid-cols-1 md:grid-cols-2 gap-8 ${
                  isEven ? 'md:text-right' : 'md:text-left'
                }`}
              >
                <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <div className={`glass-card tech-border glow p-8 ${item.className}`}>
                    <div className={`flex items-center gap-4 mb-6 ${isEven ? 'justify-end' : 'justify-start'}`}>
                      <div className="p-4 rounded-full bg-primary/20">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                        <p className="text-primary">{item.period}</p>
                      </div>
                    </div>

                    {item.highlight && (
                      <div className="mb-6">
                        <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">
                          {item.highlight}
                        </div>
                      </div>
                    )}

                    <ul className="space-y-3">
                      {item.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                          className="flex items-center gap-2"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-foreground font-medium">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50">
                  <div className="absolute inset-0 rounded-full animate-ping bg-primary/50" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Journey;