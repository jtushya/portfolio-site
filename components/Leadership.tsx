"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, Mic } from 'lucide-react';

const Leadership = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const roles = [
    {
      title: "Startup Expo Lead",
      position: "Launchpad '25",
      description: "Managing startup showcase at annual entrepreneurship summit.",
      icon: Award,
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "TEDxBITSHYDERABAD",
      position: "Organizing Committee Member",
      description: "Coordinated speaker sessions and event logistics for inspiring talks.",
      icon: Mic,
      gradient: "from-red-500/20 to-orange-500/20"
    },
    {
      title: "Entrepreneurship Cell",
      position: "Core Team Member",
      description: "Led initiatives to foster entrepreneurship spirit among students.",
      icon: Users,
      gradient: "from-blue-500/20 to-purple-500/20"
    }
  ];

  return (
    <section id="leadership" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Leadership & Extracurricular</h2>
          <p className="text-lg text-muted-foreground">
            Key roles and responsibilities in various organizations and events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className={`h-full relative overflow-hidden bg-gradient-to-br ${role.gradient}`}>
                <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-white/10 rounded-full blur-2xl transform rotate-45" />
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-full bg-white/10 backdrop-blur-sm">
                    <role.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{role.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-primary mb-2">{role.position}</p>
                  <p className="text-muted-foreground">{role.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="glass-card">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Additional Involvement</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-primary/5 backdrop-blur-sm">
                  <p className="font-medium">Computer Science Association (CSA)</p>
                  <p className="text-sm text-muted-foreground">Core team member</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 backdrop-blur-sm">
                  <p className="font-medium">Blockchain Society (Blocksoc)</p>
                  <p className="text-sm text-muted-foreground">Active participant</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 backdrop-blur-sm">
                  <p className="font-medium">Enactus Tech Team</p>
                  <p className="text-sm text-muted-foreground">Contributor</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 backdrop-blur-sm">
                  <p className="font-medium">Various Clubs</p>
                  <p className="text-sm text-muted-foreground">Journal, Wall Street, Traders</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;