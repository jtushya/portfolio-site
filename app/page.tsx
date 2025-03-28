import SplashScreen from '@/components/SplashScreen';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Journey from '@/components/Journey';
import Projects from '@/components/Projects';
import Leadership from '@/components/Leadership';
import Skills from '@/components/Skills';
import Speaking from '@/components/Speaking';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Leadership />
      <Skills />
      <Speaking />
      <Contact />
    </>
  );
}