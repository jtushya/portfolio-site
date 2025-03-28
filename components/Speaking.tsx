"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Presentation, Video, Users, Calendar, MapPin, Mic } from 'lucide-react';

const Speaking = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      title: "Women Entrepreneurship Talk",
      organization: "E-Cell BITS Hyderabad",
      description: "Hosted a pre-Launchpad '24 talk with Vritvi Savant on women entrepreneurship.",
      icon: Mic,
      date: "2024",
      location: "Online"
    },
    {
      title: "Outreach Session with HOS",
      organization: "E-Cell BITS Hyderabad",
      description: "Hosted an interactive session with Saad from HOS focusing on outreach strategies.",
      icon: Users,
      date: "2024",
      location: "Online"
    },
    {
      title: "Blockchain Basics Workshop",
      organization: "Blocksoc BPHC",
      description: "Conducted an introductory session on blockchain technology and its applications.",
      icon: Presentation,
      date: "March 2024",
      location: "Main Auditorium"
    },
    {
      title: "App Development Workshop",
      organization: "Computer Science Association",
      description: "Led a hands-on workshop on modern app development practices and frameworks.",
      icon: Video,
      date: "February 2024",
      location: "F102, Academic Block"
    },
    {
      title: "TEDxBITSHYDERABAD Events",
      organization: "BITS Pilani Hyderabad Campus",
      description: "Hosted and coordinated multiple TEDx events, managing speaker sessions.",
      icon: Users,
      date: "2023-2024",
      location: "Various Venues"
    },
    {
      title: "Sports & Cultural Events",
      organization: "Various Organizations",
      description: "Served as anchor/emcee for multiple sports competitions and cultural events.",
      icon: Mic,
      date: "2023-2024",
      location: "Various Venues"
    }
  ];

  return (
    <section id="speaking" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Public Speaking & Workshops</h2>
          <p className="text-lg text-muted-foreground">
            Sharing knowledge and experiences through various speaking engagements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <Card className="h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg" />
                <CardHeader>
                  <div className="relative">
                    <div className="mb-4 inline-flex p-6 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <event.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute top-0 right-0 flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {event.organization}
                    </div>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Placeholder for future upcoming events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 hidden" // Add 'hidden' class to hide this section until needed
        >
          <Card className="glass-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <CardContent className="pt-6 relative">
              <h3 className="text-xl font-semibold mb-6">Upcoming Speaking Engagements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Add upcoming events here when available */}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Speaking;