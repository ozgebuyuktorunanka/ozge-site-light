import { useReveal } from './hooks/useReveal';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Metrics } from './components/Metrics';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Industries } from './components/Industries';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      <TopBar />
      <main>
        <Hero />
        <About />
        <Metrics />
        <Skills />
        <Experience />
        <Industries />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
