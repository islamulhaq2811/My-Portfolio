import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero
          name="Hi, I'm Islam ul Haq"
          title="Web Developer"
          description="I build modern and responsive websites using technologies like React and JavaScript."
          profileImage={{
            src: '/images/Profile.png',
            alt: 'Islam ul Haq - Web Developer',
          }}
          ctas={{
            primary: {
              label: 'Download Resume',
              target: './IslamUlHaqResume.pdf',
            },
            secondary: {
              label: 'Contact Me',
              target: 'contact',
            },
          }}
        />

        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
