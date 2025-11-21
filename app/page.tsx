import Navigation from '@/components/navigation'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Technologies from '@/components/sections/technologies'
import Projects from '@/components/sections/projects'
import Experience from '@/components/sections/experience'
import Education from '@/components/sections/education'
import Contact from '@/components/sections/contact'
import Footer from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
